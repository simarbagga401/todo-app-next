import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const correctText = async (inputText: string) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  
  try {
    const prompt = `Task: Grammar correction
Please improve the following text's grammar while preserving its meaning:
"${inputText.trim()}"`;

    const result = await model.generateContent(prompt);
    const correctedText = result.response.text();
    return correctedText;
  } catch (error) {
    console.error('Gemini API error:', error);
    return inputText; // Return original text if correction fails
  }
};

export async function POST(req: Request) {
  const { text } = await req.json();
  const correctedText = await correctText(text);
  return NextResponse.json({ result: correctedText });
}
