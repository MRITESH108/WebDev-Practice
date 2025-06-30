import React, { useState } from "react"

export default function ChangeCase(props) {
    const handleUpClick = () => {
        // console.log("uppercase was clicked : " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        // console.log("lowercase was clicked : " + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearText = () => {
        // console.log("lowercase was clicked : " + text);
        let newText = '';
        setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log("Onchange");
        setText(event.target.value);
    }

    const [text, setText] = useState("")
    // setText("new text");
    return (
        <>
            <div className="container ">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearText} >Clear Text</button>
            </div>
            <div className="container my-2">
                <h2>Your text Summery</h2>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{0.008*text.split(" ").length} minutes to read.</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
