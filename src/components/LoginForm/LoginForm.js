import React from 'react'
import { useState } from 'react';
import Axios from 'axios'
import "./LoginFrom.css"
function LoginForm() {
    const [usernameReg,setUsernameReg] = useState("")
    const [passwordReg,setPasswordReg] = useState("")
    const [emailReg,setEmailReg] = useState("")
  
    const [usernameLog,setUsernameLog] = useState("")
    const [passwordLog,setPasswordLog] = useState("")
    
    const Register = ()=>{
      Axios.post("http://127.0.0.1:5000/Register",{
        username : usernameReg,
        password:passwordReg,
        email:emailReg
      }).then((err)=>{
        console.log(err)
        console.log("ok user registered")
      })
    }
  
    const Login = ()=>{
      Axios.post("http://127.0.0.1:5000/Login",{
        email:usernameLog,
        password:passwordLog
      }).then(()=>{
        console.log("ok user logged in")
      })
    }
    return (
     
      <div>
        <div className="container" style={{height:"70vh",width:"40vh",backgroundColor:"rgba(194, 146, 83)"}}>
             <div className="title"  >
              
               Login
             </div>
             <div className="login">
                    <div className='credential-block' >
                      <label >Username</label>
                      <br />
                      <input spellCheck="false" type="text" style={{border:"none",outline:"none",height:"1.5rem",borderRadius:"0.3rem",backgroundColor:"rgb(129, 125, 89)",color:"white"}} onChange={(e)=>{
                            setUsernameLog(e.target.value)}}/>
                      <br />
                      <label >Password</label>
                      <br />
                      <input onChange={(e)=>{setPasswordLog(e.target.value)}}
                      type="password" style={{border:"none",outline:"none",height:"1.5rem",borderRadius:"0.3rem",backgroundColor:"rgb(129, 125, 89)",color:"white"}}/>
                    </div>
                    <button onClick={Login} style={{marginLeft:"4rem",marginTop:"1rem",backgroundColor:"rgb(0,0,0,0.1)",border:"none",padding:"0.5rem",borderRadius:"0.5rem",cursor:"pointer  "}}>Login</button>
              </div>
              <div className="title"  >
              
               Register
             </div>
              <div className="register">
                    <div className='credential-block' >
                    <label >Username</label>
                    <br />
                    <input spellCheck="false" type="text" style={{border:"none",outline:"none",height:"1.5rem",borderRadius:"0.3rem",backgroundColor:"rgb(129, 125, 89)",color:"white"}} onChange={(e)=>{
                          setUsernameReg(e.target.value)}}/>
                    
                     <br />
                    <label >Email</label>
                    <br />
                    <input onChange={(e)=>{setEmailReg(e.target.value)}}
                    type="text" style={{border:"none",outline:"none",height:"1.5rem",borderRadius:"0.3rem",backgroundColor:"rgb(129, 125, 89)",color:"white"}}/>
                    <br />
                    <label >Password</label>
                    <br />
                    <input onChange={(e)=>{setPasswordReg(e.target.value)}}
                    type="password" style={{border:"none",outline:"none",height:"1.5rem",borderRadius:"0.3rem",backgroundColor:"rgb(129, 125, 89)",color:"white"}}/>
                   
                  </div>
                  <button onClick={Register} style={{marginLeft:"3.5rem",marginTop:"1rem",backgroundColor:"rgb(0,0,0,0.1)",border:"none",padding:"0.5rem",borderRadius:"0.5rem",cursor:"pointer  "}}>Register</button>
              </div>
         </div> 
         
      </div>
    );
  }

export default LoginForm