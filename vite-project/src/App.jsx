import { useState } from 'react'
import './App.css'
import MainPage from './Components/mainPage'
import Footer from './Components/Footer'

function App() {
  const [user, setUser] = useState('Chris')

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
      <div style={{ flexGrow: 1}}>

      <MainPage user={user} />
      </div>

      <Footer user={user} setUser={setUser} />
    </div>
  )
}

export default App
