"use client"
import { fetchedTodo } from "@/types/Todo";
import { updateTodo } from "@/services/updateTodo";
import { deleteTodo } from "@/services/deleteTodo";
import { useTodos } from "@/hooks/useTodos";

export const Todos = () => {
    const { todos, mutateTodos, isLoading } = useTodos();

  return (
    <div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <h2>Todos:</h2>
      )}
        <ul>
          {todos?.map((todo: fetchedTodo, i: number) => {
            return (
              <div key={i} className="flex flex-col items-center justify-center gap-2 border-2 border-gray-300 p-2 rounded-md">
                <li>{todo.title}</li>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => console.log(updateTodo({id: todo._id, completed: !todo.completed, title: todo.title, mutateTodos}))}
                ></input>
                <p>{todo.completed}</p>
                <button className="text-red-500" onClick={() => deleteTodo({id:todo._id,mutateTodos})}>delete</button>
              </div>
            );
          })}
        </ul>
    </div>
  );
};
