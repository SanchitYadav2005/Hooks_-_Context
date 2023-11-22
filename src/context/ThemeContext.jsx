import { createContext, Component } from "react";
import PropTypes from "prop-types";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLight: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
  };

  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
export default ThemeContextProvider;

// Define prop types for ThemeContextProvider
ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Children should be a React node and is required
};

