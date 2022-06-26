import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home/Home'));
const Layout = lazy(() => import('./_shared/Layout/Layout'));
const Login = lazy(() => import('./Login/Login'));
const Performance = lazy(() => import('./Performance/Performance'));
const Festival = lazy(() => import('./Festival/Festival'));
const Award = lazy(() => import('./Awards/Awards'));
const BoxOffice = lazy(() => import('./BoxOffice/BoxOffice'));
const Detail = lazy(() => import('../components/Detail/Detail'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='boxOffice' element={<BoxOffice />} />
          <Route path='performance' element={<Performance />} />
          <Route path='festival' element={<Festival />} />
          <Route path='award' element={<Award />} />
          <Route path='/:detail' element={<Detail />} />
        </Route>
        <Route path='*' element={<div>잘못 된 접근입니다.</div>} />
      </Routes>
    </Suspense>
  );
};

export default App;
