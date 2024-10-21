import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Home from './pages/Home';
import Group from './pages/Group';
import Account from './pages/Account';
import Match from './pages/Match';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to='home' />} />
          <Route path='home' element={<Home />} />
          <Route path='group' element={<Group />} />
          <Route path='account' element={<Account />} />
          <Route path='match' element={<Match />} />
        </Route>

        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='register' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
