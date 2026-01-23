
import { GoogleGenAI } from "@google/genai";
import { Product } from "../types";

// Always initialize GoogleGenAI using the process.env.API_KEY directly.
export const getSmartRecommendations = async (userPrompt: string, availableProducts: Product[]) => {
  // const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  // const productList = availableProducts.map(p => `${p.name} (ID: ${p.id}, Category: ${p.category}, Price: ₹${p.price})`).join(", ");

  // const systemInstruction = `
  //   You are a smart shopping assistant for Marutifresh. 
  //   Users will ask for help finding products, recipes, or gift ideas.
  //   You have access to these products: [${productList}].
  //   Recommend 2-3 specific products from the list that match the user's request.
  //   Keep your response friendly, concise, and helpful.
  //   Include the price and a brief reason why you recommended it.
  // `;

  // try {
  //   const response = await ai.models.generateContent({
  //     model: "gemini-3-flash-preview",
  //     contents: userPrompt,
  //     config: {
  //       systemInstruction,
  //       temperature: 0.7,
  //     }
  //   });

  //   // Access the .text property directly, do not call it as a method.
  //   return response.text || "I'm having trouble thinking of recommendations right now.";
  // } catch (error) {
  //   console.error("Gemini Error:", error);
  //   return "Something went wrong while getting recommendations. Please try again.";
  // }
};
