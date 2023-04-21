import { useState } from 'react'
import './App.css'
import Main from "./Components/mainPage";

function App() {
  const [user, setUsert] = useState('chris')

  return (
    <>
      <MainPage user={user} />
    </>
  )
}

export default App
