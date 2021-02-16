import React, { useState, useEffect } from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import { FiSave } from 'react-icons/fi';

import Button from '../Button/Button';

import classes from './EntryItem.module.css';

function EntryItem(props) {
  const { open, setOpen, selectedItem, updateSelected } = props;
  // const { name, type, url, notes } = selectedItem

  const [ name, setName ] = useState('');
  const [ type, setType ] = useState('');
  const [ url, setUrl ] = useState('');
  const [ notes, setNotes ] = useState('');

  useEffect(() => {
    console.log('EntryItem', selectedItem)
    setName(selectedItem.name);
    setType(selectedItem.type);
    setUrl(selectedItem.url);
    setNotes(selectedItem.notes);
  }, [selectedItem])

  return (
    <div className={`${classes.entryItem} ${open ? classes.open : classes.closed}`}>
      <label >
        Event Name
        <input
          type="text"
          className={classes.input}
          name="name"
          value={name}
          onChange={e => { setName(e.target.value) }}
        ></input>
      </label>
      <label >
        Activity Type
        <select
          className={`${classes.selectFix} ${classes.input}`}
          value={type}
          onChange={e => { setType(e.target.value) }}
        >
          <option value=""></option>
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
          onChange={e => { setUrl(e.target.value) }}
        ></input>
      </label>
      <label >
        Notes
        <textarea
          type="textarea"
          className={`materialize-textarea ${classes.input}`}
          name="notes"
          value={notes}
          onChange={e => { setNotes(e.target.value) }}
        ></textarea>
      </label>
      <div className={classes.buttonRow}>
      <Button
        clickHandler={e => {
          updateSelected({ name, type, url, notes });
          setOpen(false);
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
