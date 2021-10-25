import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

const navbar = () => {
    return (
        <div className="navbars fixed-top">
            <div className="navbar-flex">
                <div className="hicon"><GiHamburgerMenu size="25" /></div>
                <div className="navbar-name">Polls</div>
            </div>
            <div className="navbar2">
                <span>c</span>
                <span>0</span>
            </div>
        </div>
    )
}

export default navbar
