import { io } from "socket.io-client";

const socket = io("http://localhost:5000"); // your server URL

export default socket;
