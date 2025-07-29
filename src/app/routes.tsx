import { Routes, Route } from 'react-router-dom';
import { AppPage } from '@/app/routes/home';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/hoge" element={<AppPage />} />
    </Routes>
  );
}
