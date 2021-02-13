import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { CgLayoutGridSmall } from 'react-icons/cg';

import classes from './Form.module.css';

function Form() {
  const [ tripName, setTripName ] = useState('');
  const [ destination, setDestination ] = useState('');
  const [ startDate, setStartDate ] = useState(new Date());
  const [ endDate, setEndDate ] = useState(new Date());
  return (

  <div className="form">
    <label >
      Trip Name
      <input
        type="text"
        className={classes.input}
        name="tripName"
        value={tripName}
        onChange={e => { setTripName(e.target.value) }}
      ></input>
    </label>
    <label >
      Destination
      <input
        type="text"
        className={classes.input}
        name="tripDestination"
        value={destination}
        onChange={e => { setDestination(e.target.value) }}
      ></input>
    </label>
    <label >
      Start Date
      <input
        type="date"
        className={classes.input}
        name="startDate"
        value={startDate}
        onChange={e => { setStartDate(e.target.value) }}
      ></input>
    </label>
    <label >
      End Date
      <input
        type="date"
        className={classes.input}
        name="endDate"
        value={endDate}
        onChange={e => { setEndDate(e.target.value) }}
      ></input>
    </label>
    <button type="button">Save</button>
  </div>

  );
}

export default Form;
