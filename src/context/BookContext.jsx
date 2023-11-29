import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books] = useState([
    { title: "godan", id: 1 },
    { title: "gaban", id: 2 },
    { title: "karmveer", id: 3 },
    { title: "thele pe himalay", id: 4 },
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;

// Define prop types for ThemeContextProvider
BookContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Children should be a React node and is required
};
