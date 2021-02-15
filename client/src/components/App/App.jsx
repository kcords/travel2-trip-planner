import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { CgLayoutGridSmall } from 'react-icons/cg';
import Trips from '../Trips/Trips'
import Form from '../Form/Form'

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

  return (
    <div className={classes.main}>
      <header className={classes.header}>Trip Planner</header>
      <div className={classes.section}>
        <Trips tripData={tripData} handleTripSelection={handleTripSelection} />
        <div className={classes.content}>
          <Form selectedTrip={selectedTrip} />
        </div>
      </div>
    </div>
  );
}

export default App;
