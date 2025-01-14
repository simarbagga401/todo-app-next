import axios from "axios";

export const updateTodo = async ({
  id,
  completed,
  title,
  mutateTodos,
}: {
  id: string;
  completed: boolean;
  title: string;
  mutateTodos: () => void;
}) => {
  const response = await axios.put("http://localhost:8000/updateTodo", {
    id,
    completed,
    title,
  });

  mutateTodos();
  return response.data;
};
