"use client"
import useSWR from "swr";
import { fetchedTodo } from "@/types/Todo";
import fetcher from "@/services/fetcher";

export const useTodos = () => {

  const { data: todos , mutate: mutateTodos, isLoading } = useSWR<fetchedTodo[]>("http://localhost:8000/getTodos",fetcher);

  return {
    todos,
    mutateTodos,
    isLoading
  }

}