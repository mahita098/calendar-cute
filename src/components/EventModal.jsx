export default function EventModal({
  isEditing,
  eventToEdit,
  onClose,
  onUpdate,
  onAdd,
  onDelete,
  onFieldChange,
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">
          {isEditing ? "Edit Event" : "Add New Event"}
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md"
            value={eventToEdit.title}
            onChange={(e) => onFieldChange("title", e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            className="w-full px-3 py-2 border rounded-md"
            value={eventToEdit.description}
            onChange={(e) => onFieldChange("description", e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Priority
          </label>
          <select
            className="w-full px-3 py-2 border rounded-md"
            value={eventToEdit.priority}
            onChange={(e) => onFieldChange("priority", e.target.value)}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Color
          </label>
          <div className="flex gap-2">
            {[
              "bg-pink-200 border-pink-400 text-pink-800",
              "bg-purple-200 border-purple-400 text-purple-800",
              "bg-blue-200 border-blue-400 text-blue-800",
              "bg-green-200 border-green-400 text-green-800",
              "bg-yellow-200 border-yellow-400 text-yellow-800",
            ].map((colorClass) => (
              <div
                key={colorClass}
                className={`w-6 h-6 rounded-full border cursor-pointer ${
                  colorClass.split(" ")[0]
                } ${colorClass.split(" ")[1]}`}
                onClick={() => onFieldChange("colorClass", colorClass)}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-2">
          {isEditing && (
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              onClick={onDelete}
            >
              Delete
            </button>
          )}
          <button
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600"
            onClick={isEditing ? onUpdate : onAdd}
          >
            {isEditing ? "Update" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}
