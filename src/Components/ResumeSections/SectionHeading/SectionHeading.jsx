import React from 'react'
import { useState } from 'react'
import '../../../Css/SectionHeading.css'
import Inputbox from '../../Form/inputBox'

export default function SectionHeading(props) {

  const [prevousValue, setprevousValue] = useState("");


  const [editableMode, seteditableMode] = useState(false);

  const switchMode = () => {
    setprevousValue(props.headings[props.sectionname]);
    editableMode === true ? seteditableMode(false) : seteditableMode(true);
  }

  const UpdateObjectValue = (value) => {
    let temporaryarray = {basicInfo: props.headings["basicInfo"],education: props.headings["education"],workExp: props.headings["workExp"],project: props.headings["project"],skill: props.headings["skill"],acheivements: props.headings["acheivements"],certificate: props.headings["certificate"],intrest: props.headings["intrest"]};
    temporaryarray[props.sectionname] = value;
    props.setheadings(temporaryarray);
  }


  return (
<div className="row">
<div id="headingBox" className="container d-flex flex-row">
      <div className="p-2">
        <h4>{props.title}</h4>
      </div>
      {props.editable!=false?
      <>
      {
        editableMode == true
          ?
          (
            <div className="p-2">
              &nbsp;
              <input type="text" value={props.headings[props.sectionname]} onChange={(event)=>{UpdateObjectValue(event.target.value)}}/>
              &nbsp;
              <button  onClick={switchMode} className='choiceButton'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-check" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
              </svg>
              </button>
              &nbsp;
              <button className='choiceButton' onClick={()=>{UpdateObjectValue(prevousValue);switchMode()}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg></button>          </div>)
          :
          <div className="p-2">
            <button onClick={switchMode} id='headingButton'>{/*Remove Button*/}
              Change Heading &nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-pen" viewBox="0 0 16 16">
                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
              </svg>
            </button>
          </div>
      }
      </>
      :
      null
    }
    </div>
</div>
  )
}
