import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TiDeleteOutline } from 'react-icons/ti';
import { FiSave } from 'react-icons/fi';

import Button from '../Button/Button';
import classes from './Form.module.css';

function Form(props) {
  const { selectedTrip, setSelectedTrip, setView, saveTrip } = props;

  const [ tripName, setTripName ] = useState(selectedTrip.tripName);
  const [ destination, setDestination ] = useState(selectedTrip.destinations[0].name);
  const [ startDate, setStartDate ] = useState(selectedTrip.startDate);
  const [ endDate, setEndDate ] = useState(selectedTrip.endDate);

  useEffect(() => {
    setTripName(selectedTrip.tripName);
    // setDestination(selectedTrip.destinations.length ? selectedTrip.destinations[0].name : '');
    setStartDate(selectedTrip.startDate);
    setEndDate(selectedTrip.endDate);
  }, [selectedTrip])

  const updateSelectedTrip = () => {
    let current = Object(selectedTrip);
    current.tripName = tripName;
    current.destinations = [{name: destination}];
    current.startDate = startDate;
    current.endDate = endDate;
    // console.log(current)//!REMOVE THIS!
    setSelectedTrip(current);
    saveTrip();
  }

  return (
    <div className={classes.formContainer}>
      <h1 className={classes.tripHeader}>{selectedTrip.tripName ? tripName : 'New Trip'}</h1>
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
      <Button
        name="saveTripBtn"
        clickHandler={e => {
          updateSelectedTrip();
          setView('trip-list');
        }}
      >
        <FiSave className={classes.icon} />
        Save and exit
      </Button>
      <Button
        name="discardChangesBtn"
        clickHandler={e => {
          setView('trip-list')
        }}
      >
        <TiDeleteOutline className={classes.icon} />
        Discard changes
      </Button>
    </div>
  );
}

export default Form;
