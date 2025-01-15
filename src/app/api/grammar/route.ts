import { NextResponse } from "next/server";
import { google } from "@ai-sdk/google";
import { generateText } from "ai";

const correctText = async (inputText: string) => {
  const result = await generateText({
    model: google("gemini-1.5-flash"),
    prompt: "Grammatically Correct the following text: " + inputText,
    temperature: 1,
  });
  return result.text;
};

export async function POST(req: Request) {
  const { text } = await req.json();
  const correctedText = await correctText(text);
  return NextResponse.json({ result: correctedText });
}
