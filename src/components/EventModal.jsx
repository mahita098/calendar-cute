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
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.1)] backdrop-blur flex items-center justify-center z-50 px-10 md:px-0">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-black">
          {isEditing ? "Edit Event" : "Add New Event"}
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md border-gray-300 text-gray-600"
            value={eventToEdit.title}
            onChange={(e) => onFieldChange("title", e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            className="w-full px-3 py-2 border rounded-md border-gray-300 text-gray-600"
            value={eventToEdit.description}
            onChange={(e) => onFieldChange("description", e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Priority
          </label>

          {/* <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-600"
            value={eventToEdit.priority}
            onChange={(e) => onFieldChange("priority", e.target.value)}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select> */}

          <div className="flex gap-2">
            {["High", "Medium", "Low"].map((level) => {
              const colorMap = {
                High: "border-red-500 text-red-600",
                Medium: "border-yellow-500 text-yellow-600",
                Low: "border-green-500 text-green-600",
              };

              const isSelected = eventToEdit.priority === level;
              return (
                <button
                  key={level}
                  type="button"
                  className={`px-4 py-2 rounded-md border ${
                    isSelected
                      ? colorMap[level]
                      : "border-gray-300 text-gray-600"
                  }`}
                  onClick={() => onFieldChange("priority", level)}
                >
                  {level}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Color
          </label>
          <div className="flex gap-2">
            {[
              "bg-pink-200 text-pink-800",
              "bg-purple-200 text-purple-800",
              "bg-blue-200 text-blue-800",
              "bg-green-200 text-green-800",
              "bg-yellow-200 text-yellow-800",
            ].map((colorClass) => {
              const bg = colorClass.split(" ")[0];
              const isSelected = eventToEdit.colorClass === colorClass;

              // Map background to darker border
              const borderMap = {
                "bg-pink-200": "border-pink-600",
                "bg-purple-200": "border-purple-600",
                "bg-blue-200": "border-blue-600",
                "bg-green-200": "border-green-600",
                "bg-yellow-200": "border-yellow-600",
              };

              return (
                <div
                  key={colorClass}
                  className={`w-6 h-6 rounded-full cursor-pointer ${bg} ${
                    isSelected ? `border-2 ${borderMap[bg]}` : "border-0"
                  }`}
                  onClick={() => onFieldChange("colorClass", colorClass)}
                />
              );
            })}
          </div>
        </div>

        <div className="flex justify-end gap-2">
          {isEditing && (
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 cursor-pointer"
              onClick={onDelete}
            >
              Delete
            </button>
          )}
          <button
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 cursor-pointer"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 cursor-pointer"
            onClick={isEditing ? onUpdate : onAdd}
          >
            {isEditing ? "Update" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}
