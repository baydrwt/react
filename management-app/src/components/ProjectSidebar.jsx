import { list } from "postcss";
import Button from "./Button";

export default function ProjectSidebar({ onStartAddProject, projects, onSelectProject, selectedProjectId }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 uppercase font-bold md:text-xl  text-stone-200">Your Project</h2>
      <div className="">
        <Button onClick={onStartAddProject}>+ | Add New Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClases = "w-full text-left px-2 py-1 rounded-sm my-1  hover:text-stone-200 hover:bg-stone-800";

          if (project.id === selectedProjectId) {
            cssClases += " bg-stone-800 text-stone-200";
          } else {
            cssClases += " text-stone-400";
          }
          return (
            <button key={project.id} onClick={() => onSelectProject(project.id)} className={cssClases}>
              {project.title}
            </button>
          );
        })}
      </ul>
    </aside>
  );
}
