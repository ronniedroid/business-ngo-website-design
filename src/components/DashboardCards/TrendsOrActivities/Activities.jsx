import { h } from "preact";
import { useStore } from "@nanostores/preact";
import { dashboardData } from "@stores/store";
import styles from "./styles.module.css"

function Activities() {
  const { activities } = useStore(dashboardData);

  return (
    <table>
      <thead>
        <tr>
          {activities ? <th scope="col">Project</th> : ""}
          <th scope="col">Activity</th>
          <th scope="col">Male</th>
          <th scope="col">Female</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        {activities
          ? activities.map((item) => (
            <tr>
              <td data-label="Project" scope="row">
                {item.nameOfProject}
              </td>
              <td data-label="Activity" scope="row">
                {item?.name}
              </td>
              <td data-label="Male" scope="row">
                {item?.male}
              </td>
              <td data-label="Female" scope="row">
                {item?.female}
              </td>
              <td data-label="Total" scope="row">
                {item?.total}
              </td>
            </tr>
          ))
          : ""}
      </tbody>
    </table>
  );
}

export default Activities;
