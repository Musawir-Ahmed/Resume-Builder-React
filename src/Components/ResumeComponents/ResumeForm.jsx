import React, { useState } from 'react'
import "../../Css/resumeForm.css"
import BasicInfoSection from '../ResumeSections/BasicInfo'
import WorkExpSection from '../ResumeSections/WorkExp'
import EducationSection from '../ResumeSections/Education'
import ProjectSection from '../ResumeSections/Project'
import SkillSection from '../ResumeSections/Skill'
import CertificateSection from '../ResumeSections/Certificates'
import IntrestSection from '../ResumeSections/Intrest'

export default function ResumeForm(props) {


  const stateVariables=
  {   
    basicInfo: props.basicInfo,
    education: props.educationBody,
    workExpBody: props.workExpBody,
    project: props.projectBody,
    skill: props.skillBody,
    certificate: props.certificateBody,
    intrest: props.intrestBody,
    };

    const setStateVariables=
    {   
      basicInfo: props.setbasicInfo,
      education: props.seteducationBody,
      workExpBody: props.setworkExpBody,
      project: props.setprojectBody,
      skill: props.setskillBody,
      certificate: props.setcertificateBody,
      intrest: props.setintrestBody,
      };




  const getObjectValue = (stateTosearch, Attribute, Id) => {
    let obj=stateVariables[stateTosearch].find(obj => obj.id===Id );
    return obj[Attribute];
  }

  const UpdateObjectValue = (stateTosearch, Attribute, Id, value) => {

    let index = stateVariables[stateTosearch].findIndex(x => x.id === Id);
    let temporaryarray = stateVariables[stateTosearch].slice();
    temporaryarray[index][Attribute] = value;
    setStateVariables[stateTosearch](temporaryarray);
  }

  if (props.resumeSection[props.activeSection] === props.resumeSection.workExp) {
    return (
      <WorkExpSection setheadings={props.setheadings} headings={props.headings} setworkExpBody={props.setworkExpBody} workExpBody={props.workExpBody} UpdateObjectValue={UpdateObjectValue}  getObjectValue={getObjectValue}  />
      )
  }
  else if (props.resumeSection[props.activeSection] === props.resumeSection.basicInfo) {
    return (
      <BasicInfoSection UploadImage={props.UploadImage} setheadings={props.setheadings} headings={props.headings}  UpdateObjectValue={UpdateObjectValue}  getObjectValue={getObjectValue} />
    )
  }
  else if (props.resumeSection[props.activeSection] === props.resumeSection.education) {
    return (
      <EducationSection setheadings={props.setheadings} headings={props.headings}  educationBody={props.educationBody} seteducationBody={props.seteducationBody} UpdateObjectValue={UpdateObjectValue}  getObjectValue={getObjectValue}/>
    )
  }
  else if (props.resumeSection[props.activeSection] === props.resumeSection.project) {
    return (
      <ProjectSection  setheadings={props.setheadings} headings={props.headings} projectBody={props.projectBody} setprojectBody={props.setprojectBody} UpdateObjectValue={UpdateObjectValue}  getObjectValue={getObjectValue}/>
    )
  }
  else if (props.resumeSection[props.activeSection] === props.resumeSection.skill) {
    return (
      <SkillSection  setheadings={props.setheadings} headings={props.headings}  skillBody={props.skillBody} setskillBody={props.setskillBody} UpdateObjectValue={UpdateObjectValue}  getObjectValue={getObjectValue}/>
    )
  }
  else if (props.resumeSection[props.activeSection] === props.resumeSection.certificate) {
    return (
      <CertificateSection  setheadings={props.setheadings} headings={props.headings}  certificateBody={props.certificateBody} setcertificateBody={props.setcertificateBody} UpdateObjectValue={UpdateObjectValue}  getObjectValue={getObjectValue}/>
    )
  }
  else if (props.resumeSection[props.activeSection] === props.resumeSection.intrest) {
    return (
      <IntrestSection  setheadings={props.setheadings} headings={props.headings}  intrestBody={props.intrestBody} setintrestBody={props.setintrestBody} UpdateObjectValue={UpdateObjectValue}  getObjectValue={getObjectValue}/>
    )
  }
}
