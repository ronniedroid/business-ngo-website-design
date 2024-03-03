import { h } from "preact";
import { useEffect } from "preact/hooks";
import { fetchProjectsData, setCurrrentProject, fetchCurrentProjects, dashboardData, currentProject, currentProjects, currentMonth, fetchGeneralData } from "../../stores/store";
import "./Projects.css";
import ClusterIcon from "@components/Icons/ClusterIcon";
import CPIcon from "@components/Icons/CPIcon";
import GBVIcon from "@components/Icons/GBVIcon";
import GeneralIcon from "@components/Icons/GeneralIcon";
import LivelihoodIcon from "@components/Icons/LivelihoodIcon";
import ProtectionIcon from "@components/Icons/ProtectionIcon";
import WASHIcon from "@components/Icons/WASHIcon";
import { useStore } from "@nanostores/preact";
import HealthIcon from "@components/Icons/HealthIcon";
import { P } from "dist/_astro/hooks.module.GqpkA5BH";


function Projects({ year }) {


  const $currentMonth = useStore(currentMonth)
  const $currentProject = useStore(currentProject);

  useEffect(() => {
    fetchCurrentProjects(year);
    $currentProject === null
      ? fetchGeneralData(year)
      : fetchProjectsData(year)
  }, [$currentMonth, $currentProject]);

  const { projects } = useStore(currentProjects)
  const active = $currentProject;

  function handleClick(project) {
    setCurrrentProject(project);
    fetchProjectsData(year)
  }

  function handleGeneralClick() {
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
