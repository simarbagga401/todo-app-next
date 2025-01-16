import axios from "axios";

export const aiPrompt = async (prompt: string) => {
  const response = await axios.post("/api/prompt", {
    text: prompt,
  });
  console.log("response from aiPrompt",response);
  return response.data.result;
};
