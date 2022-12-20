import { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import About from './components/About';
import Alert from './components/Alert';
import { BrowserRouter, Routes , Route} from 'react-router-dom';

function App() {
  const[mode,setMode] = useState('light'); 
  const[alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

  const toggleMode = ()=>{
      if(mode==='light'){
        setMode('dark')
        document.body.style.backgroundColor = '#042743'
        // document.body.style.color = 'White'
        showAlert(" Dark mode has been enable "," success ")
        // document.title = "TextUtils - Dark Mode"
      }else{
        setMode('light')
        document.body.style.backgroundColor = 'white'
        showAlert(" light mode has been enable "," success ")
        // document.title = "TextUtils - light Mode"
      }
  }
  return (
    <>
   {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
   {/* <Navbar  /> */}
   
   
   <BrowserRouter>
   <Navbar title="TextUtils"  mode={mode} toggleMode ={toggleMode}/>
   <Alert alert={alert} />
   <Routes>
    <Route path='/' element ={<TextFrom showAlert={showAlert} heading = "Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode}/>} />
    <Route path='/about' element ={<About/>} />
    </Routes>
  </BrowserRouter>
    </>  
  );
}

export default App;
