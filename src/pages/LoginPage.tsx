import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import Message from '@/lib/message.json'
import { UserState, selectUser } from '@/features/userSlice'
import { useSelector } from 'react-redux'

const LoginPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passType, setPassType] = useState<string>('password');
  const [checked, setChecked] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);

  const navigate = useNavigate();
  const location = useLocation();
  // const { from }: { from: string }  = location.state as { from: string } || { from: null };
  const user: UserState = useSelector(selectUser);
  const errorMessages: {[key: string]: string} = Message.firebase.error;

  const switchPassType = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.checked) {
      setPassType('text');
      setChecked(true);
    } else {
      setPassType('password');
      setChecked(false);
    }
  }

  const signInEmail = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      const errorCode: string = error.code; 
      switch (errorCode) {
        case "auth/invalid-email":
          setMessage(errorMessages[errorCode]);
          break;
      } 
    }
  }

  return (
    <div class="pageLogin">
      <h1 class="title">会員ログイン</h1>
      <div class="contentsBg">
        <div class="contents">
          <div class="login">
            <div class="loginId">
              <label class="labelId" for="userId">お客様ID（メールアドレス）</label>
              <input
                class="inputId"
                type="text"
                name="userId"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="loginPass">
              <label class="labelPass" for="userPass">パスワード</label>
              <input
                class="inputPass"
                type={passType}
                name="userPass"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                class="inputCheck"
                type="checkbox"
                name="view"
                checked={checked}
                onChange={switchPassType}
              />
              <label class="labelCheck" for="view">パスワードを表示する</label>
            </div>
            <p>{message}</p>
            <div class="loginBtn">
              <button class="btn" onClick={signInEmail}>ログイン</button>
              <input class="inputCheck" type="checkbox" id="hold" name="hold" />
              <label class="labelBtn" for="hold">ログイン状態を保持する</label>
            </div>
            <div class="signUp">
              <p class="btn">新規登録</p>
            </div>
          </div>
          <div class="loginOther">
            <p class="headding">ほかのアカウントでログインする</p>
            <div class="google">
              <div class="iconWrap">
                <img class="icon" src="./img/icon-google.webp" alt="icon" />
              </div>
              <div class="btnWrap">
                <p class="btn">ログイン</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;