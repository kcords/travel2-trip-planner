import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { CgLayoutGridSmall } from 'react-icons/cg';

import Card from '../Card/Card';
import classes from './Trips.module.css';

function Trips(props) {
  const { tripData, handleTripSelection } = props;

  return (
    <div className={classes.tripsSection}>
      <h1 className={classes.tripsHeader}>My Trips</h1>
      <div className={classes.tripsCardsContainer}>
        {tripData.map((trip, i) => (
          <Card index={String(i)} handleTripSelection={handleTripSelection} key={`${i}${trip.tripName}`} >
            <h3>{trip.tripName}</h3>
            <span>{`${new Date(Date.parse(trip.startDate)).toLocaleDateString("en-US")} - ${trip.endDate}`}</span>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Trips;
