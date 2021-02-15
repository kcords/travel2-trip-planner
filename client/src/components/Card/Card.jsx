import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { CgLayoutGridSmall } from 'react-icons/cg';

import classes from './Card.module.css';

function Card(props) {
  const { children, handleTripSelection, index } = props;

  return (
    <button className={classes.card} onClick={e => { handleTripSelection(index) }}>
      {children}
    </button>
  );
}

export default Card;
