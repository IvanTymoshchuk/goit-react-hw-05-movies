import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout/Layout';

const Home = lazy(() => import('../pages/Home'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};
