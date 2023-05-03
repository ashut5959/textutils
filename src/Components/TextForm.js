import  React, {useState} from 'react'



export default function TextForm(props) {

    const [text , setText] = useState('');
    const [val = {} , setVal] = useState('');
    const Upper = () => {
               
                let newText = text.toUpperCase();
                setText(newText);
                props.showAlert("Converted to Upper Case" , "success")
    } 
    const Lower = () => {
               
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case" , "success")
} 
    const Clear = () => {
                
        let newText = '';
        setText(newText);
        props.showAlert("cleared" , "success")
    } 

    const email = () => {
                
        let newText = text.split(' ');
     
        newText.forEach((e) => {
            if(e.includes('@gmail.com') | e.includes('@GMAIL.COM'))
            setVal(e);
            props.showAlert("Email extracted" , "success")
        })
        
       
    } 
    const CopyT = () => {
      navigator.clipboard.writeText(text);
      props.showAlert("Text copied" , "success")
    }

    const replaceString=()=>{
        let repval=prompt("Enter the word to be replaced:")
        let tobereplaced= new RegExp(repval,'g');
  
        let toreplace=prompt("Enter the text that you want to replace with:");
        
        let newText= text.replace(tobereplaced,toreplace);
        setText(newText);
      }

    const extraSpace = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra space removed" , "success")
    }

    const handleOnChange = (event) => {
       
        setText(event.target.value);
}
        

        
  return (
    <>
                <div className="container my-3"  style={{color: props.mode === 'dark' ? 'white' : 'black'}} >
                        <h1>{props.heading}</h1>
                        <div className="mb-3">
                        <textarea className="form-control" id="myBox" style={{backgroundColor: props.mode === 'dark' ? '#2a5174' : 'white'}} value = {text} onChange = {handleOnChange} rows="8"></textarea>
                        </div>
                        
                        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={Upper}>Convert to UpperCase</button>
                        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={Lower}>Convert to LowerCase</button>
                        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={Clear}>Clear</button>
                        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={email}>Email Extrat</button>
                        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={replaceString}>ReplaceString</button>
                        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={CopyT}>Copy Text</button>
                        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={extraSpace}>Remove Extra Space</button>
            </div>
            <hr />
            <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}} >

                <h1>Your Text Summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words {text.length} characters</p>
                <p>{.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes to read</p>
                <h2>PREVIEW</h2>
                <p>{text.length > 0 ? text : 'Enter something in the text box to preview here'}</p>
                <h1>Emails</h1>
                <p>{val}</p>
                </div>

    </>
  )
}


