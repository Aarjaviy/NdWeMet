import React,{useState} from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { FaTimes } from "react-icons/fa";

function Collapsible(props){
    const [open, setOpen] = useState(false)

    const togglePanel=(e)=> {
        setOpen(!open)
    }

        return (
            <div className="raise-open">
                <div className="raise">
                    <div onClick={(e) => togglePanel(e)} >
                        <div className="raise-title">
                            <div>{props.title}</div>
                            <div className="drop-icon">{open ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}</div>
                        </div>
                        <div className="raise-content">{props.content}</div>
                    </div>
                </div>
                {open ? (
                    <div className='content'>
                        {props.children}
                    </div>
                ) : null}
            </div>
        );
    }

class collapse extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (<div>
            <Collapsible title="Raise a poll anonymously" content="It can be anything ranging from seemingly uncomfortable questions, to even just topics to understand the personality and values better of the other person.">
                <div>
                    <textarea className="raise-textarea" placeholder="Type your question here"></textarea>
                    <div className="Options">
                            <div className="options option-1">
                                <b>Option 1</b>
                                <div className="cross"><FaTimes /></div>
                            </div>
                            <div className="options option-2">
                                <b>Option 2</b>
                                <div className="cross"><FaTimes /></div>
                            </div>
                            <div className="options option-text">
                                Add Option
                            </div>
                    </div>
                    <div className="select-tag">
                        <h3><b>Select Upto 3 tags</b></h3>
                        <div className="select-tags">
                            <div className="select-tag-content">Apperance</div>
                            <div className="select-tag-content">Family</div>
                            <div className="select-tag-content">Friends</div>
                            <div className="select-tag-content">Finance</div>
                            <div className="select-tag-content">Welfare</div>
                            <div className="select-tag-content">Wellness</div>
                            <div className="select-tag-content">Others</div>
                        </div>
                        <button className="select-tag-button" type="submit" value="submit">Submit</button>
                    </div>
                </div>
            </Collapsible>
        </div>
        )
    }
}

export default collapse