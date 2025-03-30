import { useEffect, useState, useRef } from "react";
import { supabase } from "../utils/supabaseClient.js";

const Chat = () => {
    const [groups, setGroups] = useState([]);
    const [users, setUsers] = useState([]);
    const [chats, setChats] = useState([]);
    const [display, setDisplay] = useState("");
    const [displayId, setDisplayId] = useState("");
    const [currentUserId, setCurrentUserId] = useState("fe1bd5e1-dc47-4241-961d-cd2a001438ba");
    const [message, setMessage] = useState("");
    const [authUser, setAuthUser] = useState("");

    const messagesEndRef = useRef(null);

    useEffect(() => {
        const fetchCurrentUser = async () => {
            const { data: { user }, error } = await supabase.auth.getUser();
            if (error) {
                console.error("Error fetching authenticated user:", error.message);
            } else if (user) {
                setCurrentUserId(user.id);
            }
        };

        fetchCurrentUser();

        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            if (session) {
                setAuthUser(session.user.id);
                console.log("Authenticated User:", session.user.id);
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            authListener?.subscription?.unsubscribe();
        };
    }, []);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [chats]);

    useEffect(() => {
        const fetchGroups = async () => {
            const { data, error } = await supabase.from("groups").select("*");
            if (error) {
                console.error("Error fetching groups:", error.message);
            } else {
                setGroups(data);
            }
        };
        fetchGroups();
    }, []);

    useEffect(() => {
        const fetchUsers = async () => {
            const { data, error } = await supabase.from("users").select("*");
            if (error) {
                console.error("Error fetching users:", error.message);
            } else {
                setUsers(data);
            }
        };
        fetchUsers();
    }, []);

    const handleGroupDisplay = async (groupName, groupId) => {
        setDisplay(groupName);
        setDisplayId(groupId);
        setChats([]);

        const { data, error } = await supabase.from("messages")
            .select("id, sender_id, group_id, content, created_at")
            .eq("group_id", groupId);

        if (error) {
            console.error("Error fetching messages:", error.message);
        } else {
            setChats(data);
        }
    };

    const handleChatDisplay = async (userName, userId) => {
        setDisplay(userName);
        setDisplayId(userId);
        setChats([]);

        const { data, error } = await supabase.from("messages")
            .select("id, sender_id, receiver_id, content, created_at")
            .or(`sender_id.eq.${userId},receiver_id.eq.${userId}`);

        if (error) {
            console.error("Error fetching messages:", error.message);
        } else {
            setChats(data);
        }
    };

    const handleSendMessage = async () => {
        if (!message.trim()) return;

        const isGroupChat = groups.some(group => group.id === displayId);

        const newMessage = {
            sender_id: currentUserId,
            content: message,
            created_at: new Date().toISOString(),
            ...(isGroupChat ? { group_id: displayId } : { receiver_id: displayId })
        };

        const { data, error } = await supabase.from("messages").insert([newMessage]).select();

        if (error) {
            console.error("Error sending message:", error.message);
        } else if (data?.length) {
            setChats(prevChats => [...prevChats, data[0]]);
            setMessage("");
        }
    };

    return (
        <div className="flex flex-row w-full gap-4 p-4">
            <div className="p-6 bg-white w-1/2 rounded-lg">
                <ul className="space-y-4 mb-2">
                    {groups.length > 0 ? groups.map(group => (
                        <li key={group.id} className="p-4 bg-gray-50 hover:bg-gray-100 rounded-lg shadow-md" onClick={() => handleGroupDisplay(group.name, group.id)}>
                            <span className="text-lg font-medium text-black/80">{group.name}</span>
                        </li>
                    )) : <p className="text-lg text-gray-500">No groups found</p>}
                </ul>
                <ul className="space-y-4">
                    {users.length > 0 ? users.map(user => (
                        <li key={user.id} className="p-4 bg-gray-50 hover:bg-gray-100 rounded-lg shadow-md" onClick={() => handleChatDisplay(user.name, user.id)}>
                            <span className="text-lg font-medium text-black/80">{user.name}</span>
                        </li>
                    )) : <p className="text-lg text-gray-500">No users found</p>}
                </ul>
            </div>

            {display ? (
                <div className="p-6 bg-gray-50 w-1/2 rounded-lg flex flex-col">
                    <h2 className="text-2xl font-bold text-black mb-4">Messages in {display}</h2>

                    <div className="flex-1 overflow-y-auto max-h-96 pr-2">
                        {chats.length > 0 ? chats.map(chat => (
                            <div key={chat.id} className={`flex flex-col items-start mb-2 ${chat.sender_id === currentUserId ? "items-end" : "items-start"}`}>
                                <div className={`p-4 rounded-lg shadow-sm ${chat.sender_id === currentUserId ? "bg-blue-500 text-white text-right" : "bg-white text-blue-500 text-left"}`}>
                                    <p className="text-lg">{chat.content}</p>
                                </div>
                                <p className="text-xs text-gray-400 mt-1">{new Date(chat.created_at).toLocaleString()}</p>
                                <div ref={messagesEndRef}></div>
                            </div>
                        )) : <p className="text-lg text-gray-500">No messages found</p>}
                    </div>

                    <div className="mt-4">
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full p-2 border rounded-lg text-black" placeholder="Type a message"></textarea>
                        <button onClick={handleSendMessage} className="mt-2 p-2 bg-blue-500 text-white rounded-lg w-full">Send Message</button>
                    </div>
                </div>
            ) : (
                <div className="p-6 bg-gray-50 w-1/2 rounded-lg flex items-center justify-center h-64">
                    <p className="text-lg text-gray-500">No messages selected</p>
                </div>
            )}
        </div>
    );
};

export default Chat;