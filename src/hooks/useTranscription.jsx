import { useState } from "react";
import OpenAI from "openai";

const useTranscription = () => {
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'
  const [transcription, setTranscription] = useState("");

  const transcribe = async (file) => {
    setStatus("loading");
    setTranscription("");

    try {
      const apiKey = localStorage.getItem("apiKey");
      if (!apiKey) throw new Error("API key not found");

      const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

      const response = await openai.audio.transcriptions.create({
        file,
        model: "whisper-1",
        language: "en", 
      });

      setTranscription(response.text);
      setStatus("success");
    } catch (error) {
      console.error("Transcription error:", error);
      setStatus("error");
    }
  };

  return { transcribe, status, transcription };
};

export default useTranscription;
