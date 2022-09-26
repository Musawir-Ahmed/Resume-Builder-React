import React from 'react'
import "../../Css/inputbox.css"

export default function inputBox({ label, ...props }) {
    return (
        <>
            <div className="row" >
            <label  >{label}</label>
            <br/>
            <input  className="form-control"  {...props}></input>
            </div>
            <br/>
        </>
    )
}
