import React, { useState, useEffect } from 'react';

import Button from '../Button/Button';
// import EntryItem from '../EntryItem/EntryItem';

import classes from './PopupCard.module.css';

function PopupCard(props) {
  const { children, open, setOpen } = props;

  return (
    <div
      className={`${classes.popupCard} ${open ? classes.open : classes.closed}`}
      onMouseDown={e => e.stopPropagation()}
      onClick={() => {setOpen(false)}}
    >
      {children}
    </div>
  );
}

export default PopupCard;
