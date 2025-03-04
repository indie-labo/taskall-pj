import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';
import { auth } from '@/lib/firebase';
import Message from '@/lib/message.json';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { UserState, selectUser } from '@/features/userSlice';
// import { useSelector } from 'react-redux';
// ==========================================================
import '@/assets/css/style.css';

const SignupPage = () => {
  // ==========================================================
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [viewChecked, setViewChecked] = useState<boolean>(false)
  const [message, setMessage] = useState<string | null>(null)

  // const location = useLocation()
  // const { from }: { from: string }  = location.state as { from: string } || { from: null }
  // const user: UserState = useSelector(selectUser)
  // const navigate = useNavigate()
  const errorMessages: {[key: string]: string} = Message.firebase.error

  const switchPassView = () => setViewChecked(!viewChecked)

  const signUpEmail = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      await sendEmailVerification(userCredential.user)
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
    <div className="p_signup">
      <h1 className="title">新規登録</h1>
      <div className="contentsBg">
        <div className="contents">
          <div className="layout">

            <div className="signupId">
              <label className="labelId" htmlFor="userId">お客様ID（メールアドレス）</label>
              <input
                className="inputId"
                type="text"
                name="userId"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="signupPass">
              <div className="first">
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
            </div>

            <p>{message}</p>

            <div className="signupBtn">
              <button className="btn" onClick={signUpEmail}>新規登録</button>
            </div>

            <div className="pageBack">
              <Link to="/login" className="btn">戻る</Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupPage;
