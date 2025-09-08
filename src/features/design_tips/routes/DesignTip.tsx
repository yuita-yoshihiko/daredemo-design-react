import { useMemo, useState } from "react";
import { useQueryDesignTips } from "../hooks/useQueryDesignTips";

const DesignTip: React.FC = () => {
  const fallbackTags = useMemo(
    () => ["配色", "タイポグラフィ", "レイアウト", "UI/UX", "SEO", "マーケ"],
    []
  );
  const [activeTab, setActiveTab] = useState<0 | 1 | 2>(0);
  const { data: designTips = [] } = useQueryDesignTips();

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
    <div className="container mx-auto mt-8 md:mt-20 pb-16">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 xl:gap-16">
        {designTips
          ?.filter((tip) => {
            if (activeTab === 0) return tip.media === "Webサイト";
            if (activeTab === 1) return tip.media === "書籍";
            if (activeTab === 2) return tip.media === "動画";
            return false;
          })
          .map((tip) => (
            <div
              key={tip.title}
              className="my-12 bg-white flex shadow-lg flex-col rounded-lg border-2 border-green-700"
            >
              <div className="bg-green-700 py-2 text-center font-serif text-sm text-white">
                {tip.media === "web"
                  ? "Webサイト"
                  : tip.media === "book"
                  ? "書 籍"
                  : "動 画"}
              </div>
              <div className="flex flex-col p-6 pt-8">
                <div className="text-brand-brown text-xl font-serif hover:text-yellow-900 pt-4">
                  {tip.title}
                </div>
                <div className="mx-auto mb-8 px-8 text-center text-gray-600">
                  {tip.guidance}
                </div>
                <div className="mx-auto flex justify-center py-4">
                  <a
                    href={tip.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm font-serif font-light bg-green-700 hover:bg-green-600 text-white text-center rounded-lg"
                  >
                    詳細を見る
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  </>;
}

export default DesignTip;
