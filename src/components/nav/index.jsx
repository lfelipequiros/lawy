import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/crear-documento">Create Doc</Link>
      </li>
    </ul>
  );
}