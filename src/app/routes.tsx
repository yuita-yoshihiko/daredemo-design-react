import { Routes, Route } from 'react-router-dom';
import HomeLayout from '@/components/layout/HomeLayout';
import Home from '@/features/home/routes/Home';
import Trend from '@/features/trend/routes/Trend';
import Quiz from '@/features/quiz/routes/Quiz';
import Color from '@/features/color/routes/Color';
import Trip from '@/features/trip/routes/Trip';
import DesignTip from '@/features/design_tips/routes/DesignTip';
import FavoriteDesignTip from '@/features/design_tips/routes/FavoriteDesignTip';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/trend" element={<Trend />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/color" element={<Color />} />
        <Route path="/trip" element={<Trip />} />
        <Route path="/design_tip" element={<DesignTip />} />
        <Route path="/design_tip/favorite" element={<FavoriteDesignTip />} />
      </Route>
    </Routes>
  );
}
