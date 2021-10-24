import React, { useState } from 'react';
import polls from "./polls";
import { FaEllipsisH } from "react-icons/fa";
import Popup1 from "./popup1";
import {FiArrowRight} from "react-icons/fi";

function createEntry(polls) {
    return (
        <Entry
            id={polls.id}
            tag1={polls.tag1}
            tag2={polls.tag2}
            tag3={polls.tag3}
            question={polls.question}
            option1={polls.option1}
            option2={polls.option2}
            option3={polls.option3}
        />
    );
}

function Entry(props) {
    const [show, setshow] = useState(false)

    const togglePanel = () => {
        setshow(!show)
    }

    return (
        <div className="polls-men">
            <div className="polls-men-tag">
                <span className="polls-men-tag-heading">Tags:</span>
                <div className="polls-men-tag-content">{props.tag1}</div>
                <div className="polls-men-tag-content">{props.tag2}</div>
                <div className="polls-men-tag-content">{props.tag3}</div>
            </div>
            <div >
                <div className="polls-question polls-question-head">{props.question}</div>
                <div className="polls-question polls-question-option1">
                    <div >{props.option1}</div>
                    <button className="polls-button"><FaEllipsisH onClick={togglePanel} /></button>
                </div>
                {show ? (
                    <div className="result-popup">
                        <Popup1 setshow={setshow} />
                    </div>
                ) : null}
                <div className="polls-question polls-question-option2">
                    <div >{props.option2}</div>
                    <button className="polls-button"><FaEllipsisH /></button>
                </div>
                <div className="polls-question polls-question-option3">
                    <div>{props.option3}</div>
                    <button className="polls-button"><FaEllipsisH /></button>
                </div>
            </div>
            {props.id==6 ? <div className="hide-polls">
                <div className="hide-polls-div">
                    <div className="hide-polls-text">Answer 5 polls to unlock more</div>
                    <button className="hide-polls-btn">
                    <div>Answer Polls</div>
                    <div ><FiArrowRight/></div>
                    </button> 
                </div>
            </div> : null}
        </div>
    );
}

const otherpolls = () => {
    return (
        <div>
            <div>
                <div className="polls-men-heading">Polls raised by other men</div>
                <div>
                    <dl className="dictionary">{polls.map(createEntry)}</dl>
                </div>
            </div>
        </div>
    )
}

export default otherpolls
