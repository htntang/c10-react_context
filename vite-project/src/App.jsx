import { useState, useContext } from 'react'
import './App.css'
import UserContextProvider, {UserContext} from './Context/UserContext'
import MainPage from './Components/mainPage'
import Footer from './Components/Footer'
import LoginScreen from './Components/LoginScreen'

function App() {
  const loggedInUser = useContext(UserContext)
  const user = loggedInUser.user
  const setUser = loggedInUser.setUser

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

      <MainPage /> :
      <LoginScreen />
        }
      </div>

      <Footer />
    </div>
  )
}

export default App
