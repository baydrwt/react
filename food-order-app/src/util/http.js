export async function fetchMeals() {
  const response = await fetch("http://localhost:3000/meals");

  if (!response.ok) {
    throw new Error("Fetch Meals failed..");
  }

  const resData = await response.json();

  return resData;
}
