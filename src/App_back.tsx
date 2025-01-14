import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, addMount, selectCount } from './feature/counterSlice'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from "react-router-dom"
import Home from './components/Home'
import Page1 from './components/Page1'
import Page2 from './components/Page2'

function App() {
  // const [count, setCount] = useState(0)
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState('0');
  const onIncrement = () => dispatch(increment());
  const onDecrement = () => dispatch(decrement());
  const onAddMount = () => dispatch(addMount(Number(amount)));

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div className="count">count is {count}</div>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={onIncrement}>
          +1
        </button>
        <button onClick={onDecrement}>
          -1
        </button>
        <button onClick={onAddMount}>
          Amount
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
      <Link to="/">HOME</Link>
      <br />
      <Link to="page1">PAGE1</Link>
      <br />
      <Link to="page2">PAGE2</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
      </div>
    </>
  )
}

export default App
