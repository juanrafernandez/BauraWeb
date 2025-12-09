import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize the API client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getScentRecommendation = async (userPreference: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const systemInstruction = `You are an expert perfumer and olfactory guide for the app "Baura". 
    Your tone is elegant, sophisticated, and sensory.
    The user will describe a feeling, a memory, or scents they like.
    You must recommend a fragrance family (Floral, Woody, Oriental, Fresh) and specific notes that match their description.
    Keep the response concise (under 80 words) but poetic.`;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: model,
      contents: userPreference,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "I apologize, I couldn't quite catch that scent. Could you describe it differently?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our scent AI is currently recalibrating its senses. Please try again later.";
  }
};