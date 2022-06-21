import React, {useState} from "react";
import './Login.css';
// import axios from "axios";
// import Home from '../Home/Home'
import { Link } from "react-router-dom";

const Login = () => { 
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showSignup, setShowSignup] = useState(false)

  const toggle = () => {
    setShowSignup(!showSignup)
  }
  const handleLogin = () => {
    if(!username){
      alert("Username Can not be empty")
    }
  }
  return (
    <>
    {!showSignup?
        (<div className="container my-5">
      <h2>Login</h2>
      <div className="login-email my-3">
      <div className="text"><label htmlFor="login">Username</label></div>
       <input type="email" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} maxLength={20}/>
       </div>
       <div className="login-password">
       <div className="text"><label htmlFor="login-pass">Password</label></div>
       <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} maxLength={8}/> 
       </div>
       <Link to={'/home'}><div className="login-btn my-2">
       <button className="btn btn-primary btn-sm" onClick={handleLogin}>Login as User</button>
       </div></Link>
       <div onClick={toggle}>Don't have account? Sign Up</div>
      </div>)

       :
            
      (<div className="container my-5">
      <h2>Sign Up</h2>
      <div className="Container">
      <div className="text"><label htmlFor="name">First Name</label></div>
       <input type="text" placeholder="First Name" maxLength={20}/>
       </div>
      <div className="signup-email my-3">
      <div className="text"><label htmlFor="login">Username</label></div>
       <input type="email" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} maxLength={20}/>
       </div>
       <div className="signup-password">
       <div className="text"><label htmlFor="login-pass">Password</label></div>
       <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} maxLength={8}/> 
       </div>
       <div className="Container my-3">
      <div className="text"><label htmlFor="mobile">Mobile Number</label></div>
       <input type="number" placeholder="Mobile" maxLength={10}/>
       </div>
       <div className="login-btn my-2">
       <button className="btn btn-primary btn-sm" onClick={handleLogin}><Link to="/home">Sign Up</Link></button>
       </div>
       <div onClick={toggle}>Already a Member? Login</div>
      </div>)}
      </>
  );
};

export default Login;



