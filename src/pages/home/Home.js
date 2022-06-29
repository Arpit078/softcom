import React from "react";
import "./Home.css"
import Left from "../../components/leftBoxHome/Left"
import Mid from "../../components/midBoxHome/Mid"
import Right from "../../components/rightBoxHome/Right";
function Home() {
  return (
    <div style={{display:"flex"}}>
      <Left/>
      <Mid/>
      <Right/>
    </div>
  );
}

export default Home;
