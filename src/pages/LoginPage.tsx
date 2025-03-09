import React, { useState, useEffect } from 'react';
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  browserLocalPersistence,
  browserSessionPersistence
} from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Link } from 'react-router-dom';
import Message from '@/lib/message.json';
import '@/assets/css/style.css';
import iconGoogle from '@/assets/img/icon_google.png';

const LoginPage = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [viewChecked, setViewChecked] = useState<boolean>(false)
  const [holdChecked, setHoldChecked] = useState<boolean>(false)
  const [isVerified, setIsVerified] = useState<boolean>(true);
  const [message, setMessage] = useState<string | null>(null)

  // const navigate = useNavigate()
  // const location = useLocation()
  // const { from }: { from: string }  = location.state as { from: string } || { from: null }
  // const user: UserState = useSelector(selectUser)
  const errorMessages: {[key: string]: string} = Message.firebase.error

  const switchPassView = () => setViewChecked(!viewChecked)

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

  useEffect(() => {
    setIsVerified(auth.currentUser ? auth.currentUser.emailVerified : true)
  }, [])

  return (
    <div className="p_login">
      {!isVerified && (
        <div className="messageArea">
        <p className="message">ご登録のメールアドレスに認証用メールを送信しました。認証後、再度ログインしてください。</p>
      </div>
      )}
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
                name="userPass"
                type={viewChecked ? "text" : "password"}
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
              <div className="comment">
                <input
                  className="inputCheck"
                  type="checkbox" 
                  name="hold"
                  checked={holdChecked}
                  onChange={switchHoldView}
                />
                <label className="labelCheck" htmlFor="hold">ログイン状態を保持する</label>
              </div>
            </div>

            <div className="signUp">
              <Link to="/signup" className="btn">新規登録</Link>
            </div>
          </div>

          <div className="loginOther">
            <p className="headding">ほかのアカウントでログインする</p>
            <div className="google">
              <div className="iconWrap">
                <img className="icon" src={iconGoogle} alt="icon" />
              </div>
              <div className="btnWrap">
                <button className="btn" onClick={signInGoolge}>ログイン</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LoginPage;
