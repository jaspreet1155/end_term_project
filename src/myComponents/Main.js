import React from 'react'
import './Home.css'
export default function Main() {
  function login(e){
    let dis = document.getElementById("login");
    dis.style.display="block";
    e.preventDefault();
  }
  return (
    <>
    <div className='heading-top'>
      <h1>Find your Special Someone</h1>
    </div>
    <div className='main-info'>
        <div className='sign-up'>
            <div className='signup-icon'>
                
            </div>
            <div className='signup-heading'>
             <span><strong> <a href="/"  onClick={login}>Sign Up</a></strong></span>
            </div>
            <div className='signup-main'>
              <p>Register for free & put up your Matrimony Profile</p>
            </div>
            
        </div>
        <div className='connect'>
            <div className='connect-icon'>
                
            </div>
            <div className='connect-heading'>
             <span><strong> <a href="/" onClick={login}>Log In</a></strong></span>
            </div>
            <div className='signup-main'>
              <p>Select & Connect with Matches you like</p>
            </div>
        </div>
        <div className='interact'>
            <div className='interact-icon'>
                
            </div>
            <div className='interact-heading'>
             <span><strong><a href="/" onClick={login}>Interact</a></strong></span>
            </div>
            <div className='signup-main'>
              <p>Become a Premium Member & Start a Conversation</p>
            </div>
        </div>
    </div>
    <div className='ads-img'>
        
    </div>
    <div className='img-1'></div>
    </>
  )
}
