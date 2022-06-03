import { Routes, Route } from 'react-router-dom';

import Layout from './_shared/Layout/Layout';
import Login from './Login/Login';
import Home from './Home/Home';
import Performance from './Performance/Performance';
import Festival from './Festival/Festival';
import Award from './Awards/Awards';
import Ticketing from './Ticketing/Ticketing';
import Detail from '../components/Detail/Detail';

const App = () => {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='performance' element={<Performance />} />
        <Route path='festival' element={<Festival />} />
        <Route path='award' element={<Award />} />
        <Route path='/:detail' element={<Detail />} />
        <Route path='ticketing' element={<Ticketing />} />
      </Route>
      <Route path='*' element={<div>잘못 된 접근입니다.</div>} />
    </Routes>
  );
};

export default App;
