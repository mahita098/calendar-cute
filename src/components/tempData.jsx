export const loadTempEvents = async () => {
  try {
    // fetch the JSON file
    const response = await fetch("/data/dataEvents.json");
    const data = await response.json();

    return data.map((event) => ({
      ...event,
      date: new Date(event.dateStr),
    }));
  } catch (error) {
    console.error("Error loading events:", error);
  }
};
