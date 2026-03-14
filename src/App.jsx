
import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Nav from './components/Nav'
import StatusBar from './components/StatusBar'
import ToggleBar from './components/ToggleBar'

function App() {

  const [active, setActive] = useState('All')


  return (
    <>
      <Nav></Nav>
      <StatusBar></StatusBar>
      <ToggleBar active={active} setActive={setActive}></ToggleBar>
      <Footer></Footer>
    </>
  )
}

export default App
