import React, { useState } from 'react';

function Header({isDarkMode, onToggleDarkMode}) {
  

  const handleClick = (event) => {
    // setIsDarkMode(!isDarkMode)
    // setIsDarkMode(isDarkMode => !isDarkMode)
    onToggleDarkMode()
  }

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleClick}>{isDarkMode ? 'Dark' : 'Light'} Mode</button>
    </header>
  );
}

export default Header;

/* 
function useState(initialValue) {
  let stateVariable = initialValue;
  function updateState(newValue) {
    stateVariable = newValue;
    reRender();
  }
  return [stateVariable, updateState]
}
*/