import useHttp from "../hooks/useHttp";
import MealItem from "./MealItem";
import Error from "./Error.jsx";

const requestConfig = {};

export default function Meals() {
  const { data: meals, isLoading, error } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  return (
    <ol id="meals">
      {meals.map((meal) => (
        <MealItem meal={meal} key={meal.id} />
      ))}
    </ol>
  );
}
