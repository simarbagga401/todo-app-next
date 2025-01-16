import { NextResponse } from "next/server";
import { google } from "@ai-sdk/google";
import { generateText, tool } from "ai";
import { z } from "zod";
import axios from "axios";

const processPrompt = async (inputText: string) => {
  const result = await generateText({
    model: google("gemini-1.5-flash"),
    prompt: inputText,
    tools: {
      addTodo: tool({
        description: "Add a todo to the list",
        parameters: z.object({
          id: z
            .string()
            .describe("generate random id hexadecimal for the todo"),
          title: z
            .string()
            .describe("Generate a title for the todo by yourself, if not provided"),
          completed: z
            .boolean()
            .describe(
              "complted status should be false"
            ),
        }),
        execute: async ({ id, title, completed }) => {
          axios.post("http://localhost:8000/createTodo", {
            id,
            title,
            completed,
          });
          console.log("execute ran");
          console.log("id", id);
          console.log("title", title);
          console.log("completed", completed);
        },
      }),
    },
    temperature: 1,
  });

  return result.text;
};

export async function POST(req: Request) {
  const { text } = await req.json();
  const processedText = await processPrompt(text);
  return NextResponse.json({ result: processedText });
}
