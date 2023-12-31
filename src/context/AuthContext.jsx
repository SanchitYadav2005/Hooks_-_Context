import { Component, createContext } from "react";
import PropTypes from "prop-types";


export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = {  
        isAuthenticated: false,
    } 

    toggleAuth = () => {
        this.setState({isAuthenticated: !this.state.isAuthenticated})
    }
    render() { 
        return (
            <AuthContext.Provider value={{...this.state, toggleAuth: this.toggleAuth}}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}
 
export default AuthContextProvider;
// Define prop types for ThemeContextProvider
AuthContextProvider.propTypes = {
    children: PropTypes.node.isRequired, // Children should be a React node and is required
  };
