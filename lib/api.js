export const fetchSections = async () => {
  const res = await fetch(
    "https://concertsapi.onlybees.in/api/sections/availability"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch sections");
  }

  return res.json();
};