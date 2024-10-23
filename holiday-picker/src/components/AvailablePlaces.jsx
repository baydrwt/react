import Error from "./ErrorPage.jsx";
import Places from "./Places.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";
import { useFetch } from "../hooks/useFetch.js";

async function fetchSortedPlaces() {
  const places = await fetchAvailablePlaces();

  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude);
      resolve(sortedPlaces);
    });
  });
}

export default function AvailablePlaces({ onSelectPlace }) {
  const { isFetching, error, fetchedData: placesAvailable } = useFetch(fetchSortedPlaces, []);

  if (error) {
    return <Error title="Error an accoured" message={error.message} />;
  }

  return <Places title="Available Places" isLoading={isFetching} isLoadingText={"Fetching the data..."} places={placesAvailable} fallbackText="No places available." onSelectPlace={onSelectPlace} />;
}
