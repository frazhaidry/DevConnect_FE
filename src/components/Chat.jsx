import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Send, User } from "lucide-react";
import { time } from "framer-motion";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import axiosInstance from "../config/axiosInstance";



const Chat = () => {

  
  const { targetUserId} = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const user = useSelector((store) => store.user)
  const userId = user?._id;

  const fetchMessages = async () => {
     const chat = await axiosInstance.get(`/chat/${targetUserId}`)
     console.log(chat)
     console.log(chat.data.messages)

     const chatMessages = chat?.data?.messages.map(msg => {
        const {senderId , text} = msg
        return { firstName: senderId?.firstName , lastName: senderId?.lastName, text: text}
        
     })
     setMessages(chatMessages);
  }

  useEffect(()=> {
    fetchMessages();
  }, [])

  useEffect(() => {
    if(!userId){
        return;
    }
    const socket = createSocketConnection();

    // As soon as the page loaded the socket connection is made and joinchat event is emitted
    socket.emit("joinChat", {firstName: user.firstName , userId,  targetUserId });

    socket.on("messageReceived", ({firstName, text}) => {
        // console.log("Message received", firstName, text);
        setMessages((prev) => [
            ...prev,
            {
                firstName,
                text,
                time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                
            },
        ]);
    })
    return () => {
      socket.disconnect(); // Clean up the socket connection when the component unmounts
    }

  },[userId, targetUserId]); 
  
  const handleSend = () => {
    const Socket = createSocketConnection();
    Socket.emit("sendMessage", {
        firstName: user.firstName,
        userId,
        targetUserId,
        text: newMessage,
    })
   
      setNewMessage("");
  };

  

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#121212] text-gray-100">
      <div className="w-full max-w-md h-[600px] flex flex-col border border-gray-800 rounded-2xl bg-[#1E1E1E] shadow-[0_0_20px_rgba(0,0,0,0.5)] overflow-hidden">

        {/* Header */}
        <div className="p-4 border-b border-white/10 flex items-center gap-3 bg-[#1A1A1A]">
          <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm font-semibold">Chat </span>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3">
  {messages.map((msg, idx) => (
    <div
      key={idx}
      className={`max-w-[75%] px-4 py-2 rounded-xl text-sm shadow-sm transition-all duration-300 ${
        msg.firstName === user.firstName // Assuming "user" is the logged-in user
          ? "ml-auto bg-blue-600 text-white"
          : "mr-auto bg-gray-700 text-white"
      }`}
    >
        <div className="font-semibold text-sm mb-1">{`${msg.firstName} ${msg.lastName || ""}`}</div>
      <div>{msg.text}</div>
      <div className="text-[10px] opacity-60 text-right mt-1">{msg.time}</div>
    </div>
  ))}
</div>

        {/* Input */}
        <div className="p-3 border-t border-white/10 flex gap-2 items-center bg-[#1A1A1A]">
          <input
            type="text"
            placeholder="Type message…"
            className="flex-1 px-4 py-2 rounded-full bg-[#2A2A2A] border border-gray-700 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 transition flex items-center justify-center"
          >
            <Send className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );

};

export default Chat;