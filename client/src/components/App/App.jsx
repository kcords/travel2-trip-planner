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
      destinations: [''],
      entries: [],
    }

function App() {
  const [ tripData, setTripData ] = useState([]);
  const [ view, setView ] = useState('trip-list');
  const [ selectedTrip, setSelectedTrip ] = useState(tripTemplate);

  useEffect(() => {
    //TODO CHANGE TO GET >> DONE (PENDING VERIFICATION)
    // console.log('DATA', dummyData)//!REMOVE THIS!
    // setTripData(dummyData);//!REMOVE THIS!
    console.log('selectedTrip'. selectedTrip)//!REMOVE THIS!
    getTrips();
  }, [])

  // useEffect(() => {
  //   //TODO CHANGE TO SAVETRIP (DID NOT WORK AS EXPECTED)
  //   console.log('Selected Trip Edited')//!REMOVE THIS!
  //   saveTrip()
  // }, [setSelectedTrip])

  function getTrips() {
    //TODO FINISH GET REQUEST
    axios.get('/api/trips')
      .then(results => {
        console.log('getTrips successful!', results.data)//!REMOVE THIS!
        setTripData(results.data)
      })
      .catch(err => {console.log(err)})//!REMOVE THIS!
  }

  function saveTrip(id) {
    console.log('save!', id)//!REMOVE THIS!
    //TODO FINISH PUT REQUEST
    if(id) {
      console.log('PUT!')//!REMOVE THIS!
      axios.put(`/api/trips/${id}`, selectedTrip)
        .then(() => {
          console.log('put success!')//!REMOVE THIS!
          getTrips()
        })
        .catch(err => {console.log(err)})//!REMOVE THIS!

    //TODO FINISH POST REQUEST - DONE!!
    } else {
      axios.post('/api/trips/', selectedTrip)
        .then(() => {
          console.log('post success!')//!REMOVE THIS!
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
          {view === 'trip-list'
            ? <><GrAddCircle className={classes.icon} /> Add a trip</>
            : null}
          {/* {view === 'individual-trip'//! Remove this section!
            ? <><GrAddCircle className={classes.icon} /> Add an event</>
            : null} */}
        </Button>
      </div>
    </div>
  );
}

export default App;
