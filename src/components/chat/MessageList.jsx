import { useEffect, useRef } from "react";
import Message from "./Message";
import { useDarkMode } from "../../context/DarkModeContext";
import { Link } from "react-router-dom";

const MessageList = ({ messages, isLoading }) => {
  const endOfMessagesRef = useRef(null);
  const { isDarkMode } = useDarkMode();

  const apiKey = localStorage.getItem("apiKey");

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  if (!apiKey) {
    return (
      <div
        className={`p-6 rounded-xl text-center mt-4 shadow-md border max-w-md mx-auto ${
          isDarkMode
            ? "bg-white/10 text-white border-white/20"
            : "bg-white text-gray-800 border-gray-300"
        }`}
      >
        <p className="mb-3 font-medium">
          You need to add your{" "}
          <span className="text-purple-500">OpenAI API key</span> before sending
          messages.
        </p>
        <Link
          to="/profile"
          className={`inline-block mt-2 px-4 py-2 rounded-lg text-sm font-medium ${
            isDarkMode
              ? "bg-purple-600 text-white hover:bg-purple-700"
              : "bg-purple-500 text-white hover:bg-purple-600"
          }`}
        >
          Go to Profile
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {messages.map((msg, idx) => (
        <div key={idx}>
          <Message key={idx} content={msg.content} role={msg.role} />
        </div>
      ))}

      {isLoading && (
        <div
          className={`p-3 rounded-xl max-w-fit self-start flex gap-1 animate-pulse ${
            isDarkMode ? "bg-gray-700" : "bg-gray-300"
          }`}
        >
          <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0s]"></span>
          <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.2s]"></span>
          <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.4s]"></span>
        </div>
      )}

      <div ref={endOfMessagesRef} />
    </div>
  );
};

export default MessageList;
