import { createContext, useContext } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";



export const TaskContext = createContext();


export const TaskProvider = ({ children }) => {
  const { user } = useAuth()
  const queryClient = useQueryClient();
  const axiosPublic = useAxiosPublic()

  // fetching tasks
  const { data: tasks = [], isLoading } = useQuery({
    queryKey: ["tasks", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/records/${user?.email}`);
      return res.data;
    },
    enabled: !!user,
  });

  const { mutateAsync: addTask } = useMutation({
    mutationFn: async (newTask) => {
      const res = await axiosPublic.post("/records", {
        ...newTask,
        email: user?.email,
      });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["records", user?.email]);
    },
  });

  

// updating task
  const { mutate: updateTask } = useMutation({
    mutationFn: async ({ id, updatedTask }) => {
      const res = await axiosPublic.patch(`/tasks/${id}`, updatedTask);
      return res.data;
    },
    onMutate: async ({ id, updatedTask }) => {
      await queryClient.cancelQueries(["tasks", user?.email]);

      const previousTasks = queryClient.getQueryData(["tasks", user?.email]);

      queryClient.setQueryData(["tasks", user?.email], (old = []) =>
        old?.map((task) =>
          task._id === id ? { ...task, ...updatedTask } : task
        )
      );

      return { previousTasks };
    },
    onError: (err, variables, context) => {
      console.error("Mutation Error:", err.response ? err.response.data : err.message);
      queryClient.setQueryData(["tasks", user?.email], context.previousTasks);
    },
    onSettled: () => {
      console.log("Invalidating tasks...");
      queryClient.invalidateQueries(["tasks", user?.email]);
    },
  });



  // Delete task
  const { mutateAsync: deleteTask } = useMutation({
    mutationFn: async (id) => {
      await axiosPublic.delete(`/records/${id}`);
      return id;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks", user?.email]);
    },
  });

  return (
    <TaskContext.Provider
      value={{
        tasks,
        updateTask,
        isLoading,
        deleteTask,
        addTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
