import React, { useState } from 'react'
import "../../Css/resumeForm.css"

export default function ResumeSections(props) {

  return (
    <div className="container d-flex justify-content-center">
      <div className="row d-flex justify-content-center">
      {
        Object.keys(props.resumeSection)?.map(item => {
          return (
            props.activeSection == item
              ?
              <div key={Math.random()} id='activeBar' onClick={() => { props.setactiveSection(item); }} className='col-md-3 toolbar' key={item}>{props.resumeSection[item]}</div>
              :
              <div key={Math.random()} onClick={() => { props.setactiveSection(item); }} className='col-md-3 toolbar' key={item}>{props.resumeSection[item]}</div>)
        })}
      </div>
    </div>
  )
}
