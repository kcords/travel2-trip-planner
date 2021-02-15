import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GrAddCircle } from 'react-icons/gr';

import Trips from '../Trips/Trips';
import Button from '../Button/Button';
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

  function getTrips() {
    //TODO FINISH GET REQUEST
    axios.get('/api/trips')
  }

  function saveTrip(id) {
    //TODO FINISH PUT REQUEST
    if(id) {
      axios.put(`/api/trips/${id}`)

    } else {
      axios.post('/api/trips/')

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
          <Form selectedTrip={selectedTrip} setSelectedTrip={setSelectedTrip} setView={setView} />
          <EntryList selectedTrip={selectedTrip} />
        </div>

        <Button
          clickHandler={e => {
            setView('individual-trip')
          }}
          name="addBtn"
        >
          {view === 'trip-list'
            ? <><GrAddCircle className={classes.icon} /> Add a trip</>
            : null}
          {view === 'individual-trip'
            ? <><GrAddCircle className={classes.icon} /> Add an event</>
            : null}
        </Button>
      </div>
    </div>
  );
}

export default App;
