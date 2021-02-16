import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GrAddCircle } from 'react-icons/gr';

import Trips from '../Trips/Trips';
import Button from '../Button/Button';
import Form from '../Form/Form';
import EntryList from '../EntryList/EntryList';

const { dummyData } = require('./dummyData.js');
import classes from './App.module.css';

const tripTemplate = {
      tripName: '',
      startDate: '',
      endDate: '',
      destinations: [{name: ''}],
      entries: [],
    }

function App() {
  const [ tripData, setTripData ] = useState([]);
  const [ view, setView ] = useState('trip-list');
  const [ selectedTrip, setSelectedTrip ] = useState(tripTemplate);

  useEffect(() => {
    getTrips();
  }, [])

  // useEffect(() => {
  //   //TODO CHANGE TO SAVETRIP (DID NOT WORK AS EXPECTED)
  //   console.log('Selected Trip Edited')//!REMOVE THIS!
  //   saveTrip()
  // }, [setSelectedTrip])

  function getTrips() {
    axios.get('/api/trips')
      .then(results => {
        setTripData(results.data)
      })
      .catch(err => {console.log(err)})//!REMOVE THIS!
  }

  function saveTrip(id) {
    if(id) {
      axios.put(`/api/trips/${id}`, selectedTrip)
        .then(() => {
          getTrips()
        })
        .catch(err => {console.log(err)})//!REMOVE THIS!
    } else {
      axios.post('/api/trips/', selectedTrip)
        .then(() => {
          getTrips()
        })
        .catch(err => {console.log(err)})//!REMOVE THIS!
    }
  }

  function handleTripSelection(index) {
    console.log(tripData[index])
    setSelectedTrip(tripData[index]);
    setView('individual-trip')
  }

  return (
    <div className={classes.main}>
      <header className={classes.header}>Trip Planner</header>
      <div className={classes.section}>

        <Trips tripData={tripData} handleTripSelection={handleTripSelection} className={`${view === 'trip-list' ? classes.visible : classes.hidden}`} />

        <div className={`${classes.tripContent} ${view === 'individual-trip' ? classes.visible : classes.hidden}`}>
          <Form selectedTrip={selectedTrip} setSelectedTrip={setSelectedTrip} setView={setView} saveTrip={saveTrip} />
          <EntryList selectedTrip={selectedTrip} setSelectedTrip={setSelectedTrip} saveTrip={saveTrip} />
        </div>

        <Button
          clickHandler={e => {
            setSelectedTrip(tripTemplate);
            setView('individual-trip');
          }}
          name="addBtn"
          hidden={view !== 'trip-list'}
        >
          <GrAddCircle className={classes.icon} />
          Add a trip
        </Button>
      </div>
    </div>
  );
}

export default App;
