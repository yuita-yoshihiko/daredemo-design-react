const Color: React.FC = () => {
  return <>
    <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <div className="sm:pb-8 lg:pb-12 mt-20">
        <h1 className="font-serif text-gray-600 text-xl mb:text-3xl lg:text-4xl py-12">
          カラー抽出
        </h1>

        <p className="text-gray-600">
          お持ちの写真や画像に多く使われている色とそのカラーコード、RGB値を抽出します。
          <br />
          この写真の中にある色は何色だろう？  この画像みたいな雰囲気のデザインを作りたい！
          <br />
          そんなときに色の特定や、配色のヒントを得るためにお使いください。
        </p>
      </div>
      <div className='text-gray-600'>条件：jpeg(jpg)またはpng形式で5MB以下</div>
      <div className='flex'>
          <div className='flex gap-1 font-serif'>
            <div className='flex flex-col'>
                <div className="error-message">
                    <p className='text-red-500'>ほげ</p>
                </div>
            </div>
            <div className="btn bg-green-700 hover:bg-green-600 text-white font-serif rounded-lg">
              カラー抽出を行う
            </div>
          </div>
      </div>
      <hr className='my-28'></hr>
      <p className="text-gray-600">
        下のフォームから、画像を検索  →  画像を保存  →  保存した画像を選択してカラー抽出<br />
        以上の手順でも機能をお使いいただけます。<br />
        出典元：https://pixabay.com/ja/
      </p>
      <div className='container mx-auto font-serif mb-12'>
        画像を検索
      </div>
    </div>
  </>;
}

export default Color;
