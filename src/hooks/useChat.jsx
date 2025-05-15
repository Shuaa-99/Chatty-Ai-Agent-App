import { useState } from "react";
import { getOpenAIClient } from "../services/openai";

export const useChat = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (userMessage) => {
    const newMessages = [...messages, { role: "user", content: userMessage }];
    setMessages(newMessages);

    try {
      const openai = getOpenAIClient(); 

      const response = await openai.chat.completions.create({
        // model: "gpt-4o",
        model: "gpt-4-turbo",
        messages: newMessages,
      });

      const aiMessage = response.choices[0].message;
      setMessages((prev) => [...prev, aiMessage]);
      return aiMessage.content;
    } catch (error) {
      console.error("OpenAI Error:", error);
      return "An error occurred while connecting to OpenAI.";
    }
  };

  return {
    messages,
    sendMessage,
  };
};
