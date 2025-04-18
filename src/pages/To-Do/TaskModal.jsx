import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiPlantSeed } from "react-icons/gi";

const TaskModal = ({ isOpen, closeModal, onSubmit, initialData }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("To-Do");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
      setDescription(initialData.description || "");
      setCategory(initialData.category || "To-Do");
    } else {
      setTitle("");
      setDescription("");
      setCategory("To-Do");
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      title,
      description,
      category,
      ...(initialData && { _id: initialData._id }),
    });
    closeModal();
  };

  return (
    <div>
      <input
        type="checkbox"
        id="task-modal"
        className="modal-toggle"
        checked={isOpen}
        readOnly
      />
      <div className="modal bg-green-50 bg-opacity-30 backdrop-blur-md">
        <div className="modal-box relative rounded-xl border-2 border-green-200 shadow-xl bg-gradient-to-br from-green-100 to-white">
          <label
            htmlFor="task-modal"
            className="absolute right-4 top-4 cursor-pointer text-green-500 hover:text-red-500 transition-colors"
            onClick={closeModal}
          >
            <AiOutlineClose className="w-6 h-6" />
          </label>

          <div className="flex items-center gap-2 mb-2">
            <GiPlantSeed className="text-green-600 w-6 h-6" />
            <h3 className="text-xl font-semibold text-green-700">
              {initialData ? "Edit Agricultural Task" : "Add New Field Task"}
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-green-700">
                Title *
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                maxLength={50}
                required
                className="input w-full mt-1 bg-white border-2 border-green-200 focus:border-green-500 rounded-lg"
                placeholder="Ex: Water the crops"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-green-700">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                maxLength={200}
                rows={3}
                className="textarea w-full mt-1 bg-white border-2 border-green-200 focus:border-green-500 rounded-lg"
                placeholder="Details about the task (optional)"
              />
            </div>

            <div className="modal-action flex justify-end gap-2">
              <button
                type="submit"
                className="btn bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition-all shadow-md hover:shadow-lg"
              >
                🌿 {initialData ? "Save Changes" : "Add Task"}
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="btn border border-green-400 text-green-700 hover:bg-green-100 px-6 py-2 rounded-full"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
