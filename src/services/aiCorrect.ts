import axios from "axios";

export const aiCorrect = async ({
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
  const aiCorrectedTitle = await axios.post("/api/grammar", {
    text: title,
  });

  const response = await axios.put("http://localhost:8000/updateTodo", {
    id,
    completed,
    title: aiCorrectedTitle.data.result,
  });

  mutateTodos();
  return response.data;
};
