import React, { useState } from 'react';
function TextForm(props) {
  const [text, setText] = useState("")
  const handleOnChange = (event) => {
    console.log("on Change");
    setText(event.target.value)
  }
  // convert to upper case
  const handleUPCLick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Coverted to Uppercase","success")
  }
  // convert to lowercase
  const handleLoCLick = () =>{
    let newText = text.toLocaleLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercse","success")
  }
  let preview={
    border: "2px dotted black",
    padding:"10px 20px",
    borderRadius:"5px"
  }
  // copy data
  const handleCopy = () => {
    var text = document.getElementById("myBox")
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text should be copied", "success")
  }
  // const [text, setText] = useState('');
  // handle extra spaces
  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extraspaces should be removed","success")
  }
  return (
    <>
      <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
        <h1>
          {props.heading}
        </h1>
        <div className='mb-3'>
          <textarea className='form-control' onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} value={text} id="myBox" rows="4"></textarea>
        </div>
        <button className='btn btn-outline-danger mx-3' onClick={handleUPCLick} style={{color:props.mode==='light'?'black':'white'}}> Convert to Uppercase</button>
        <button className='btn btn-outline-primary' onClick={handleLoCLick} style={{color:props.mode==='light'?'black':'white'}}> Convert to Lowercase</button>
        <button className='btn btn-outline-success mx-3' onClick={handleCopy} style={{color:props.mode==='light'?'black':'white'}}> Copy</button>
        <button className='btn btn-outline-danger mx-3' onClick={handleExtraSpaces} style={{color:props.mode==='light'?'black':'white'}}>Remove extraspaces</button>
        <div className='text-summary'>
          <h1>Your text summary</h1>
          <p>{text.split("").length} words and {text.length} chatracters</p>
          <p>{0.008 * text.split("").length} minutes reads</p>
          <h2>Text Preiew</h2>
          <div className='preview' style={preview }>
          <p>{text.length>0?text:"Enter Something to preview it here "}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default TextForm