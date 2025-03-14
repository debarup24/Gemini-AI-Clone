const apiKey = import.meta.env.VITE_GEMINI_API_KEY ;

import {
    GoogleGenerativeAI,
    
  } from "@google/generative-ai" ;

  
  
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro-latest",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function runChat(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    const response = result.response.text()
    console.log(result.response.text());
    return response ;
  }
  
 export default runChat ; 