import { map, atom } from "nanostores";

export const months = atom([]);

export const dashboardData = map({})
export const currentProject = atom(null)
export const currentProjects = map({})
export const currentMonth = atom(null)
export const currentMonths = map([])
export const jobs = atom([]);
export const currentJobs = atom([]);

export function setCurrrentProject(project) {
  currentProject.set(project)
  console.log("curennttttProject", currentProject.get())
}

export function setCurrentMonth(month) {
  currentMonth.set(month)
}

export async function fetchCurrentProjects(year) {
  const url = currentMonth.get() != null
    ? `http://localhost:8000/v4/currentprojects/${year}/${currentMonth.get()}`
    : `http://localhost:8000/v4/currentprojects/${year}`
  const response = await fetch(url);
  if (!response.ok) {
    console.log(response.statues);
  } else {
    const data = await response.json();
    currentProjects.set(data)
  }
}

export async function fetchCurrentMonths(year) {
  const url = `http://localhost:8000/v4/currentmonths/${year}`
  const response = await fetch(url);
  if (!response.ok) {
    console.log(response.statues);
  } else {
    const data = await response.json();
    currentMonths.set(data)
  }
}

export async function fetchGeneralData(year) {
  const url = currentMonth.get() != null
    ? `http://localhost:8000/v4/dashboard/${year}/${currentMonth.get()}`
    : `http://localhost:8000/v4/dashboard/${year}`;
  const response = await fetch(url);
  if (!response.ok) {
    console.log(response.statues);
  } else {
    const data = await response.json();
    dashboardData.set(data)
  }
}

export async function fetchProjectsData(year) {
  const url = currentMonth.get() != null
    ? `http://localhost:8000/v4/projects-data/${year}/${currentMonth.get()}`
    : `http://localhost:8000/v4/projects-data/${year}`;
  const response = await fetch(url);
  if (!response.ok) {
    console.log(response.statues);
  } else {
    const data = await response.json();
    const projectData = data.filter((project) => project.nameOfProject === currentProject.get())[0]
    dashboardData.set(projectData)
  }
}

export async function fetchCurrentJobs() {
  const url = "https://homes.harikar.org/jobs_api.php";
  const response = await fetch(url);
  if (!response.ok) {
    console.log(response.status);
  } else {
    const data = await response.json();
    jobs.set(data);
    currentJobs.set(data.filter((item) => item.isActive === "active"));
  }
}
