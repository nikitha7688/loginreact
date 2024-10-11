import { useState } from "react"
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function App()
{
  const navigate = useNavigate()
  const [user,setuser] = useState("")
  const [pass,setpass] = useState("")

  function handleuser(evt)
  {
     setuser(evt.target.value)
  }

  function handlepass(evt)
  {
    setpass(evt.target.value)
  }
  function check()
  {
    var logindetails = axios.post("http://localhost:5000/login",{"username":user,"password":pass})
    logindetails.then(function(data){
      if(data.data === true)
      {
        navigate("Success")
      }
      else{
         navigate("/Fail")
      }
    })
  }

  return(
    <div className="card">
    <center><h1>Login</h1></center>
    <input className="input" onChange={handleuser} name="username" placeholder="UsearName"></input>
    <input  className="input" onChange={handlepass} name="password" placeholder="Password"></input>
    <button className=" button" onClick={check}>Login</button>
    <p>Doun't have an account? Register</p>
    
    </div>
  );
}
export default App