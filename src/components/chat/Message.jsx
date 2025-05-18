import ReactMarkdown from "react-markdown";
import { useDarkMode } from "../../context/DarkModeContext";
const Message = ({ content, role }) => {
  const isUser = role === "user";
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`p-3 rounded-lg max-w-[75%] whitespace-pre-wrap ${
          isUser
            ? "bg-blue-600 text-white"
            : isDarkMode
            ? "bg-gray-700 text-white"
            : "bg-gray-200 text-black"
        }`}
      >
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Message;
