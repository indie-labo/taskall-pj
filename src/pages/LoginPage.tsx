import { useState, useEffect, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import Message from '@/lib/message.json'
import { login } from '@/features/userSlice'
import { UserState, selectUser } from '@/features/userSlice'
import { useSelector } from 'react-redux'

const LoginPage = () => {
    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');
    const [message, setMessage] = useState<string | null>(null);
    const dispatch = useDispatch();
    const onLogin = (role: string) => dispatch(login(role));
    const navigate = useNavigate();
    const location = useLocation();
    // const { from }: { from: string }  = location.state as { from: string } || { from: null };
    const user: UserState = useSelector(selectUser);

    const signInEmail = async (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      try {
        await signInWithEmailAndPassword(auth, email, pass);
      } catch (error: any) {
        switch (error.code) {
          case "auth/invalid-email":
            setMessage(Message.firebase.error['auth/invalid-email']);
            break;
        } 
      }
    }

    return (
      <div>
        <h2>Login Page</h2>
        <h3>{message}</h3>
        <div>
          <input
            type="text"
            placeholder="User ID"
            value={email}
            onChange={(e) => 
              setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Password"
            value={pass}
            onChange={(e) => 
              setPass(e.target.value)}
          />
        </div>
        <button onClick={signInEmail}>Login</button>
      </div>
    );
};

export default LoginPage;