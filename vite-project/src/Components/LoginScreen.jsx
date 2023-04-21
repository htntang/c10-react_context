import {useState} from 'react';

export default function LoginScreen({setUser}){
    const [userName,setUsername]=useState('')

    function loginUser(){
        setUser('Chris')
    }
    return<div>
        Username:
        <input type="text" value={userName} onChange={(e) => setUsername(e.target.value)} >
        </input>
        <button style={{backgroundColor:'#ff66cc', color:'white'}} onClick={loginUser}>Login</button>
    </div>
}