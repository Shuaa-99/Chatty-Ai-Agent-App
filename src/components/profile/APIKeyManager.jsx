import { useState } from "react";
import openai from "../../services/openai";

const APIKeyManager = () => {
  const [apiKey, setApiKey] = useState("");

  const handleSave = () => {
    // Save the API key to user's profile or local storage
    console.log("API Key Saved: ", apiKey);
    openai.apiKey = apiKey;
    localStorage.setItem("apiKey", apiKey);
    alert("API Key Saved");
    
  };

  return (
    <div className="p-4 bg-gray-900 text-white">
      <h2 className="text-xl">Manage API Key</h2>
      <input
        type="text"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        className="px-4 py-2 rounded-lg bg-gray-800 text-white"
        placeholder="Enter your OpenAI API key"
      />
      <button
        onClick={handleSave}
        className="bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-2 rounded-lg mt-2"
      >
        Save API Key
      </button>
    </div>
  );
};

export default APIKeyManager;
