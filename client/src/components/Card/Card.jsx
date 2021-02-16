import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { CgLayoutGridSmall } from 'react-icons/cg';

import classes from './Card.module.css';

function Card(props) {
  const { children, clickHandler, passedValue } = props;

  return (
    <button className={classes.card} onClick={e => { clickHandler(passedValue) }}>
      {children}
    </button>
  );
}

export default Card;
