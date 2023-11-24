import { createContext, Component } from "react";
import PropTypes from "prop-types";


//this is the context that we create. & we use this to conusme the data that the provider is providing in the respected file.
export const ThemeContext = createContext();
//& this is the context provider.
class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
  };
toggleTheme = () => {
  this.setState({isLightTheme: !this.state.isLightTheme})
}
  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
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

