import { useState } from 'react'
import {Sidebar, Header, MainView} from './common/index.ts'
import './App.css'

function App() {
  const [view, setView] = useState("");

  console.log("test");

  return (
    <div className='lCommon'>
      <Sidebar setView={setView} activeView={view} />

      <div className='lMainWrap'>
        <Header />
        <MainView view={view} />
      </div>
    </div>
  )
}

export default App
