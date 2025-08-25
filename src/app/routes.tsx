import { Routes, Route } from 'react-router-dom';
import HomeLayout from '@/components/layout/HomeLayout';
import Home from '@/features/home/routes/Home';
import Trend from '@/features/trend/routes/Trend';
import Quiz from '@/features/quiz/routes/Quiz';
import Color from '@/features/color/routes/Color';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/trend" element={<Trend />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/color" element={<Color />} />
      </Route>
    </Routes>
  );
}
