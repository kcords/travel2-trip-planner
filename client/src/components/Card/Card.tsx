import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { CgLayoutGridSmall } from 'react-icons/cg';

import classes from './Card.module.css';

interface CardProps{
  children: React.ReactNode,
  clickHandler: any,
  passedValue: any
}

function Card(props: CardProps) {
  const { children, clickHandler, passedValue } = props;

  return (
    <button className={classes.card} onClick={e => { clickHandler(passedValue) }}>
      {children}
    </button>
  );
}

export default Card;
