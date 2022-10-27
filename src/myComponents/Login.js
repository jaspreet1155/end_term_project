import { logDOM } from '@testing-library/react';
import React from 'react'
import "./Login.css";
import { useState } from 'react';
export default function Login() {
  function cross() {
    let dis = document.getElementById("login");
    dis.style.display = "none";
  }
  function plan() {
    let dis = document.getElementById("login");
    dis.style.display = "none";
    let plan = document.getElementById("plan");
    plan.style.display = "block";
  }
  let card = document.getElementsByClassName("card");
  Array.from(card).forEach(function (e) {
    e.addEventListener("click", function (ele) {
      let plan = document.getElementById("plan");
      plan.style.display = "none";
    })
  })
  const [state, setState] = useState(false)
  console.log(state);
  function change () {
    setState(true)
    let a = document.body
    a.style.backgroundColor="";
    // console.log(a);
  }
    return (
    <>
      <div id='login'>
        <div id="log">
          <div id="icon1"><div id='icon2' onClick={cross}></div></div>
          <div id="head">Let's set up your account, while
            we find Matches for you!</div>
          <div className='pro'><div>Profile for</div>
            <select name="profile" className='profile'>
              <option value="Select">Select</option>
              <option value="Self">Self</option>
              <option value="Son">Son</option>
              <option value="Daughter">Daughter</option>
              <option value="Daughter">Daughter</option>
              <option value="Brother">Brother</option>
              <option value="Sister">Sister</option>
              <option value="Friend">Friend</option>
              <option value="Relative">Relative</option>
            </select>
          </div>
          <div id="name">
            <div id="n">Enter Name</div>
            <div id='input' >
              <input type="text" className='input' placeholder='First Name' />
              <input type="text" className='input' placeholder='Last Name' />
            </div>
          </div>
          <div className='pro'><div>Religion</div>
            <select name="profile" className='profile'>
              <option value="Select">Select</option>
              <option value="Hindu">Hindu</option>
              <option value="Muslim">Muslim</option>
              <option value="Christian">Christian</option>
              <option value="Sikh">Sikh</option>
              <option value="Parsi">Parsi</option>
              <option value="Jain">Jain</option>
              <option value="Buddhist">Buddhist</option>
              <option value="Jewish">Jewish</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className='pro'><div>Community</div>
            <select name="profile" className='profile'>
              <option value="Select">Select</option>
              <option value="Hindi">Hindi</option>
              <option value="Marathi">Marathi</option>
              <option value="Punjabi">Punjabi</option>
              <option value="Bengali">Bengali</option>
              <option value="Gujarati"> Gujarati</option>
              <option value="Urdu">Urdu</option>
              <option value="Telugu">Telugu</option>
              <option value="Kannada">Kannada</option>
              <option value="English">English</option>
              <option value="Tamil">Tamil</option>
              <option value="Marwari">Marwari</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div id="btn1"><button id='btn2' onClick={plan}>Login</button></div>
        </div>
      </div>
      <div id="plan">
        <div id="card">
          <div className="card">
            <div className='price' style={{ backgroundColor: "#00bde2" }}>45$</div>
            <div className="type" style={{ backgroundColor: "#00bde2"  }} onClick={change} >15 Searches</div>
          </div>

          <div className="card">
            <div className='price' style={{ backgroundColor: "#00bde2" }}>65$</div>
            <div className="type" style={{ backgroundColor: "#00bde2" }}>35 Searches</div>
          </div>
          <div className="card">
            <div className='price' style={{ backgroundColor: "#00bde2" }}>85$</div>
            <div className="type" style={{ backgroundColor: "#00bde2" }}>45 Searches</div>
          </div>
        </div>
      </div>
    </>
  )
}
