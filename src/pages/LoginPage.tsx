import { useState, useEffect } from 'react'
import { useDispatch } from "react-redux"
import { useNavigate, useLocation } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { login } from "@/features/userSlice";
import { UserState, selectUser } from "@/features/userSlice"
import { useSelector } from "react-redux"

const LoginPage = () => {
    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');
    const dispatch = useDispatch();
    const onLogin = (role: string) => dispatch(login(role));
    const navigate = useNavigate();
    const location = useLocation();
    // const { from }: { from: string }  = location.state as { from: string } || { from: null };
    const user: UserState = useSelector(selectUser);

    const signInEmail = () => {
      signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("user", user);
        })
        .catch((error) => {
          alert(error.message);
        })
    }

    // const handleLogin = () => {
    //   if (email === 'user' && pass === 'pass') {
    //     onLogin('user');
    //     console.log(user.isLogin);

    //     navigate('/');
    //   } else if (email === 'admin' && pass === 'pass') {
    //     onLogin('admin');
    //     navigate('/');
    //   }
    // };

    return (
      <div>
        <h2>Login Page</h2>
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