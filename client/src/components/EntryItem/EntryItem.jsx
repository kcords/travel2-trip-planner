import React, { useState, useEffect } from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import { FiSave } from 'react-icons/fi';

import Button from '../Button/Button';

import classes from './EntryItem.module.css';

function EntryItem(props) {
  const { open, setOpen, selectedItem } = props;
  const { name, type, url, notes } = selectedItem

  // const [ name, setName ] = useState('');
  // const [ type, setType ] = useState('');
  // const [ url, setUrl ] = useState('');
  // const [ notes, setNotes ] = useState('');



  return (
    <div className={`${classes.entryItem} ${open ? classes.open : classes.closed}`}>
      <label >
        Event Name
        <input
          type="text"
          className={classes.input}
          name="name"
          value={name}
        ></input>
      </label>
      <label >
        Activity Type
        <select className={`${classes.selectFix} ${classes.input}`} value={type} >
          <option value="Flight">Flight</option>
          <option value="Transportation">Transportation</option>
          <option value="Excursion">Excursion</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Accommodations">Accommodations</option>
          <option value="Dining">Dining</option>
        </select>
      </label>
      <label >
        URL
        <input
          type="url"
          className={classes.input}
          name="url"
          value={url}
        ></input>
      </label>
      <label >
        Notes
        <textarea
          type="textarea"
          className={`materialize-textarea ${classes.input}`}
          name="notes"
          value={notes}
        ></textarea>
      </label>
      <div className={classes.buttonRow}>
      <Button
        clickHandler={e => {
          setOpen(false)
        }}
        name="saveEventBtn"
      >
        <FiSave className={classes.icon} />
        Save event
      </Button>
      <Button
        clickHandler={e => {
          setOpen(false)
        }}
        name="discardEventBtn"
      >
        <TiDeleteOutline className={classes.icon} />
        Cancel
      </Button>
      </div>
    </div>
  );
}

export default EntryItem;
