import Link from "next/link";
import { Todos } from "@/components/Todos";
import { AiPrompt } from "@/components/AiPrompt";

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center m-1">
      <h1>Todo App</h1>
      <Todos />
      <Link href="/newTodo" className="text-blue-500">
        Create Todo
      </Link>
      <AiPrompt />
    </div>
  );
}
