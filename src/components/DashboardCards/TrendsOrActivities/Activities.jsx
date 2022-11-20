import { h } from "preact";
import { useStore } from "@nanostores/preact";
import { currentCluster } from "@stores/store";
import "./TrendsOrActivities.css";

function Activities({ month }) {
  const $currentCluster = useStore(currentCluster);
  const activities = month === "year" ? [] : $currentCluster?.activities;

  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Activity</th>
          <th scope="col">Cluster</th>
          <th scope="col">Male</th>
          <th scope="col">Female</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        {activities
          ? activities.map((item) => (
              <tr>
                <td data-label="Policy" scope="row">
                  {item?.name}
                </td>
                <td data-label="Version" scope="row">
                  {item?.cluster}
                </td>
                <td data-label="Date" scope="row">
                  {item?.male}
                </td>
                <td data-label="Date" scope="row">
                  {item?.female}
                </td>
                <td data-label="Date" scope="row">
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
