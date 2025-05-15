import AudioUpload from "../components/transcription/AudioUpload";
import ProgressIndicator from "../components/transcription/ProgressIndicator";
import TranscriptionViewer from "../components/transcription/TranscriptionViewer";
import useTranscription from "../hooks/useTranscription";
import Sidebar from "../components/chat/Sidebar";
import { useDarkMode } from "../context/DarkModeContext";
import { Link } from "react-router-dom"; 

const TranscriptionPage = () => {
  const { transcribe, status, transcription } = useTranscription();
  const { isDarkMode } = useDarkMode();

  const apiKey = localStorage.getItem("apiKey");

  const handleUpload = async (file) => {
    await transcribe(file);
  };


  if (!apiKey) {
    return (
      <div
        className={`flex min-h-screen ${
          isDarkMode
            ? "bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900 text-white"
            : "bg-gradient-to-br from-white via-gray-100 to-gray-200 text-gray-900"
        }`}
      >
        <Sidebar />
        <div className="flex-1 flex flex-col items-center justify-center p-10">
          <div
            className={`p-8 rounded-xl max-w-lg text-center shadow-xl border ${
              isDarkMode
                ? "bg-white/10 text-white border-white/20"
                : "bg-white text-gray-900 border-gray-300"
            }`}
          >
            <h2 className="text-xl font-semibold mb-4">API Key Required</h2>
            <p className="mb-4">
              You must provide your{" "}
              <span className="text-purple-500">OpenAI API Key</span> to use
              transcription.
            </p>
            <Link
              to="/profile"
              className={`inline-block px-4 py-2 rounded-lg font-medium ${
                isDarkMode
                  ? "bg-purple-600 hover:bg-purple-700 text-white"
                  : "bg-purple-500 hover:bg-purple-600 text-white"
              }`}
            >
              Go to Profile
            </Link>
          </div>
        </div>
      </div>
    );
  }

 
  return (
    <div
      className={`flex min-h-screen ${
        isDarkMode
          ? "bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900 text-white"
          : "bg-gradient-to-br from-white via-gray-100 to-gray-200 text-gray-900"
      }`}
    >
      <Sidebar />

      <div className="flex-1 p-6">
        <h2
          className={`text-2xl font-bold mb-4 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Audio Transcription
        </h2>
        <AudioUpload onUpload={handleUpload} />
        <ProgressIndicator status={status} />
        <TranscriptionViewer transcription={transcription} />
      </div>
    </div>
  );
};

export default TranscriptionPage;
