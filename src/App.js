// import logo from './logo.svg';
import { useState } from 'react';
// import { Switch, Route } from "react-router-dom";
import './App.css';
import Alert from './Components/Alert';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';


function App() {

  const [mode , setMode]  = useState('light');
  const [alert , setAlert] = useState(null);

  const showAlert = (message,type) => {
      setAlert(
        {
          msg: message,
          type : type
        }
      )
      setTimeout(()=> {
        setAlert(null);
       } , 3000
      )
  }

  const toggleMode = () => {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#220d5a';
      showAlert("Dark Mode is enabled" , "success");
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is enabled" , "success")
  }
    
  }

  return (
    <>
        {/*<Router>*/}
                <Navbar title = "TEXTUTELS" aboutus = "About TextUtels" mode={mode} toggleMode = {toggleMode}/>
                <Alert alert = {alert}/>
                <div className='container my-3'>
          
                {/*<Routes>
  <Route exact path="/about" element={<About />}/>
                  
                
                  <Route exact path="/" element={}/>
                    
                </Routes>*/}
          
                <TextForm showAlert = {showAlert} heading = 'Enter the statement' mode={mode} />
          </div>
          {/*</Router>*/}
          
    </>
  );
}

export default App;
