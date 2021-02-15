import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GrAddCircle } from 'react-icons/gr';

import Trips from '../Trips/Trips';
import AddButton from '../AddButton/AddButton';
import Form from '../Form/Form';
import EntryList from '../EntryList/EntryList';

const { dummyData } = require('./dummyData.js');
import classes from './App.module.css';

function App() {
  const [ tripData, setTripData ] = useState([]);
  const [ view, setView ] = useState('trip-list');
  const [ selectedTrip, setSelectedTrip ] = useState({});

  useEffect(() => {
    console.log('DATA', dummyData)
    setTripData(dummyData);
  }, [])

  function handleTripSelection(index) {
    console.log(tripData[index])
    setSelectedTrip(tripData[index]);
    setView('individual-trip')
  }

  function getTrips() {
    //TODO FINISH GET REQUEST
    axios.get('/api/trips')
  }

  function saveTrip(id) {
    //TODO FINISH PUT REQUEST
    axios.put(`/${id}`)
  }

  return (
    <div className={classes.main}>
      <header className={classes.header}>Trip Planner</header>
      <div className={classes.section}>
        <Trips tripData={tripData} handleTripSelection={handleTripSelection} />
        <AddButton>
          <GrAddCircle className={classes.icon} />
          Add a trip
        </AddButton>
        <div className={classes.content}>
          <Form selectedTrip={selectedTrip} />
          <EntryList selectedTrip={selectedTrip} />
        </div>
      </div>
    </div>
  );
}

export default App;
