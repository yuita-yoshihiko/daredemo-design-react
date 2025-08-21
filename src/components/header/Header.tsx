import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const MENU = [
    { label: 'トレンド情報', to: '/trend' },
    { label: 'カラー抽出',   to: '#' },
    { label: 'UI・UXクイズ',  to: '#' },
    { label: 'Design Trip',  to: '#' },
  ] as const;
  
  return (
    <header className="container mx-auto flex items-center justify-between font-serif py-4 md:py-8 mb-8 md:mb-12 xl:mb-16">
      {/* ロゴ（見た目だけ。リンク先は #） */}
      <a
        href="/"
        aria-label="logo"
        className="inline-flex items-center ml-2 lg:ml-0 text-zinc-800 text-md md:text-3xl font-bold gap-2.5"
      >
        誰でもデザイン
      </a>

      <div className="flex items-center gap-4">
        {/* サブコンテンツ ドロップダウン */}
        <div className="relative group">
          <button
            className="text-green-800 hover:text-green-600 text-xs md:text-base tracking-tight md:tracking-normal"
            aria-haspopup="menu"
            aria-expanded="false"
          >
            サブコンテンツ
          </button>
          <ul
            role="menu"
            className="absolute right-0 mt-2 hidden w-60 rounded-lg bg-white p-2 text-sm shadow group-hover:block"
          >
            {MENU.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="block rounded px-3 py-2 text-gray-500 hover:bg-green-50 hover:text-green-800 active:bg-white active:text-green-900"
                  role="menuitem"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 通知アイコン（見た目のみ） */}
        <button
          aria-label="notifications"
          className="relative grid h-10 w-10 place-items-center text-green-800 hover:text-green-700"
        >
          
          {/* ベルの簡易SVG */}
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6.5 9a5.5 5.5 0 0 1 11 0c0 6 2 7 2 7H4.5s2-1 2-7" />
            <path d="M10 19a2 2 0 0 0 4 0" />
          </svg>
        </button>

        {/* ユーザメニュー（丸アイコン + ドロップダウン） */}
        <nav className="text-sm md:text-lg font-semibold items-center mr-2 lg:mr-0">
          <div className="relative group">
            <button
              aria-haspopup="menu"
              aria-expanded="false"
              className="w-10 h-10 rounded-full outline outline-1 outline-green-800 flex items-center justify-center text-green-800 hover:bg-green-800 hover:text-white"
            >
              {/* 人アイコン */}
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21a8 8 0 0 0-16 0" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>

            <ul
              role="menu"
              className="absolute right-0 mt-2 hidden w-52 rounded-lg bg-white p-1 text-sm font-normal shadow group-hover:block"
            >
              {['全てのお気に入り', 'お気に入りリスト', 'ログアウト'].map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="block rounded px-3 py-2 text-gray-500 hover:bg-green-50 hover:text-green-800 active:bg-white active:text-green-900"
                    role="menuitem"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
