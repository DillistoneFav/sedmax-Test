import React from 'react';
import { Link } from "react-router-dom";
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={classes.navbar}>
          <div className={classes.navbarItems}>
            <Link to="/first-page" className={classes.RouterLinks} >1ST PAGE</Link>
            <Link to="/second-page" className={classes.RouterLinks} >2ND PAGE</Link>
          </div>
      </div>
    );
};

export default Navbar;