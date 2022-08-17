import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleSpeakClick = () => {
    console.log("Lowercase was clicked");
    let message = new SpeechSynthesisUtterance();
    message.text = text;
    window.speechSynthesis.speak(message);
  };
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleSpeakClick}>
          Speak Text
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} word(s) and {text.length} characters
        </p>
        <p>{0.08 * text.split(" ").length} Minute Read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the box above to preview it here"}
        </p>
      </div>
    </>
  );
}
