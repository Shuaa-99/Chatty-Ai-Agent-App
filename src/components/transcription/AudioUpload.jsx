import { useRef } from "react";
import { CloudUpload } from "lucide-react";
import { useDarkMode } from "../../context/DarkModeContext";

const AudioUpload = ({ onUpload }) => {
  const { isDarkMode } = useDarkMode();
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("audio/")) {
      onUpload(file);
    } else {
      alert("Please upload a valid audio file.");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("audio/")) {
      onUpload(file);
    } else {
      alert("Please drop a valid audio file.");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={`relative border-2 ${
        isDarkMode
          ? "border-white/50 bg-white/10"
          : "border-gray-500 bg-gray-100"
      }
        rounded-3xl p-10 text-center backdrop-blur-md
        transition hover:border-purple-600 cursor-pointer shadow-xl overflow-hidden`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onClick={() => fileInputRef.current.click()}
    >
      <div className="absolute inset-0 bg-dot-pattern bg-[length:20px_20px] opacity-10 pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col items-center space-y-4">
        <CloudUpload className="w-12 h-12 text-purple-600" />
        <p
          className={`text-lg font-semibold ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          Upload Audio
        </p>
        <p
          className={`text-sm ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Drag & drop an audio file here or click to select
        </p>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="audio/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default AudioUpload;
