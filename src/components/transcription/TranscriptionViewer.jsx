import { useState } from "react";
import { useDarkMode } from "../../context/DarkModeContext";

const TranscriptionViewer = ({ transcription }) => {
  const { isDarkMode } = useDarkMode();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(transcription);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  if (!transcription) return null;

  return (
    <div
      className={`mt-6 p-4 rounded-lg ${
        isDarkMode ? "bg-white/10" : "bg-gray-200"
      } text-black`}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-black">Transcription</h3>
        <button
          onClick={handleCopy}
          className="text-sm bg-blue-600 px-3 py-1 rounded hover:bg-blue-700 text-white"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <p className="whitespace-pre-wrap text-black">{transcription}</p>
    </div>
  );
};

export default TranscriptionViewer;
