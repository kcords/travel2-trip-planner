import React, { useState, useEffect } from 'react';
import moment from 'moment';

import Card from '../Card/Card';
import classes from './Trips.module.css';

function Trips(props) {
  const { tripData, handleTripSelection } = props;

  return (
    <div className={classes.tripsSection}>
      <h1 className={classes.tripsHeader}>My Trips</h1>
      <div className={classes.tripsCardsContainer}>
        {tripData.length
          ? tripData.map((trip, i) => (
            <Card passedValue={String(i)} clickHandler={handleTripSelection} key={`${i}${trip.tripName}`} >
              <h3>{trip.tripName}</h3>
              <span>{moment(trip.startDate, 'YYYY-MM-DD').fromNow()}</span>
            </Card>
            ))
          : null
        }
      </div>
    </div>
  );
}

export default Trips;
