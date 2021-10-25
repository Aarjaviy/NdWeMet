import React, { useState } from 'react';
import { ImCross } from "react-icons/im";
import { BsSuitHeart } from "react-icons/bs";

const popup1 = ({ setshow }) => {

    const closePanel = () => {
        setshow(false)
    }

    return (
        <div>
            <div className="popup1-heading">
                <div className="popup1-icon"><ImCross onClick={closePanel}/></div>
                <div className="popup1-title">Results</div>
            </div>
            <div className="popup11">
                <div className="popup11-img"></div>
                <div className="popup11-body">
                    <div className="popup11-name">Female Nischal</div>
                    <div className="popup11-detail">25 | 6'8 | City</div>
                </div>
                <div className="popup11-icon"><BsSuitHeart size="30px"/></div>
                <div ><button className="popup11-chat">Chat</button></div>
            </div>
            <div className="popup11">
                <div className="popup11-img"></div>
                <div className="popup11-body">
                    <div className="popup11-name">Female Nischal</div>
                    <div className="popup11-detail">25 | 6'8 | City</div>
                </div>
                <div className="popup11-icon"><BsSuitHeart size="30px"/></div>
                <div ><button className="popup11-chat">Chat</button></div>
            </div>
            <div className="popup11">
                <div className="popup11-img"></div>
                <div className="popup11-body">
                    <div className="popup11-name">Female Nischal</div>
                    <div className="popup11-detail">25 | 6'8 | City</div>
                </div>
                <div className="popup11-icon"><BsSuitHeart size="30px"/></div>
                <div ><button className="popup11-chat">Chat</button></div>
            </div>
            <div className="popup11">
                <div className="popup11-img"></div>
                <div className="popup11-body">
                    <div className="popup11-name">Female Nischal</div>
                    <div className="popup11-detail">25 | 6'8 | City</div>
                </div>
                <div className="popup11-icon"><BsSuitHeart size="30px"/></div>
                <div ><button className="popup11-chat">Chat</button></div>
            </div>
            <div className="popup11">
                <div className="popup11-img"></div>
                <div className="popup11-body">
                    <div className="popup11-name">Female Nischal</div>
                    <div className="popup11-detail">25 | 6'8 | City</div>
                </div>
                <div className="popup11-icon"><BsSuitHeart size="30px"/></div>
                <div ><button className="popup11-chat">Chat</button></div>
            </div>
            <div className="popup11">
                <div className="popup11-img"></div>
                <div className="popup11-body">
                    <div className="popup11-name">Female Nischal</div>
                    <div className="popup11-detail">25 | 6'8 | City</div>
                </div>
                <div className="popup11-icon"><BsSuitHeart size="30px"/></div>
                <div ><button className="popup11-chat">Chat</button></div>
            </div>
            <div className="popup11">
                <div className="popup11-img"></div>
                <div className="popup11-body">
                    <div className="popup11-name">Female Nischal</div>
                    <div className="popup11-detail">25 | 6'8 | City</div>
                </div>
                <div className="popup11-icon"><BsSuitHeart size="30px"/></div>
                <div ><button className="popup11-chat">Chat</button></div>
            </div>
            <div className="popup11">
                <div className="popup11-img"></div>
                <div className="popup11-body">
                    <div className="popup11-name">Female Nischal</div>
                    <div className="popup11-detail">25 | 6'8 | City</div>
                </div>
                <div className="popup11-icon"><BsSuitHeart size="30px"/></div>
                <div ><button className="popup11-chat">Chat</button></div>
            </div>
            <div className="popup11">
                <div className="popup11-img"></div>
                <div className="popup11-body">
                    <div className="popup11-name">Female Nischal</div>
                    <div className="popup11-detail">25 | 6'8 | City</div>
                </div>
                <div className="popup11-icon"><BsSuitHeart size="30px"/></div>
                <div ><button className="popup11-chat">Chat</button></div>
            </div>
        </div>
    )
}

export default popup1
