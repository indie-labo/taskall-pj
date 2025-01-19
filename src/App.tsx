import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { login } from "@/features/userSlice";
import LoginPage from "@/pages/LoginPage";
import Home from "@/components/Home";
import Dashboard from '@/pages/Dashboard';
import AuthRoute from "@/routes/AuthRoute";

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onLogin = (role: string) => dispatch(login(role));

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        onLogin("user");
        navigate('/');
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route element={ <AuthRoute to="/login" />} >
        <Route path="/" element={<Dashboard />} >
          <Route path="home" element={<Home />} />
        </Route>
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default App;