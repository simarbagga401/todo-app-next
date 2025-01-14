import { createTodo } from "@/services/createTodo";

export const Form = () => {
    const handleCreateTodo = async (formData: FormData) => {
      // Using Server Actions
        "use server"
        const title = formData.get("title")?.toString();
        const completed = formData.get("completed")?.toString();
        const id = Math.random().toString(36).substring(2) + Date.now().toString(36);
        const todo = {
            id: id,
            title: title as string,
            completed: completed === "true" ? true : false
        }
            await createTodo(todo);
    }

  return (
    <form className="flex flex-col items-center justify-center gap-2" action={handleCreateTodo}>
      <input className="text-black  " type="text" placeholder="Todo Title" name="title" />
      <div>
        Completed:
        <input className="m-2" type="checkbox" placeholder="Completed" name="completed" />
      </div>
      <button className="text-blue-500" type="submit">
        Create Todo
      </button>
    </form>
  );
};
