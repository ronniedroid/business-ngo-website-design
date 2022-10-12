import {useState} from 'preact/hooks'
import { update } from "../stores/store"

const UpdateSeries = () => {
    return (
      <button onClick={() => update()}>UpdateSeries</button>
    );
  };
  
  export default UpdateSeries;