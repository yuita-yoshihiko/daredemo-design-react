import { Outlet } from 'react-router-dom';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

export default function HomeLayout() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <main className="pb-6 sm:pb-8 lg:pb-12">
        {/* ここに各ページが差し込まれる */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
