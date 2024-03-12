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
  setProjectMonths,
  setDataFilter
} from "@stores/store";
import styles from "./styles.module.css"
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
    setDataFilter(null)
  }

  function handleGeneralClick() {
    setDataFilter("total")
    setProjectMonths([])
    setCurrrentProject(null);
    fetchGeneralData(year)
  }

  return (
    <div class={styles.projects}>
      <ul class={styles.list}>
        <div class={styles.icon} onClick={() => handleGeneralClick()}>
          <ClusterIcon width={24} height={24} fill="var(--on-primary-container)" />
          <span class={styles.tooltip}>Unselect project</span>
          <p>Projects</p>
        </div>
        {projects
          ? projects.map((project) => (
            <li
              class={
                styles.project + " " +
                (active === project ? styles.selected : "")
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
