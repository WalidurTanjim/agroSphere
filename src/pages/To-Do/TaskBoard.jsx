import { useState, useContext, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { Plus, Edit, Trash, Clock } from "lucide-react";
import Swal from "sweetalert2";
import { TaskContext } from "./TaskContext";
import TaskModal from "./TaskModal";
import farmingBg from "../../assets/images/44244.jpg";
import DashboardRoutes from "../../router/DashboardRoutes";


const categories = ["To-Do", "In Progress", "Done"];

const TaskBoard = () => {
  const { tasks, updateTask, addTask, deleteTask } = useContext(TaskContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const task = tasks.find((t) => t._id === result.draggableId);
    if (task.category !== categories[result.destination.droppableId]) {
      updateTask({
        id: task._id,
        updatedTask: {
          ...task,
          category: categories[result.destination.droppableId],
        },
      });
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId);
      Swal.fire("Success", "Task deleted successfully", "success");
    } catch (error) {
      console.error("Error deleting task:", error);
      Swal.fire("Error", "Failed to delete task", "error");
    }
  };

  return (
    <>
      <div
        className="relative bg-cover bg-center min-h-screen text-white font-inter"
        style={{ backgroundImage: `url(${farmingBg})` }}
      >
        <DashboardRoutes></DashboardRoutes>
        <div className="absolute  inset-0 bg-green-950/70 backdrop-blur-sm"></div>

        <div className="relative z-10 px-6 pt-8 pb-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-lime-200 drop-shadow-md">
            Cultivate Your Productivity 🌱
          </h1>
          <p className="mt-2 text-lg md:text-xl text-lime-100">
            Just like a farmer plans the seasons, plan your success day by day!
          </p>
          <div className="mt-4 text-sm text-lime-300 font-mono animate-pulse">
            {currentTime.toLocaleTimeString()} | {currentTime.toLocaleDateString()}
          </div>
        </div>

        <DragDropContext onDragEnd={onDragEnd}>
          <div className="relative z-10 p-4 max-w-7xl mx-auto pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <Droppable key={category} droppableId={`${index}`}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="bg-white/90 rounded-3xl shadow-2xl p-4 backdrop-blur-md border-2 border-lime-100"
                    >
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="font-bold text-xl text-green-800 tracking-wide">
                          {category}
                        </h2>
                        {category === "To-Do" && (
                          <button
                            onClick={() => setIsModalOpen(true)}
                            className="p-2 rounded-full bg-lime-100 hover:bg-lime-200 shadow"
                          >
                            <Plus className="h-5 w-5 text-green-800" />
                          </button>
                        )}

                        
                      </div>

                      <div className="space-y-3">
                        {tasks
                          .filter((task) => task.category === category)
                          .map((task, idx) => (
                            <Draggable
                              key={task._id}
                              draggableId={task._id}
                              index={idx}
                            >
                              {(provided) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className="bg-lime-50 p-4 rounded-xl shadow-md border border-lime-200 transition hover:shadow-lg group"
                                >
                                  <div className="space-y-2">
                                    <h3 className="font-semibold text-green-900 text-lg">
                                      {task.title}
                                    </h3>
                                    {task.description && (
                                      <p className="text-sm text-gray-600">
                                        {task.description}
                                      </p>
                                    )}
                                    <div className="text-xs text-gray-500 flex justify-between items-center">
                                      <div className="flex gap-2 items-center">
                                        <Clock className="w-4 h-4" />
                                        <span>
                                          {new Date(task?.createdAt).toLocaleDateString()}{" "}
                                          at {new Date(task?.createdAt).toLocaleTimeString()}
                                        </span>
                                      </div>
                                      <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button
                                          onClick={() => handleEditTask(task)}
                                          className="p-1 text-green-600 hover:bg-green-100 rounded-full"
                                        >
                                          <Edit className="w-4 h-4" />
                                        </button>
                                        <button
                                          onClick={() => handleDeleteTask(task._id)}
                                          className="p-1 text-red-600 hover:bg-red-100 rounded-full"
                                        >
                                          <Trash className="w-4 h-4" />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </Draggable>
                          ))}
                        {provided.placeholder}
                      </div>
                    </div>
                  )}
                </Droppable>
              ))}
            </div>
          </div>
        </DragDropContext>
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 bg-lime-600 hover:bg-lime-700 text-white p-4 rounded-full shadow-xl z-50 transition-all duration-300"
      >
        <Plus />
      </button>



      <TaskModal
        isOpen={isModalOpen}
        closeModal={() => {
          setIsModalOpen(false);
          setEditingTask(null);
        }}
        onSubmit={(taskData) => {
          if (editingTask) {
            updateTask({
              id: editingTask._id,
              updatedTask: taskData,
            });
          } else {
            addTask(taskData);
          }
          setIsModalOpen(false);
          setEditingTask(null);
        }}
        initialData={editingTask}
      />
    </>
  );
};

export default TaskBoard;
