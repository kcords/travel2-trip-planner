import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import moment from 'moment';
import { TiDeleteOutline } from 'react-icons/ti';
import { FiSave } from 'react-icons/fi';

import Button from '../Button/Button';
import classes from './Form.module.css';

function Form(props) {
  const { selectedTrip, setSelectedTrip, setView, saveTrip } = props;

  const [ tripName, setTripName ] = useState(selectedTrip.tripName);
  const [ destination, setDestination ] = useState(selectedTrip.destinations[0].name);
  const [ startDate, setStartDate ] = useState(moment(selectedTrip.startDate).format('YYYY-MM-DD'));
  const [ endDate, setEndDate ] = useState(moment(selectedTrip.endDate).format('YYYY-MM-DD'));

  useEffect(() => {
    console.log(selectedTrip.destinations[0].name)//!REMOVE THIS!
    setTripName(selectedTrip.tripName);
    setDestination(selectedTrip.destinations.length ? selectedTrip.destinations[0].name : '');
    setStartDate(moment(selectedTrip.startDate).format('YYYY-MM-DD'));
    setEndDate(moment(selectedTrip.endDate).format('YYYY-MM-DD'));
  }, [selectedTrip])

  const updateSelectedTrip = () => {
    let current = Object(selectedTrip);
    current.tripName = tripName;
    current.destinations = [{name: destination}];
    current.startDate = startDate;
    current.endDate = endDate;
    // console.log(current)//!REMOVE THIS!
    setSelectedTrip(current);
    saveTrip(current._id);
  }

  return (
    <div className={classes.formContainer}>
      <h1 className={classes.tripHeader}>{selectedTrip.tripName ? tripName : 'New Trip'}</h1>
      <form className={classes.formContent}>
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
      </form>

      <div className={classes.btnContainer}>
        <Button
          name="saveTripBtn"
          clickHandler={e => {
            updateSelectedTrip();
            setView('trip-list');
            // console.log('saved!')
            saveTrip(selectedTrip._id);
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

    </div>
  );
}

export default Form;
