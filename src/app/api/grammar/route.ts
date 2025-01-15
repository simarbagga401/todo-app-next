import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const correctText = async (inputText: string) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(
    "Grammatically Correct the following text: " + inputText
  );
  const correctedText = result.response.text();
  return correctedText;
};

export async function POST(req: Request) {
  const { text } = await req.json();
  const correctedText = await correctText(text);
  return NextResponse.json({ result: correctedText });
}
