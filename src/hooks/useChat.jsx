// import { useState } from "react";
// import openai from "../services/openai";

// export const useChat = () => {
//   const [messages, setMessages] = useState([]);
//   console.log(openai.apiKey);
//   const sendMessage = async (userMessage) => {
//     // add user message
//     const newMessages = [...messages, { role: "user", content: userMessage }];
//     setMessages(newMessages);

//     try {
//       const response = await openai.chat.completions.create({
//         model: "gpt-4o",
//         messages: newMessages,
//       });

//       const aiMessage = response.choices[0].message;

//       setMessages((prev) => [...prev, aiMessage]);
//       return aiMessage.content;
//     } catch (error) {
//       console.error("OpenAI Error:", error);
//       return " An error occurred while connecting to OpenAI.";
//     }
//   };

//   return {
//     messages,
//     sendMessage,
//   };
// };

import { useState } from "react";
import { getOpenAIClient } from "../services/openai";

export const useChat = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (userMessage) => {
    const newMessages = [...messages, { role: "user", content: userMessage }];
    setMessages(newMessages);

    try {
      const openai = getOpenAIClient(); // ✅ الآن تحصل على الـ API key المحدث

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
