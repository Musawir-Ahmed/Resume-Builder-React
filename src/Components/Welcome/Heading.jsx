import React from 'react'
import "../../Css/resume.css"

export default function Heading(props) {
  return (
    <div id='heading'>
    Create a <span className='highlight'>Professional</span> <span id='highlightWhite' >resume</span>
    <div>that stand's out</div>
    <div>For <span className='highlight'> Free</span></div>
    <div id='tagline'>
        Create a professional CV in minutes
    </div>
    <br></br>
    <div id='buttonpanel'>
        <button onClick={props.nextContinue} id='button' className='btn '>
            <b>
                Continue <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
            </b>
        </button>
    </div>
</div>
  )
}
