import React, { useState, useEffect } from 'react';

import classes from './Button.module.css';

interface BtnProps{
  children?: JSX.Element | string | [JSX.Element, string],
  clickHandler: any,
  name?: string,
  hidden?: boolean
}

function Button(
  { children, clickHandler, name, hidden }: BtnProps
  ) {

  return (
    <div className={classes[name]} hidden={hidden} >
      <button
        type="button"
        className={classes.btn}
        onClick={clickHandler}>
        {children}
      </button>
    </div>
  );
}

export default Button;


