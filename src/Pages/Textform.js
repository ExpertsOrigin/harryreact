import React, { useState } from 'react'


export default function Textform(props) {
    const [text,settext] = useState()

    const handleinput = (event)=>{
settext(event.target.value);
    }

    const handleclick = ()=>{
        let newtext = text.toUpperCase();
        settext(newtext);
        console.log("upper case was clicked")

    }
  return (
    <>
<div className="container my-3">
    <h1 className="heading">{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleinput}></textarea>
</div>
<button className="btn btn-primary" onClick={handleclick}>Convert to Upper Case</button>
</div>

<div className="container my-2">
    <h1>your text summary</h1>
    
</div>


{/* SHA256:gpoRTzojuKI+QOJLqYZRb+7RDmySuDbPFvLZ1EEJmcg */}
    </>
  )
}
