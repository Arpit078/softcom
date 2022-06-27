import React from 'react'
import LOGO from "../../assets/softcomLOGO.png"
import LoginForm from "../../components/LoginForm/LoginForm"
import Tilty from 'react-tilty';
import Terminal from "../../components/terminal/Terminal"
function Login() {
  return (
    <div className="container" style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"black",border:"none",borderRadius:"0"}}>
      <div className="header" style={{display:"flex",justifyContent:"center",alignItems:"center"}}> <img src={LOGO} alt="" style={{height:"5rem",width:"5rem",margin:"2rem"}}/>
      <h1 style={{color:"rgb(232,212,186)"}}>SOFTCOM</h1></div>
   
    <Tilty scale={1} reset={false} max={2}>  
    
    <div className="wrapper" style={{display:"flex"}}>
    
              <Terminal/>
              <LoginForm/>
     
      </div> 
      
      
    </Tilty>
    
  </div>
  )
}

export default Login