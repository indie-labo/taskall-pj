import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  browserLocalPersistence,
  browserSessionPersistence
} from 'firebase/auth'
import { auth } from '@/lib/firebase'
import Message from '@/lib/message.json'
import { UserState, selectUser } from '@/features/userSlice'
import { useSelector } from 'react-redux'

const LoginPage = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passView, setPassView] = useState<string>('password')
  const [viewChecked, setViewChecked] = useState<boolean>(false)
  const [holdChecked, setHoldChecked] = useState<boolean>(false)
  const [message, setMessage] = useState<string | null>(null)

  const navigate = useNavigate()
  const location = useLocation()
  // const { from }: { from: string }  = location.state as { from: string } || { from: null }
  const user: UserState = useSelector(selectUser)
  const errorMessages: {[key: string]: string} = Message.firebase.error

  const switchPassView = (event: React.ChangeEvent<HTMLInputElement>) => {
    setViewChecked(event.target.checked)
    setPassView(viewChecked ? 'text' : 'password')
  }

  const switchHoldView = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHoldChecked(event.target.checked)
  }

  const signInEmail = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    try {
      await auth.setPersistence(holdChecked ? browserLocalPersistence : browserSessionPersistence)
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error: any) {
      const errorCode: string = error.code
      switch (errorCode) {
        case "auth/invalid-email":
          setMessage(errorMessages[errorCode])
          break
      } 
    }
  }

  const signInGoolge = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    try {
      const provider = new GoogleAuthProvider()
      provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
      await signInWithPopup(auth, provider)
    } catch (error: any) {
      const errorCode: string = error.code
      switch (errorCode) {
        case "auth/invalid-email":
          setMessage(errorMessages[errorCode])
          break
      } 
    }
  }

  return (
    <div className="pageLogin">
      <h1 className="title">会員ログイン</h1>
      <div className="contentsBg">
        <div className="contents">
          <div className="login">
            <div className="loginId">
              <label className="labelId" htmlFor="userId">お客様ID（メールアドレス）</label>
              <input
                className="inputId"
                type="text"
                name="userId"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="loginPass">
              <label className="labelPass" htmlFor="userPass">パスワード</label>
              <input
                className="inputPass"
                type={passView}
                name="userPass"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                className="inputCheck"
                type="checkbox"
                name="view"
                checked={viewChecked}
                onChange={switchPassView}
              />
              <label className="labelCheck" htmlFor="view">パスワードを表示する</label>
            </div>
            <p>{message}</p>
            <div className="loginBtn">
              <button className="btn" onClick={signInEmail}>ログイン</button>
              <input
                className="inputCheck"
                type="checkbox" 
                name="hold"
                checked={holdChecked}
                onChange={switchHoldView}
              />
              <label className="labelBtn" htmlFor="hold">ログイン状態を保持する</label>
            </div>
            <div className="signUp">
              <p className="btn">新規登録</p>
            </div>
          </div>
          <div className="loginOther">
            <button className="headding" onClick={signInGoolge}>ほかのアカウントでログインする</button>
            <div className="google">
              <div className="iconWrap">
                <img className="icon" src="./img/icon-google.webp" alt="icon" />
              </div>
              <div className="btnWrap">
                <p className="btn">ログイン</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;