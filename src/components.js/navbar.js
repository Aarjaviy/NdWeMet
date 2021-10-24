import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

const navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar hicon"><GiHamburgerMenu size="25"/></div>
            <div className="navbar navbar-name">Polls</div>
            <div className="navbar">
                <span>c</span>
                <span>0</span>
            </div>
        </div>
    )
}

export default navbar