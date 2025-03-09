import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { login, logout } from '@/features/userSlice';
import AuthRoute from '@/routes/AuthRoute';
import { ErrorPage, LoginPage, Dashboard, SignupPage } from '@/pages/index';
import { TableView, Kanban, Gantt, Chat, FileManeger} from '@/components/index';

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onLogin = (role: string) => dispatch(login(role))
  const onLogOut = () => dispatch(logout())

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        onLogin("user")
        setIsLoading(false)
        navigate('/')
      } else {
        onLogOut()
        setIsLoading(false)
        navigate('/login')
      }
    });
    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route element={ <AuthRoute to="/login" isLoading={isLoading} />} >
        <Route path="/" element={<Dashboard />} errorElement={<ErrorPage />} >
          <Route path="table" element={<TableView />} />
          <Route path="chat" element={<Chat />} />
          <Route path="file" element={<FileManeger />} />
          <Route path="kanban" element={<Gantt />} />
          <Route path="gantt" element={<Kanban />} />
        </Route>
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
};

export default App;