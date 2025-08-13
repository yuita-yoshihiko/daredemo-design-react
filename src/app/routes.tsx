import { Routes, Route } from 'react-router-dom';
import HomeLayout from '@/components/layout/HomeLayout';
import Home from '@/features/home/routes/Home';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/hoge" element={<Home />} />
      </Route>
    </Routes>
  );
}
