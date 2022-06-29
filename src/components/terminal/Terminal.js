
import { useState } from 'react';
import Axios from 'axios'
import React from 'react'

function Terminal() {
  const [loginMessage,setLoginMessage] = useState("")
  const [usernameLog,setUsernameLog] = useState("")
  const [passwordLog,setPasswordLog] = useState("")
  const [hidden,setHidden] = useState("hidden")
  // const [hiddenGUI,setHiddenGUI] = useState("hidden")
  const Enter = function (e) {
    if (e.which === 13) {
        e.preventDefault();
        setHidden("")
        
    }
}
const Login = (e)=>{
  if (e.which === 13) {
    e.preventDefault();
    Axios.post("http://127.0.0.1:5000/Login",{
      email:usernameLog,
      password:passwordLog
    }).then(()=>{
      setLoginMessage("welcome")
    })
    
}
 
}
  return (
    <div className="terminal-window" onKeyDown={Enter} style={{height:"70vh",width:"70vh",color:"green",backgroundColor:"rgb(126, 80, 126,0.5)"}}>
      
            <p style={{color:"green",fontFamily: 'VT323',fontSize:"1.5rem"}}>
              <label>>Softcom Login: </label>
              <input type="text" spellCheck="false"  style={{backgroundColor:"rgba(0, 0, 0, 0)",border:"none",outline:"none",color:"green",fontFamily: 'VT323',fontSize:"1.5rem",textDecoration:"none"}} onChange={(e)=>{
                setUsernameLog(e.target.value)
              }}/>
              <br />
              <span style={{visibility:`${hidden}`}}>
              <label>>password: </label>
              <input type="password"  spellCheck="false" style={{backgroundColor:"rgba(0, 0, 0, 0)",border:"none",outline:"none",color:"rgba(0, 0, 0, 0)",caretColor:"green",fontFamily: 'VT323',fontSize:"1.5rem",textDecoration:"none"}} onChange={(e)=>{
                setPasswordLog(e.target.value)
              }} onKeyDown={Login}/>
              <br />
              </span>
              {loginMessage}
            </p>
      </div>
  )
}

export default Terminal