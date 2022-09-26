import React from 'react'
import InputBox from '../Form/inputBox';
import SectionHeading from './SectionHeading/SectionHeading'
import '../../Css/resumesections.css'

export default function BasicInfo(props) {


  return (
    <span>
    
      <br />
      <div className="row justify-content-center">
      <SectionHeading editable={false}  sectionname={"basicInfo"} setheadings={props.setheadings} headings={props.headings}  title={props.headings["basicInfo"]}/>
          </div>
      <br />
      
      <div className="container " id='formContainer'>
        <div className="row justify-content-center">
          <div className="col-md-5 col-sm-12">
            <InputBox maxLength="60" onChange={(event) => props.UpdateObjectValue("basicInfo", "Pname", 1, event.target.value)} value={props.getObjectValue("basicInfo", "Pname", 1)} label="Name" placeholder="Enter your full name e.g Mary Elizabeth" />
          </div>
          <div className="col-md-1 col-sm-12"></div>
          <div className="col-md-5 col-sm-12">
            <InputBox maxLength="37" onChange={(event) => props.UpdateObjectValue("basicInfo", "email", 1, event.target.value)} value={props.getObjectValue("basicInfo", "email", 1)} label="Email" placeholder="Enter your email" />
          </div>
          <div className="col-md-1"></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-5">
            <InputBox maxLength="50" onChange={(event) => props.UpdateObjectValue("basicInfo", "linkedinlink", 1, event.target.value)} value={props.getObjectValue("basicInfo", "linkedinlink", 1)} label="Linkedin Link" placeholder="Enter your linkedin profile link" />
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <InputBox maxLength="50" onChange={(event) => props.UpdateObjectValue("basicInfo", "githublink", 1, event.target.value)} value={props.getObjectValue("basicInfo", "githublink", 1)} label="Github Link" placeholder="Enter your github profile link" />
          </div>
          <div className="col-md-1"></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-5">
          <InputBox maxLength="15" onChange={(event) => props.UpdateObjectValue("basicInfo", "phone", 1, event.target.value)} value={props.getObjectValue("basicInfo", "phone", 1)} label="Phone" placeholder="Enter your phone number" />
          <InputBox maxLength="70" onChange={(event) => props.UpdateObjectValue("basicInfo", "title", 1, event.target.value)} value={props.getObjectValue("basicInfo", "title", 1)} label="Title" placeholder="Enter your  title e.g Software Engineer etc." />
          <label>Upload Image</label>
          <input type="file" onChange={props.UploadImage} accept="image/jpeg, image/png, image/jpg"/>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <div className="row" >
              <label>Summary</label>
              <br />
              <textarea maxLength = "450" onChange={(event) => props.UpdateObjectValue("basicInfo", "summary", 1, event.target.value)} value={props.getObjectValue("basicInfo", "summary", 1)} className='form-control'  cols="40" rows="10"></textarea>
            </div>
            <br />
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </span>
  )
}
