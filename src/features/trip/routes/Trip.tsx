const Trip: React.FC = () => {
  return <>
    <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <div className="sm:pb-8 lg:pb-12 mt-20">
        <h1 className="font-serif text-gray-600 text-xl mb:text-3xl lg:text-4xl py-12">
          Design Trip
        </h1>

        <p className="text-gray-600">
          世の中には色々なデザインがあります。
          <br />
          いいデザインを見つける旅に出てみましょう！
          <br />
          <br />
          ピンをクリックすると表示される地域名から
          <br />
          地域毎のWebサイトのリンク集にアクセスできます。
        </p>
      </div>
    </div>
  </>;
}

export default Trip;
