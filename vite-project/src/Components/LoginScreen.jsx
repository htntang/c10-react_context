import {useState} from 'react';
import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';

export default function LoginScreen(){
    const {setUser} = useContext(UserContext)

    const [userName, setUsername] = useState('')

    function loginUser(){
        setUser('username')
    }
    return<div>
        Username:
        <input 
            type="text"
            value={userName}
            onChange={(e) => setUsername(e.target.value)} ></input>
        <button
            style={{backgroundColor:'#ff66cc', color:'white'}}
            onClick={loginUser}>Login</button>
    </div>
}