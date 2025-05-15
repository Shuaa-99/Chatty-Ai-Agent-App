import { useNavigate } from "react-router-dom";
import botIcon from "../assets/botIcon.json";
import Lottie from "lottie-react";
import { FiMic, FiUser } from "react-icons/fi";
import { Bot, User } from "lucide-react";
const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-900 via-indigo-900 to-gray-900 text-white px-4 overflow-hidden">
      {/* background  */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-0"
        aria-hidden="true"
      ></div>

      {/* content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Animation with title */}
        <div className="flex flex-col md:flex-row items-center justify-center">
          <p className="text-center text-gray-300 mb-8 max-w-md md:mr-12">
            Discover the power of AI — chat, transcribe, and manage your profile
            seamlessly.
          </p>
          <div className="relative h-48 w-48 mb-12 md:h-64 md:w-64">
            <Lottie animationData={botIcon} loop={true} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl w-full">
          {/* Chat Card */}
          <div
            className="p-6 bg-white/10 backdrop-blur-md rounded-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg"
            onClick={() => navigate("/chat")}
          >
            <div className="flex items-center gap-2 mb-4">
              <Bot size={28} />
              <h2 className="text-2xl font-semibold"> Chat</h2>
            </div>
            <p className="text-lg opacity-70">
              Engage in AI-driven conversations and get personalized answers.
            </p>
          </div>

          {/* Audio Card */}
          <div
            className="p-6 bg-white/10 backdrop-blur-md rounded-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg"
            onClick={() => navigate("/TranscriptionPage")}
          >
            <div className="flex items-center gap-2 mb-4">
              <FiMic size={24} />
              <h2 className="text-2xl font-semibold">Audio</h2>
            </div>
            <p className="text-lg opacity-70">
              Convert speech to text and explore new AI-powered audio features.
            </p>
          </div>

          {/* Profile Card */}
          <div
            className="p-6 bg-white/10 backdrop-blur-md rounded-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg"
            onClick={() => navigate("/profile")}
          >
            <div className="flex items-center gap-2 mb-4">
              <User size={24} />
              <h2 className="text-2xl font-semibold ">Profile</h2>
            </div>
            <p className="text-lg opacity-70">
              View and edit your personal information in your profile.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
