import React, { useState, useEffect } from 'react';

import classes from './Button.module.css';

function Button(props) {
  const { children, clickHandler, name } = props;

  return (
    <div className={classes[name]}>
      <button type="button" className={classes.btn} onClick={clickHandler}>
        {children}
      </button>
    </div>
  );
}

export default Button;


