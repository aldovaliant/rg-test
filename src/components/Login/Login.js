import React from 'react'
import LoginForm from './LoginForm'

function Login(){
    const handleSubmit = data => {
        const json = JSON.stringify(data, null, 4);
        console.clear();
        console.log(json);
      };
      
    return(
        <LoginForm onSubmit={handleSubmit}/>
    );
}

export default Login;