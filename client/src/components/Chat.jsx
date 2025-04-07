import { useEffect, useState, useRef } from "react";
import { supabase } from "../utils/supabaseClient";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000"); // Connect to backend

const Chat = () => {
    const [users, setUsers] = useState([]);
    const [chats, setChats] = useState([]);
    const [display, setDisplay] = useState("");
    const [displayId, setDisplayId] = useState("");
    const [message, setMessage] = useState("");
    const [currentUserId, setCurrentUserId] = useState(null);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        const getUser = async () => {
            const { data: { user }, error } = await supabase.auth.getUser();
            if (user) {
                setCurrentUserId(user.id);
                console.log("Logged-in user ID:", user.id);
            } else {
                console.error("Error fetching user:", error);
            }
        };
        getUser();
    }, []);

    useEffect(() => {
        const fetchUsers = async () => {
            if (!currentUserId) return;
            const { data, error } = await supabase
                .from("users_new")
                .select("id, full_name, email, role")
                .neq("id", currentUserId);

            if (error) {
                console.error("Error fetching users from users_new:", error.message);
            } else {
                setUsers(data);
            }
        };
        fetchUsers();
    }, [currentUserId]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [chats]);

    useEffect(() => {
        // Listen for incoming messages
        socket.on("message", (data) => {
            // Add message only if it is from or to the current user
            if (
                (data.sender_id === currentUserId && data.receiver_id === displayId) ||
                (data.sender_id === displayId && data.receiver_id === currentUserId)
            ) {
                setChats((prev) => [...prev, data]);
            }
        });

        return () => {
            socket.off("message"); // Cleanup listener
        };
    }, [currentUserId, displayId]);

    const handleChatDisplay = async (userEmail, userId) => {
        setDisplay(userEmail);
        setDisplayId(userId);
        setChats([]);

        const { data, error } = await supabase
            .from("messages")
            .select("id, sender_id, receiver_id, content, created_at")
            .or(
                `and(sender_id.eq.${currentUserId},receiver_id.eq.${userId}),and(sender_id.eq.${userId},receiver_id.eq.${currentUserId})`
            )
            .order("created_at", { ascending: true });

        if (error) console.error("Error fetching messages:", error.message);
        else setChats(data);
    };

    const handleSendMessage = async () => {
        if (!message.trim()) return;
    
        const newMessage = {
            sender_id: currentUserId,
            receiver_id: displayId,
            content: message,
            created_at: new Date().toISOString(),
        };
    
        // 1. Save to DB
        const { data, error } = await supabase.from("messages").insert([newMessage]).select();
    
        if (error) {
            console.error("Error sending message:", error.message);
        } else {
            const savedMessage = data[0];
            setMessage(""); // clear input
            socket.emit("message", savedMessage); // Emit only once — socket will update the UI
        }
    };
    
    return (
        <div className="flex flex-row w-full gap-4 p-4">
            {/* Sidebar with Users */}
            <div className="p-6 bg-white w-1/2 rounded-lg">
                <ul className="space-y-4">
                    {users.length > 0 ? users.map(user => (
                        <li key={user.id} className="p-4 bg-gray-50 hover:bg-gray-100 rounded-lg shadow-md cursor-pointer"
                            onClick={() => handleChatDisplay(user.full_name, user.id)}>
                            <span className="text-lg font-medium text-black/80">{user.full_name}</span>
                        </li>
                    )) : <p className="text-lg text-gray-500">No other users found</p>}
                </ul>
            </div>

            {/* Chat Display */}
            {display ? (
                <div className="p-6 bg-gray-50 w-1/2 rounded-lg flex flex-col">
                    <h2 className="text-2xl font-bold text-black mb-4">Chat with {display}</h2>

                    <div className="flex-1 overflow-y-auto max-h-96 pr-2">
                        {chats.length > 0 ? chats.map(chat => (
                            <div key={chat.id} className={`flex flex-col mb-2 ${chat.sender_id === currentUserId ? "items-end" : "items-start"}`}>
                                <div className={`p-4 rounded-lg shadow-sm ${chat.sender_id === currentUserId ? "bg-blue-500 text-white text-right" : "bg-white text-blue-500 text-left"}`}>
                                    <p className="text-lg">{chat.content}</p>
                                </div>
                                <p className="text-xs text-gray-400 mt-1">{new Date(chat.created_at).toLocaleString()}</p>
                                <div ref={messagesEndRef}></div>
                            </div>
                        )) : <p className="text-lg text-gray-500">No messages found</p>}
                    </div>

                    {/* Input */}
                    <div className="mt-4">
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)}
                            className="w-full p-2 border rounded-lg text-black" placeholder="Type a message" />
                        <button onClick={handleSendMessage} className="mt-2 p-2 bg-blue-500 text-white rounded-lg w-full">
                            Send Message
                        </button>
                    </div>
                </div>
            ) : (
                <div className="p-6 bg-gray-50 w-1/2 rounded-lg flex items-center justify-center h-64">
                    <p className="text-lg text-gray-500">No chat selected</p>
                </div>
            )}
        </div>
    );
};

export default Chat;
