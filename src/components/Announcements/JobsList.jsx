import { h } from "preact";
import { useEffect } from "preact/hooks";
import { useStore } from "@nanostores/preact";
import { fetchCurrentJobs, currentJobs } from "@stores/store";
import JobsCard from "./JobsCard";
import "./announcements-styles.css";

function JobsList() {
  useEffect(() => {
    fetchCurrentJobs();
  }, []);

  const $currentJobs = useStore(currentJobs);

  return (
    <div class="content-wrap">
      {$currentJobs.length > 0 ? (
        $currentJobs.map((job) => (
          <JobsCard
            title={job.jobTitle}
            project={job.projectName}
            vacancies={job.numberOfVacancies}
            projectArea={job.dutyStation}
            residence={job.applicantsResidence}
            gender={job.preferableGender}
            duration={job.duartionofAppointment}
            typeOfContract={job.typeofContract}
            starting={job.expectedStartingDate}
            deadline={job.deadline}
          />
        ))
      ) : (
        <div class="emptyList">No Jobs are Available</div>
      )}
    </div>
  );
}

export default JobsList;
