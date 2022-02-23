import React from "react";

function Headercustom() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand">Name list</span>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Name list
          </a>
        </li>
        <li className="nav-item">
          <a class="nav-link" href="#">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Headercustom;
