import React from "react";
import "./Nav.css";

const Nav = props => (
    <nav className="navbar" id="fixed-top">
    	<div class="container">
      <a class="navbar-brand" href="/"><h3>Real CRM</h3></a>

      <div class="navbar-menu" id="navbarNavDropdown">
    	<ul class="navbar-nav-ml-auto">
		      <li class="nav-item active">
		        <a class="nav-link" href="/">Home <span class="sr-only"></span></a>
		      </li>
		      <li class="nav-item">
		        <a class="nav-link" href="/agents">Agents </a>
		      </li>
		      <li class="nav-item">
		        <a class="nav-link" href="#">Listing </a>
		      </li>
		      
    	</ul>
  	  </div>
  	  </div>
    </nav>
);

export default Nav;

