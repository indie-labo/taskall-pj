import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './components/LoginPage';
import Home from './components/Home';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = (): void => {
    setIsAuthenticated(true);
  };
  
  const logout = (): void => {
    setIsAuthenticated(false);
  };

  return (
    <Routes>
      <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />} >
        <Route path="/" element={<Dashboard logout={logout} />} >
          <Route path="home" element={<Home />} />
        </Route>
      </Route>
      <Route path="/login" element={<LoginPage login={login} />} />
    </Routes>
  );
};

export default App;