import React, { useState, useEffect } from 'react';

import classes from './AddButton.module.css';

function AddButton(props) {
  const { children } = props;

  return (
    <div className={classes.container}>
      <button className={classes.btn}>
        {children}
      </button>
    </div>
  );
}

export default AddButton;


