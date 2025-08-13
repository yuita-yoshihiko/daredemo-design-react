import { Outlet } from 'react-router-dom';
import Header from '@/components/header/Header';

export default function HomeLayout() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4">
        {/* ここに各ページが差し込まれる */}
        <Outlet />
      </main>
      {/* フッターを後で足すならここ */}
    </div>
  );
}
