import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convert to upperCase", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convert to LowerCase", "success");

  };
  const handleClearClick = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("Text Has been Cleared", "success");

  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  //text = "new text"; // wrong way to change the state here
  //setText("new text"); // Correct way to change the state here
  return (

    <>
      <div className="container" style={ {
        color: props.mode === 'dark' ? 'white' : 'black'
      } } >
        <h1 >{ props.heading }</h1>
        <div className="mb-3">
          <textarea className="form-control" value={ text } onChange={ handleOnChange } id="mybox" rows="10" placeholder=" Enter Text Here" style={ {
            backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
            color: props.mode === 'dark' ? 'white' : 'black'
          } } ></textarea>
        </div>
        <button className="btn btn-secondary mx-1 my-1" onClick={ handleUpClick } onChange={ handleOnChange }>Convert to Uppercase </button>
        <button className="btn btn-secondary mx-1 my-1" onClick={ handleLowClick } onChange={ handleOnChange } >Convert to Lowercase </button>
        <button className="btn btn-secondary mx-1 my-1" onClick={ handleClearClick } onChange={ handleOnChange }> Clear Text </button>

      </div>

      <h1 style={ {
        color: props.mode === 'dark' ? 'white' : 'black'
      } }>This is my text</h1>
      <p style={ {
        color: props.mode === 'dark' ? 'white' : 'black'
      } }> Words =  { text.split(/\s+/).filter((element)=>{return element.length!==0}).length } letters = { text.length }</p>
      <p style={ {
        color: props.mode === 'dark' ? 'white' : 'black'
      } }>{ 0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length } Minutes read </p>

      <h2 style={ {
        color: props.mode === 'dark' ? 'white' : 'black'
      } }>Preview</h2>
      <p style={ {
        color: props.mode === 'dark' ? 'white' : 'black'
      } }>{ text }</p>
    </>

  );
}
