import trend1Img from '@/assets/trend1.webp';
import trend2Img from '@/assets/trend2.webp';
import trend3Img from '@/assets/trend3.jpg';
import gallery1Img from '@/assets/gallery1.jpg';
import gallery2Img from '@/assets/gallery2.jpg';
import gallery3Img from '@/assets/gallery3.jpg';

const Trend: React.FC = () => {
  return <>
    <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <div className="sm:pb-8 lg:pb-12 mt-20">
        <h1 className="font-serif text-gray-600 text-xl mb:text-3xl lg:text-4xl py-12">
          トレンド情報
        </h1>

        <p className="text-gray-600">
          日々移り変わるトレンドを掴むこともデザインを学ぶ上で重要なことです。
          <br />
          新しい情報に目を通す習慣を付けていきましょう。
        </p>
      </div>
      <div className="sm:pb-8 lg:pb-12 mt-20">
        <div className='font-serif text-gray-600 text-lg mb:text-2xl lg:text-3xl py-12'>情報</div>
        <p className="text-gray-600">
          Webデザインに関する新着の記事などの文字情報を掲載しています。<br />
        </p>

        <div className='container mx-auto flex flex-row grid sm:grid-cols-2 xl:grid-cols-3 mt-8 md:mt-20 pb-16 gap-8 md:gap-12 xl:gap-16'>
          <div className="bg-white rounded-lg shadow-lg p-4 lg:p-5">
            <img src={trend1Img} loading="lazy" className="w-96 h-64 object-cover mx-auto" />
            <div className="text-brand-brown text-xl font-serif hover:text-yellow-900 pt-4">
              テスト記事タイトル
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 lg:p-5">
            <img src={trend2Img} loading="lazy" className="w-96 h-64 object-cover mx-auto" />
            <div className="text-brand-brown text-xl font-serif hover:text-yellow-900 pt-4">
              テスト記事タイトル
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 lg:p-5">
            <img src={trend3Img} loading="lazy" className="w-96 h-64 object-cover mx-auto" />
            <div className="text-brand-brown text-xl font-serif hover:text-yellow-900 pt-4">
              テスト記事タイトル
            </div>
          </div>
        </div>
      </div>

      <div className="sm:pb-8 lg:pb-12 mt-20">
        <div className='font-serif text-gray-600 text-lg mb:text-2xl lg:text-3xl py-12'>ギャラリー</div>
        <p className="text-gray-600">
          デザインのお手本になるモダンなWebサイトを日々更新しながら掲載しています。<br />
        </p>

        <div className='container mx-auto flex flex-row grid sm:grid-cols-2 xl:grid-cols-3 mt-8 md:mt-20 pb-16 gap-8 md:gap-12 xl:gap-16'>
          <div className="bg-white rounded-lg shadow-lg p-4 lg:p-5">
            <img src={gallery1Img} loading="lazy" className="w-96 h-64 object-cover mx-auto" />
            <div className="text-brand-brown text-xl font-serif hover:text-yellow-900 pt-4">
              テスト記事タイトル
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 lg:p-5">
            <img src={gallery2Img} loading="lazy" className="w-96 h-64 object-cover mx-auto" />
            <div className="text-brand-brown text-xl font-serif hover:text-yellow-900 pt-4">
              テスト記事タイトル
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 lg:p-5">
            <img src={gallery3Img} loading="lazy" className="w-96 h-64 object-cover mx-auto" />
            <div className="text-brand-brown text-xl font-serif hover:text-yellow-900 pt-4">
              テスト記事タイトル
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
}

export default Trend;
