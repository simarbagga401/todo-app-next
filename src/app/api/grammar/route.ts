import { NextResponse } from "next/server";
import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";

const correctText = async (inputText: string) => {
  const { text: correctedText } = await generateText({
    model: openai("gpt-3.5-turbo"),
    prompt: "Grammatically Correct the following text: " + inputText,
    temperature: 1,
  });

  return correctedText;
};

export async function POST(req: Request) {
  const { text } = await req.json();
  const correctedText = await correctText(text);
  return NextResponse.json({ result: correctedText });
}
