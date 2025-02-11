import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {Sidebar, Header, MainView} from './common/index'
import './App.css'

function App() {
  const [view, setView] = useState("");

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
