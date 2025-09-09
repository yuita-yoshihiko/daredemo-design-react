import { useState } from "react";
import { useQueryDesignTips } from "../hooks/useQueryDesignTips";
import { useQueryCategories } from "../hooks/useQueryCategories";
import { GoHeart } from "react-icons/go";

const DesignTip: React.FC = () => {
  const { data: fallbackTags = [] } = useQueryCategories();
  const [activeTab, setActiveTab] = useState<0 | 1 | 2>(0);
  const { data: designTips = [] } = useQueryDesignTips();

  return <>
    <div className="my-12 hidden bg-zinc-100 shadow xl:block">
      <hr />
      <div className="container mx-auto flex">
        {fallbackTags.map((tag) => (
          <a
            key={tag.name}
            href="#"
            className="m-4 text-base font-serif text-gray-500 hover:text-emerald-600"
            onClick={(e) => e.preventDefault()}
          >
            {tag.name}
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
              className="my-12 bg-white flex shadow-lg flex-col rounded-lg"
            >
              <div className="flex flex-col p-6 pt-8">
                <a
                  href={tip.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-brown text-xl font-serif hover:text-yellow-900 pt-4"
                >
                  {tip.title}
                </a>
                <div className="mx-auto mb-8 px-8 text-center text-gray-600">
                  {tip.guidance}
                </div>
                <div className="my-2 flex place-content-between">
                  <div className='flex gap-1 md:gap-3'>
                    <div className="rounded-lg border-none text-slate-50 text-xs md:text-sm bg-gradient-to-r from-emerald-600 to-emerald-700 font-serif">
                      {tip.categories.map((cat) => cat.name).join(", ")}
                    </div>
                  </div>
                  <div className='flex gap-1 md:gap-2'>
                    <div className='container'>
                      <div className='flex items-center text-gray-300'>
                        <GoHeart />
                        お気に入り
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-2 flex place-content-between">
                  <div className="flex text-sm gap-1 text-gray-500">評価 :
                    <span className="star-rating">
                      <span className="star-rating-front">★★★★★</span>
                      <span className="star-rating-back">★★★★★</span>
                    </span> 
                    <div>〇〇点</div>
                  </div>
                  <div className="text-right text-gray-400 hover:bg-amber-100 rounded-lg">
                    <label className="container text-gray-400 hover:bg-amber-100 rounded-lg flex items-center text-sm">
                      <div>評価する</div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  </>;
}

export default DesignTip;
