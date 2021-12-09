import React from "react";
import classes from './App.module.css';
import logo from "./logo.png";

const Topbar =()=>{
  return(
    <div>
     <nav className={classes.topbar}>
       <img src={logo} alt="logo"/>
     </nav>
    </div>
  )
}
export default Topbar