import { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <h1>Hook App</h1>
        <ul>
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>About</li>
          </a>
          <a href="#">
            <li>Contact</li>
          </a>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
