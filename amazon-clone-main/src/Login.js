import { useState } from "react"
import React from 'react'
import { Link } from "react-router-dom"
import { auth } from "./Firebase";
function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn=e=>{
        e.preventDefault();
    }
    const register=e=>{
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth) => {
console.log(auth);

        })
        .catch(error=>alert(error.message))
    }
  return (
    <div>
      
    </div>
  )
}

export default Login
