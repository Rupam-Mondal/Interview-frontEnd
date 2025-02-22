import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Mic, Send } from "lucide-react";
import { Particles } from "@/components/ui/particles";
import assets from "@/assets/assest";
import UserContext from "@/contexts/UserContext";

const Chat = () => {
  const navigate = useNavigate();
  const { chatid } = useParams();
  const [messages, setMessages] = useState([
    { text: "Hey! How are you?", sender: "other" },
    { text: "I'm good, what about you?", sender: "me" },
  ]);
  const [speaking, setSpeaking] = useState(false);
  const [input, setInput] = useState("");
  const [course,setCourse] = useState("AI");
  const [level, setLevel] = useState("Medium");
  const { userId } = useContext(UserContext);

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { text: input, sender: "me" }]);
    setInput("");
  };

  const voiceMessage = () => {
    setSpeaking(!speaking);
    if(!speaking){
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "en-IN";
      recognition.start();

      recognition.onresult = (e) => {
        const transcript = e.results[0][0].transcript;
        setInput(transcript);
        setSpeaking(false);
      };
    }
  };

  return (
    <div className="h-screen flex flex-col bg-black text-white">
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#ffffff"
        refresh
      />

      <div className="p-4 bg-gray-900 text-xl font-semibold border-b border-gray-700 flex items-center justify-between">
        <p>Chat ID: {chatid}</p>

        <div className="mt-3 flex flex-col md:flex-row gap-2 text-sm">
          <div className="flex items-center gap-2">
            <select
              id="course"
              className="bg-gray-800 text-white px-3 py-1 rounded-lg outline-none"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
              <option value="Data Science">Data Science</option>
              <option value="AI">AI</option>
              <option value="UI/UX">UI/UX</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <select
              id="level"
              className="bg-gray-800 text-white px-3 py-1 rounded-lg outline-none"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            >
              <option value="Beginner">Beginner</option>
              <option value="Medium">Medium</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
          <button
            onClick={() => navigate(`/dashboard/${userId}`)}
            className="p-2 rounded-full transition duration-300 bg-red-600 hover:bg-red-500"
          >
            <img src={assets.crossicon} alt="Close" className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-xs px-4 py-2 rounded-lg ${
              msg.sender === "me"
                ? "bg-blue-600 ml-auto"
                : "bg-gray-800 text-gray-300"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="p-4 bg-gray-900 flex items-center border-t border-gray-700">
        <input
          type="text"
          className="flex-1 bg-gray-800 px-4 py-2 rounded-lg outline-none text-white"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        <button
          className={`ml-2 p-2 ${
            !speaking
              ? "bg-blue-600 hover:bg-blue-500"
              : "bg-red-600 scale-150 hover:bg-red-500"
          } rounded-lg `}
          onClick={voiceMessage}
        >
          <Mic className="w-5 h-5" />
        </button>

        <button
          className="ml-2 p-2 bg-blue-600 rounded-lg hover:bg-blue-500"
          onClick={sendMessage}
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Chat;
