import { useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthContext from './context/authContext';
import Dashboard from './pages/Dashboard/Dashboard';
import AuthLayout from './components/Layouts/AuthLayout';
import Login from './pages/Login';
import Registration from './pages/Registration';
import NotFound from './pages/NotFound/NotFound';

const initIsLogged = !!sessionStorage.getItem('token');

function App() {
  const [isLogged, setIsLogged] = useState(initIsLogged);

  const context = useMemo(
    () => ({
      isLogged,
      setIsLogged,
    }),
    [isLogged]
  );

  return (
    <AuthContext.Provider value={context}>
      <Routes>
        {!isLogged ? (
          <Route path="/" element={<AuthLayout />}>
            <Route path="/" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
          </Route>
        ) : (
          <Route path="/" element={<Dashboard />} />
        )}

        <Route path="/" element={<AuthLayout />}>
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
