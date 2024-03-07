import { h } from "preact";
import { useEffect } from "preact/hooks";
import {
  fetchProjectsData,
  fetchCurrentProjects,
  setCurrrentProject,
  currentProject,
  currentProjects,
  currentMonth,
  fetchGeneralData,
  setProjectMonths
} from "@stores/store";
import "./Projects.css";
import ClusterIcon from "@components/Icons/ClusterIcon";
import { useStore } from "@nanostores/preact";


function Projects({ year }) {

  const $currentMonth = useStore(currentMonth)
  const $currentProject = useStore(currentProject);
  const { projects } = useStore(currentProjects)
  const active = $currentProject;


  useEffect(() => {
    fetchCurrentProjects(year);
    if ($currentProject != null) {
      fetchProjectsData(year)
    } else {
      fetchGeneralData(year)
    }
  }, [$currentMonth, $currentProject]);

  function handleClick(project) {
    setCurrrentProject(project);
    fetchProjectsData(year)
  }

  function handleGeneralClick() {
    setProjectMonths([])
    setCurrrentProject(null);
    fetchGeneralData(year)
  }

  return (
    <div class="projects">
      <ul class="projects__list">
        <div class="projects__icon" onClick={() => handleGeneralClick()}>
          <ClusterIcon width={24} height={24} fill="var(--on-primary-container)" />
          <span class="tooltip">Unselect project</span>
        </div>
        <div class="project__title">
          <p>list of Projects</p>
        </div>
        {projects
          ? projects.map((project) => (
            <li
              class={
                "project " +
                (active === project ? `project--selected` : "")
              }>
              <button
                onClick={() => handleClick(project)}
              >
                {project}
              </button>
            </li>
          ))
          : ""}
      </ul>
    </div>
  );
}

export default Projects;
