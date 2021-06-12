import React, { useState, useEffect } from 'react';
import { GrAddCircle } from 'react-icons/gr';

import Card from '../Card/Card';
import Button from '../Button/Button';
import EntryItem from '../EntryItem/EntryItem';
import PopupCard from '../PopupCard/PopupCard';

import classes from './EntryList.module.css';

function EntryList(props) {
  const { selectedTrip, setSelectedTrip, saveTrip } = props;
  const { entries } = selectedTrip;

  const [ open, setOpen ] = useState(false);
  const [ selectedItem, setSelectedItem ] = useState({});
  const [ updateIndex, setUpdateIndex ] = useState(0);

  function openItem(index) {
    setSelectedItem(entries[index]);
    setUpdateIndex(index);
    setOpen(true);
    console.log(selectedItem, updateIndex)//!REMOVE THIS!
  }

  function updateSelected(update) {
    let current = Object(selectedTrip);
    current.entries[updateIndex] = update;
    console.log(current)//!REMOVE THIS!
    setSelectedTrip(current);
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
      {/* // * Event editor popup */}
      <>
        <div
          className={`${classes.background} ${open ? classes.open : classes.closed}`}
          onMouseDown={e => e.stopPropagation()}
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
            updateSelected={updateSelected}
          />
        </PopupCard>

      </>
      {/* // * Floating Event Button */}
      <Button
        clickHandler={e => {
          setSelectedItem({
            name: "",
            type: "",
            url: "",
            notes: "",
          })
          setOpen(true);
          setUpdateIndex(selectedTrip.entries.length);
        }}
        name="addBtn"
      >
        <GrAddCircle className={classes.icon} />
        Add an event
      </Button>
    </div>
  );
}

export default EntryList;
