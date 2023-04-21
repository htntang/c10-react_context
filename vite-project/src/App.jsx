import { useState, useContext } from 'react'
import './App.css'
import UserContextProvider, {UserContext} from './Context/UserContext'
import MainPage from './Components/mainPage'
import Footer from './Components/Footer'
import LoginScreen from './Components/LoginScreen'

function App() {
  const [user, setUser] = useState('Chris')
  const loggedInUser = useContext(UserContext)

  return (
    <div style={({
        display:'flex', 
        flexDirection:'column', 
        alignItems:'center', 
        justifyContent:'center',
        backgroundColor:'#B86B77', 
        width:'100%', 
        height:'100%', 
        position:'fixed',
        top:0, 
        left:0
        })}>
      <div style={{ flexGrow: 1, display: 'flex', justifyContent:'center', alignItems:'center'}}>
        {user != null ?

      <MainPage user={user} /> :
      <LoginScreen setUser={setUser} />
        }
      </div>

      <Footer user={user} setUser={setUser} />
    </div>
  )
}

export default App
