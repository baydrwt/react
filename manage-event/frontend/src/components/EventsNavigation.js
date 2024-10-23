import { NavLink, useLoaderData, useRouteLoaderData } from "react-router-dom";
import classes from "./EventsNavigation.module.css";

function EventsNavigation() {
  const token = useRouteLoaderData("root");
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink className={({ isActive }) => (isActive ? classes.active : undefined)} to="" end>
              All Events
            </NavLink>
          </li>

          {token && (
            <li>
              <NavLink className={({ isActive }) => (isActive ? classes.active : undefined)} to="new">
                New Event
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
