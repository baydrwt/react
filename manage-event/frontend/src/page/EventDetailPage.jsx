import { Suspense } from "react";
import { Link, json, useRouteLoaderData, redirect, defer, Await } from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { getAuthToken } from "../util/Auth";

export async function loader({ request, params }) {
  const id = params.id;
  return defer({
    event: await loadEvent(id),
    events: loadEvents(),
  });
}

export async function action({ params, request }) {
  const eventId = params.id;
  const token = getAuthToken();
  const response = await fetch("http://localhost:8080/events/" + eventId, { 
    method: request.method, 
    headers: { 
      "Authorization": "Bearer " + token 
    } 
  });

  if (!response.ok) {
    throw json({ message: "Could not delete the event" }, { status: 500 });
  }

  return redirect("/events");
}

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: "could not fetched the data" }), { status: 500 });
    throw json({ message: "could not fetched the data" }, { status: 500 });
  }

  const resData = await response.json();

  return resData.events;
}

async function loadEvent(id) {
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json({ message: "Could not fetch the data for this event detail" }, { status: 500 });
  }
  const resData = await response.json();

  return resData.event;
}

export default function EventDetailPage() {
  const { event, events } = useRouteLoaderData("event-detail");

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={event}>{(loadedEvent) => <EventItem event={loadedEvent} />}</Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={events}>{(loadedEvents) => <EventsList events={loadedEvents} />}</Await>
      </Suspense>

      <Link to=".." relative="path">
        <button>Back </button>
      </Link>
    </>
  );
}
