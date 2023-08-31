import { h } from "preact";
import { useEffect } from "preact/hooks"
import { useStore } from "@nanostores/preact";
import { fetchActivities, allActivities } from "@stores/store";
import { Grid } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
import './activitiesDataStyles.css'

function ActivitiesData() {
  useEffect(() => {
    fetchActivities();
  }, []);

  const $allActivities = useStore(allActivities)

  return (
    <div>
      <Grid
        data={$allActivities}
        columns={[{id:'nameOfProject', name: 'Name'}, {id: 'male', name: 'Male'}, {id: 'female', name: 'Female'}, {id: 'total', name: 'Total'}, {id: 'typeOfBeneficiaries', name: 'Type'}, {id: 'district', name: 'District'}, {id: 'province', name: 'Province'}, {id: 'nameOfCamp', name: 'Camp'}, {id: 'month', name: 'Month'}, {id: 'year', name: 'Year'}]}
        search={true}
        sort={true}
        pagination={{
          limit: 20,
        }}
        width='100%'
        className={{
          td: 'activities-td',
          table: 'activities-table',
          container: 'activities-container'
        }}
      />
    </div>
  );
}

export default ActivitiesData