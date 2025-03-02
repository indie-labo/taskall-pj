import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Route, Routes, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { login, logout } from "@/features/userSlice"
import AuthRoute from "@/routes/AuthRoute"
import LoginPage from "@/pages/LoginPage"
import Dashboard from '@/pages/Dashboard'
import TableView from "@/components/TableView"
import Chat from "@/components/Chat"
import FileManger from "@/components/FileManeger"
import Gantt from "@/components/Gantt"
import Kanban from "@/components/Kanban"
import ErrorPage from "@/pages/ErrorPage"

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onLogin = (role: string) => dispatch(login(role))
  const onLogOut = () => dispatch(logout())

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user)
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
          <Route path="file" element={<FileManger />} />
          <Route path="kanban" element={<Gantt />} />
          <Route path="gantt" element={<Kanban />} />
        </Route>
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default App;