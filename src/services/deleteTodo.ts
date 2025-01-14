import axios from "axios";

export const deleteTodo = async ({
  id,
  mutateTodos,
}: {
  id: string;
  mutateTodos: () => void;
}) => {
  const response = await axios.delete("http://localhost:8000/deleteTodo", {
    data: {
      id
    }
  });

  mutateTodos();
  return response.data;
};
