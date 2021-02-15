import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TiDeleteOutline } from 'react-icons/ti';
import { FiSave } from 'react-icons/fi';

import Button from '../Button/Button';
import classes from './Form.module.css';

function Form(props) {
  const { selectedTrip, setSelectedTrip, setView } = props;

  const [ tripName, setTripName ] = useState(selectedTrip.tripName);
  const [ destination, setDestination ] = useState('');
  const [ startDate, setStartDate ] = useState(selectedTrip.startDate);
  const [ endDate, setEndDate ] = useState(selectedTrip.endDate);

  useEffect(() => {
    setTripName(selectedTrip.tripName);
    // setDestination(selectedTrip.destinations.length ? selectedTrip.destinations[0].name : '');
    setStartDate(selectedTrip.startDate);
    setEndDate(selectedTrip.endDate);
  }, [selectedTrip])

  return (
    <div className={classes.formContainer}>
      <h1 className={classes.tripHeader}>{tripName}</h1>
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
      {/* <button type="button">Save</button> */}
      <Button
        clickHandler={e => {
          setView('trip-list')
        }}
        name="saveTripBtn"
      >
        <FiSave className={classes.icon} />
        Save and exit
      </Button>
      <Button
        clickHandler={e => {
          setView('trip-list')
        }}
        name="discardChangesBtn"
      >
        <TiDeleteOutline className={classes.icon} />
        Discard changes
      </Button>
    </div>
  );
}

export default Form;
