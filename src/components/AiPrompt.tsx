"use client";
import { useTodos } from "@/hooks/useTodos";
import { aiPrompt } from "@/services/aiPrompt";
import { useRef, useState } from "react";
export const AiPrompt = () => {
  const { mutateTodos } = useTodos();
  const inputRef = useRef<HTMLInputElement>(null);
  const [response, setResponse] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      const inputValue = inputRef.current.value;
      const response = await aiPrompt(inputValue);
      setResponse(response);
    }
    mutateTodos();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ai Prompt</h2>
      <input className="text-black" type="text" name="prompt" ref={inputRef} />
      <button type="submit">Submit</button>
      {response && <p className="text-white">{response}</p>}
    </form>
  );
};
