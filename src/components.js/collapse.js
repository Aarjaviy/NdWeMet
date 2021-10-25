import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { FaTimes } from "react-icons/fa";

function Collapsible(props) {
    const [open, setOpen] = useState(false)

    const togglePanel = (e) => {
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

function Collapse(props) {

    const [options, setoptions] = useState(['Option1', 'Option2']);
    const [optionContent, setOptionContent] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);

    var tags = ['Appearance', 'Family', 'Friends', 'Finance', 'Welfare', 'Wellness', 'Others'];

    const addOption = () => {
        var arr = [...options, optionContent];
        if (optionContent != '') {
            setoptions(arr);
            setOptionContent('')
        }
    }

    const closeOption = (e, option) => {
        var newoptions = options.filter((name) => { return name != option })
        setoptions(newoptions)
    }

    const toggleTag = (e, option) => {

        if (selectedTags.indexOf(option) != -1) {
            var newoptions = selectedTags.filter((name) => { return name != option })
            setSelectedTags(newoptions);
        } else {
            var arr = [...selectedTags, option];
            if (selectedTags.length < 3) {
                setSelectedTags(arr);
            }
        }
    }

    return (
        <div>
            <Collapsible title="Raise a poll anonymously" content="It can be anything ranging from seemingly uncomfortable questions, to even just topics to understand the personality and values better of the other person.">
                <div>
                    <textarea className="raise-textarea" placeholder="Type your question here"></textarea>
                    <div className="Options">
                        {options.map((option) => {
                            return (
                                <div className="options">
                                    <b>{option}</b>
                                    <div className="cross"><FaTimes onClick={(e) => closeOption(e, option)} /></div>
                                </div>
                            )
                        })}
                        <div>
                            <input type="textarea" name="option_content" placeholder="Option" value={optionContent} onChange={(e) => setOptionContent(e.target.value)} />
                            <div className="options option-text" onClick={addOption}>Add</div>
                        </div>
                    </div>
                    <div className="select-tag">
                        <h3><b>Select Upto 3 tags</b></h3>
                        <div className="select-tags">
                            {tags.map((tag) => {
                                return (
                                    selectedTags.indexOf(tag) != -1 ? (
                                        <div className="select-tag-content selectedTag-content" onClick={(e) => toggleTag(e, tag)}>{tag}</div>
                                    ) : (
                                        <div className="select-tag-content" onClick={(e) => toggleTag(e, tag)}>{tag}</div>
                                    )
                                )
                            })}
                        </div>
                    </div>
                    <div>
                    Selected Tags:
                        <div className="selected-tags-show">
                            {selectedTags.map((tags) => {
                                return (
                                    <div>{tags}</div>
                                )
                            })}
                        </div>
                    </div>
                    <button className="select-tag-button" type="submit" value="submit">Submit</button>
                </div>
            </Collapsible>
        </div>
    )
}

export default Collapse