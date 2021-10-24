import React,{useState} from 'react';
import {ImCross} from "react-icons/im";
import {BsSuitHeart} from "react-icons/bs";

const popup1=({setshow})=>{

    const closePanel=()=>{
        setshow(false)
    }

    return (
        <div>
            <div>
                <ImCross onClick={closePanel}/>
                Result
            </div>
        </div>
    )
}

export default popup1
