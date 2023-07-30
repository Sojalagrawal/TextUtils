import React,{useState} from 'react'



export default function TextFrorm(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase(text);
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");
    }
    const handleonChange=(event)=>{
        setText(event.target.value);
    }
    const handleLoClick=()=>{
      let newText=text.toLowerCase(text);
      setText(newText);
      props.showAlert("Converted to Lowercase!","success");

    }
    const handle=()=>{
      setText("");
      props.showAlert("Cleared","success");

    }
    const handle1=()=>{
      let text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied!","success");


    }
    const remove=()=>{
      let text1=text.split(/[ ]+/);
      setText(text1.join(" "));
      props.showAlert("Extra spaces removed!","success");

    }
    
  
    // const[a,seta]=useState(props.mode);
    // style={{backgroundcolour: {a}==='dark'? 'Grey': 'white', color:{a}=== 'dark'?'white': 'black'}}
    // const [bcolor,stbcolor]=useState("");
    const [text,setText] = useState("");
  return (
    <>
    <div className='container'>   
        <h1>{props.heading}</h1>       
        <div className="mb-3">
          <textarea className="form-control" id="myBox" style={props.obj} value={text}  onChange={handleonChange} 
            rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-success mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
        <button className='btn btn-secondary mx-1' onClick={handle}>Clear Text</button>
        <button className='btn btn-danger mx-1' onClick={handle1}>Copy Text</button>
        <button className='btn btn-primary mx-1 my-2' onClick={remove}>Remove extra spaces</button>




    </div>
    <div className='container'>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Empty"}</p>
    </div>
    </>
  )
}

//7099
