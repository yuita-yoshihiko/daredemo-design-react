import { useMemo, useState } from "react";

const DesignTip: React.FC = () => {
  const fallbackTags = useMemo(
    () => ["配色", "タイポグラフィ", "レイアウト", "UI/UX", "SEO", "マーケ"],
    []
  );
  const [activeTab, setActiveTab] = useState<0 | 1 | 2>(0);
  return <>
    <div className="my-12 hidden bg-zinc-100 shadow xl:block">
      <hr />
      <div className="container mx-auto flex">
        {fallbackTags.map((tag) => (
          <a
            key={tag}
            href="#"
            className="m-4 text-base font-serif text-gray-500 hover:text-emerald-600"
            onClick={(e) => e.preventDefault()}
          >
            {tag}
          </a>
        ))}
      </div>
      <hr />
    </div>
    <div className="flex justify-around pt-20">
      {["Webサイト", "書 籍", "動 画"].map((label, idx) => (
        <button
          key={label}
          className={`tab rounded-lg font-serif md:text-2xl ${
            activeTab === idx
              ? "is-active mb-4 text-brand-brown bg-white shadow-md"
              : "not-active mb-4 text-gray-500 hover:text-brand-brown"
          }`}
          aria-current={activeTab === idx ? "page" : undefined}
          onClick={() => setActiveTab(idx as 0 | 1 | 2)}
        >
          {label}
        </button>
      ))}
    </div>
  </>;
}

export default DesignTip;
