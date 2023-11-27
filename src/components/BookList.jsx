import {useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function BookList() {

    const {isLightTheme, light, dark} = useContext(ThemeContext)
  // this is deciding the theme if the isLightTheme is true then the theme will be light and all the properties that light state have theme will have all those properties otherwise it will have dark theme and have all the properties that the dark state have.
  const theme = isLightTheme ? dark: light;
    return (
      
      <div className="book-list" style={{background: theme.bg, color: theme.syntax}}>
        <ul>
          <li style={{background: theme.ui}}>Godan</li>
          <li style={{background: theme.ui}}>gaban</li>
          <li style={{background: theme.ui}}>thele pe himalay</li>
        </ul>
      </div>
    );
  }


export default BookList;
