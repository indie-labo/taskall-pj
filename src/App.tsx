import { useState } from 'react'
import {Sidebar, Header, MainView} from './common/index.ts'
import './App.css'

function App() {
  const [view, setView] = useState("initialState");

  console.log("test");

  return (
    <div className='l_common'>
      <Sidebar setView={setView} activeView={view} />

      <div className='l_mainWrap'>
        <Header />
        <MainView view={view} />
      </div>
    </div>
  )
}

export default App
