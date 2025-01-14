import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LoginPage = ({ login }: {login: () => void }) => {
    const [userId, setUserId] = useState<string>('');
    const [pass, setPass] = useState<string>('');
    const navigate = useNavigate();
    const location = useLocation();
    const { from }: { from: string }  = location.state as { from: string } || { from: null };

    const handleLogin = () => {
      if (userId === 'user' && pass === 'pass') {
        login();
        navigate(from ? from : '/');
      }
    };

    useEffect(() => {
      console.log(from);
    },[])

    return (
      <div>
        <h2>Login Page</h2>
        <div>
          <input
            type="text"
            placeholder="User ID"
            value={userId}
            onChange={(e) => 
              setUserId(e.target.value)}
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
        <button onClick={handleLogin}>Login</button>
      </div>
    );
};

export default LoginPage;