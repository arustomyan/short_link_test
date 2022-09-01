import { Route, Routes } from 'react-router-dom';
import AuthLayout from './components/Layouts/AuthLayout';
import Login from './pages/Login';
import Registration from './pages/Registration';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Route>
    </Routes>
  );
}

export default App;
