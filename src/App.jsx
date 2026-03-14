
import { Suspense, useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Nav from './components/Nav'
import StatusBar from './components/StatusBar'
import ToggleBar from './components/ToggleBar'
import IssuesSection from './components/IssuesSection'
import Container from './components/Container'
import Loading from './components/Loading'


const loadData = async () => {
  const res = await fetch('/data.json')
  return res.json()
}

function App() {

  const [active, setActive] = useState('All')


  return (
    <>
      <Nav></Nav>
      <StatusBar></StatusBar>
      <ToggleBar active={active} setActive={setActive}></ToggleBar>
      <Suspense fallback={<Container>
        <Loading></Loading>
      </Container>}>
        <IssuesSection loadData={loadData()}></IssuesSection>
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App
