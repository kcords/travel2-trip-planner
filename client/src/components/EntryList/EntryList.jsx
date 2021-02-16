import React, { useState, useEffect } from 'react';

import Card from '../Card/Card';
import EntryItem from '../EntryItem/EntryItem';
import PopupCard from '../PopupCard/PopupCard';

import classes from './EntryList.module.css';

function EntryList(props) {
  const { selectedTrip, setSelectedTrip } = props;
  const { entries } = selectedTrip;

  const [ open, setOpen ] = useState(false);
  const [ selectedItem, setSelectedItem ] = useState({});

  function openItem(index) {
    setOpen(true);
    setSelectedItem(entries[index]);
  }

  return (
    <div className={classes.list}>
      {entries
        ? entries.map((entry, i) => (
            <Card
              index={String(i)}
              key={`${i}${entry.name}`}
              clickHandler={openItem}
              passedValue={i}
            >
              <span className={classes.entryType}>{entry.type}</span>
              <h4>{entry.name}</h4>
            </Card>
          ))
        : null
      }
      <div
        className={`${classes.background} ${open ? classes.open : classes.closed}`}
        onClick={() => { setOpen(false) }}
        hidden={!open}
      />
      <PopupCard
        open={open}
        setOpen={setOpen}
      >
        <EntryItem
          open={open}
          setOpen={setOpen}
          selectedItem={selectedItem}
        />
      </PopupCard>
    </div>
  );
}

export default EntryList;
