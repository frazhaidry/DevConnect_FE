import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Send } from "lucide-react";
import { useSelector } from "react-redux";
import axiosInstance from "../../../config/axiosInstance";
import { createSocketConnection } from "../../../utils/socket";

const Chat = () => {
  const { targetUserId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [targetUser, setTargetUser] = useState(null);
  const user = useSelector((store) => store.user);
  const userId = user?._id;

  const fetchMessages = async () => {
    const chat = await axiosInstance.get(`/chat/${targetUserId}`);
   
    const chatMessages = chat?.data?.messages.map((msg) => {
      const { senderId, text } = msg;
      return {
        firstName: senderId?.firstName,
        lastName: senderId?.lastName,
        text: text,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
    });
    setMessages(chatMessages);
    setTargetUser(chat?.data?.targetUser);
    // console.log("chat", chat?.data?.messages[0]?.senderId?.firstName);
    // console.log("Target User:", chat?.data?.targetUser);
    // console.log("Messages:", chatMessages);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  useEffect(() => {
    if (!userId) return;
    const socket = createSocketConnection();

    socket.emit("joinChat", {
      firstName: user.firstName,
      userId,
      targetUserId,
    });

    socket.on("messageReceived", ({ firstName, text }) => {
      setMessages((prev) => [
        ...prev,
        {
          firstName,
          text,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    });

    return () => socket.disconnect();
  }, [userId, targetUserId]);

  const handleSend = () => {
    const Socket = createSocketConnection();
    Socket.emit("sendMessage", {
      firstName: user.firstName,
      userId,
      targetUserId,
      text: newMessage,
    });
    setNewMessage("");
  };

  return (
    <div className="min-h-screen px-4 py-10 bg-[#F8F3D9] text-[#504B38] flex flex-col items-center justify-center">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-[#504B38]">
          💬 Chatting with <span className="underline decoration-wavy decoration-[#B9B28A]">{targetUser?.firstName || "User"}</span>
        </h2>
        <p className="text-[#786F4C] font-medium text-sm">Start a vibrant conversation with your connection ✨</p>
      </div>

   <div className="w-full max-w-2xl h-[600px] flex flex-col border border-[#E5DFB9] rounded-[2rem] bg-[#EBE5C2] shadow-[0_12px_40px_rgba(80,75,56,0.2)] overflow-hidden relative">

  {/* Decorative Grainy BG */}
  <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-5 pointer-events-none z-0" />

  {/* Header with user info */}
  <div className="z-10 px-6 py-4 border-b border-[#E5DFB9] bg-[#F8F3D9] text-[#504B38] flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-[#B9B28A] flex items-center justify-center text-white font-bold text-lg shadow-inner">
        {targetUser?.firstName?.[0] || "U"}
      </div>
      <div>
        <h3 className="font-bold text-lg tracking-wide">{targetUser?.firstName} {targetUser?.lastName}</h3>
        <p className="text-sm text-[#786F4C]">Connected</p>
      </div>
    </div>
    <span className="text-xs italic text-[#A8A078]">Live Chat</span>
  </div>

  {/* Messages */}
  <div className="flex-1 px-6 py-5 overflow-y-auto space-y-5 custom-scrollbar z-10">
    {messages.map((msg, idx) => (
      <div
        key={idx}
        className={`max-w-[80%] px-5 py-3 rounded-3xl shadow-md text-sm transition-all duration-300 break-words relative animate-fadeIn ${
          msg.firstName === user.firstName
            ? "ml-auto bg-gradient-to-br from-[#B9B28A] to-[#A59F75] text-white"
            : "mr-auto bg-white text-[#504B38]"
        }`}
      >
        <div className="text-xs font-semibold opacity-70 mb-1">
          {msg.firstName} {msg.lastName || ""}
        </div>
        <div className="leading-snug font-medium tracking-tight">{msg.text}</div>
        <div className="text-[10px] opacity-50 text-right mt-1">{msg.time}</div>
      </div>
    ))}
  </div>

  {/* Input Box */}
  <div className="z-10 px-5 py-4 border-t border-[#E5DFB9] bg-[#F8F3D9] backdrop-blur-lg flex gap-3 items-center">
    <input
      type="text"
      placeholder="Type your message..."
      className="flex-1 px-5 py-3 text-sm rounded-full border border-[#B9B28A] bg-white/70 backdrop-blur text-[#504B38] placeholder-[#A8A078] focus:outline-none focus:ring-2 focus:ring-[#B9B28A] transition"
      value={newMessage}
      onChange={(e) => setNewMessage(e.target.value)}
      onKeyDown={(e) => e.key === 'Enter' && handleSend()}
    />
    <button
      onClick={handleSend}
      className="p-3 rounded-full bg-gradient-to-tr from-[#B9B28A] to-[#A59F75] hover:scale-105 transition-transform shadow-lg"
    >
      <Send className="w-5 h-5 text-white" />
    </button>
  </div>
</div>


    </div>
  );
};

export default Chat;
