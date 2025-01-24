import React from "react";

function Header({onDarkModeClick, isDarkMode}) {
    
  return(
    <header className={"Header " + (isDarkMode ? "dark" : "light")}>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
            {isDarkMode ? "dark" : "light"} Mode
        </button>
    </header>
  );
}

export default Header;

//<header>
//<h2>Shopster</h2>
//<button onClick={onDarkModeClick}>
  //{isDarkMode ? "Dark" : "Light"} Mode
//</button>
//</header>