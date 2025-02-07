import { map, atom } from "nanostores";

export const months = atom([]);

export const dashboardData = map({})
export const currentProject = atom(null)
export const currentProjects = map({})
export const currentMonth = atom(null)
export const currentMonths = map([])
export const projectMonths = map([])
export const jobs = atom([]);
export const currentJobs = atom([]);
export const dataFilter = atom(null)

export function setCurrrentProject(project) {
  currentProject.set(project)
}

export function setCurrentMonth(month) {
  currentMonth.set(month)
}

export function setProjectMonths(payload) {
  projectMonths.set(payload)
}

export function setDataFilter(payload) {
  dataFilter.set(payload)
}

export async function fetchCurrentMonths(year) {
  const url = `https://ngo-data-api.vercel.app/v4/currentmonths/${year}`
  const response = await fetch(url)
  if (!response.ok) {
    console.log(response.status)
  } else {
    const data = await response.json()
    currentMonths.set(data)
  }
}

export async function fetchCurrentProjects(year) {
  const url = currentMonth.get() != null
    ? `https://ngo-data-api.vercel.app/v4/currentprojects/${year}/${currentMonth.get()}`
    : `https://ngo-data-api.vercel.app/v4/currentprojects/${year}`
  const response = await fetch(url)
  if (!response.ok) {
    console.log(response.status)
  } else {
    const data = await response.json()
    currentProjects.set(data)
  }
}

export async function fetchGeneralData(year) {
  const url = currentMonth.get() != null
    ? `https://ngo-data-api.vercel.app/v4/dashboard/${year}/${currentMonth.get()}`
    : `https://ngo-data-api.vercel.app/v4/dashboard/${year}`;
  const response = await fetch(url);
  if (!response.ok) {
    console.log(response.status);
  } else {
    const data = await response.json();
    dashboardData.set(data)
  }
}

export async function fetchProjectsData(year) {
  const url = currentMonth.get() != null
    ? `https://ngo-data-api.vercel.app/v4/projects-data/${year}/${currentMonth.get()}`
    : `https://ngo-data-api.vercel.app/v4/projects-data/${year}`;
  const response = await fetch(url);
  if (!response.ok) {
    console.log(response.status);
  } else {
    const data = await response.json();
    const projectData = data.filter((project) => project.nameOfProject === currentProject.get())[0]
    const { months } = projectData
    dashboardData.set(projectData)
    projectMonths.set(months)
  }
}
