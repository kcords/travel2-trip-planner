import React, { useState, useEffect } from 'react';

import Card from '../Card/Card';
import EntryItem from '../EntryItem/EntryItem';
import classes from './EntryList.module.css';

function EntryList(props) {
  const { selectedTrip } = props;
  const { entries } = selectedTrip;

  return (
    <div className={classes.list}>
      {entries
        ? entries.map((entry, i) => (
            <Card index={String(i)} key={`${i}${entry.name}`} >
              <span className={classes.entryType}>{entry.type}</span>
              <h4>{entry.name}</h4>
            </Card>
          ))
        : null
      }
    </div>
  );
}

export default EntryList;
