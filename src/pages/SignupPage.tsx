// ※コメントアウトしてるやつはLoginpage.tsx からのコピー。不要なものは最後に消す
// ==========================================================
// import React, { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import {
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   GoogleAuthProvider,
//   browserLocalPersistence,
//   browserSessionPersistence
// } from 'firebase/auth';
// import { auth } from '@/lib/firebase';
// import Message from '@/lib/message.json';
// import { UserState, selectUser } from '@/features/userSlice';
// import { useSelector } from 'react-redux';
// ==========================================================
import '@/assets/css/style.css';

const SignupPage = () => {
  // ==========================================================
  // const [email, setEmail] = useState<string>('')
  // const [password, setPassword] = useState<string>('')
  // const [passView, setPassView] = useState<string>('password')
  // const [viewChecked, setViewChecked] = useState<boolean>(false)
  // const [holdChecked, setHoldChecked] = useState<boolean>(false)
  // const [message, setMessage] = useState<string | null>(null)

  // const navigate = useNavigate()
  // const location = useLocation()
  // // const { from }: { from: string }  = location.state as { from: string } || { from: null }
  // const user: UserState = useSelector(selectUser)
  // const errorMessages: {[key: string]: string} = Message.firebase.error

  // const switchPassView = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setViewChecked(event.target.checked)
  //   setPassView(viewChecked ? 'text' : 'password')
  // }

  // const switchHoldView = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setHoldChecked(event.target.checked)
  // }

  // const signInEmail = async (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault()
  //   try {
  //     await auth.setPersistence(holdChecked ? browserLocalPersistence : browserSessionPersistence)
  //     await signInWithEmailAndPassword(auth, email, password)
  //   } catch (error: any) {
  //     const errorCode: string = error.code
  //     switch (errorCode) {
  //       case "auth/invalid-email":
  //         setMessage(errorMessages[errorCode])
  //         break
  //     } 
  //   }
  // }

  // const signInGoolge = async (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault()
  //   try {
  //     const provider = new GoogleAuthProvider()
  //     provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
  //     await signInWithPopup(auth, provider)
  //   } catch (error: any) {
  //     const errorCode: string = error.code
  //     switch (errorCode) {
  //       case "auth/invalid-email":
  //         setMessage(errorMessages[errorCode])
  //         break
  //     } 
  //   }
  // }
  // ==========================================================

  return (
    <div className="p_signup">
      <h1 className="title">新規登録</h1>

      <div className="contentsBg">
        <div className="contents">
          <div className="layout">
            
            <div className="signupId">
              <label className="labelId" htmlFor="userId">お客様ID（メールアドレス）</label>
              <input className="inputId" type="text" id="userId" name="userId" />
            </div>

            <div className="signupPass">
              <div className="first">
                <label className="labelPass" htmlFor="userPass">パスワード</label>
                <input className="inputPass" type="text" id="usePass" name="userPass" />
              
                <input className="inputCheck" type="checkbox" id="view" name="view" />
                <label className="labelCheck" htmlFor="view">パスワードを表示する</label>
              </div>

              <div className="second">
                <label className="labelPass" htmlFor="userPass">パスワード（再入力）</label>
                <input className="inputPass" type="text" id="usePass" name="userPass" />
              
                <input className="inputCheck" type="checkbox" id="view" name="view" />
                <label className="labelCheck" htmlFor="view">パスワードを表示する</label>
              </div>
            </div>

            <div className="signupBtn">
              <button className="btn">新規登録</button>
            </div>

            <div className="pageBack">
              <button className="btn">戻る</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupPage;
