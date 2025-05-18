// services/openai.js
import { OpenAI } from "openai";

export const getOpenAIClient = () => {
  const apiKey = localStorage.getItem("apiKey");
  if (!apiKey) {
    throw new Error("No API key found in localStorage");
  }

  return new OpenAI({
    apiKey,
    dangerouslyAllowBrowser: true,
  });
};
