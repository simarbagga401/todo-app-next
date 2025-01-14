import axios from "axios";
import { Todo } from "@/types/Todo";

export const createTodo = async (todo:Todo) => {
    console.log(todo)
    const response = await axios.post("http://localhost:8000/createTodo", todo);
    return response.data;
}