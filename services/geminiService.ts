
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const brainstormProject = async (description: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Act as a senior technical consultant at Royss Agency. Based on this project idea: "${description}", suggest a recommended tech stack, 3 key innovative features, and a high-level development roadmap.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            features: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Key innovative features suggested for the project."
            },
            techStack: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Recommended modern technologies."
            },
            summary: {
              type: Type.STRING,
              description: "A short professional summary of the proposal."
            }
          },
          required: ["features", "techStack", "summary"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini Brainstorming Error:", error);
    throw error;
  }
};
