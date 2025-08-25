const Quiz: React.FC = () => {
  return <>
    <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <div className="sm:pb-8 lg:pb-12 mt-20">
        <h1 className="font-serif text-gray-600 text-xl mb:text-3xl lg:text-4xl py-12">
          UI・UXクイズ
        </h1>

        <p className="text-gray-600">
          Webデザインを行う上で何かと耳にするUI・UXという言葉。
          <br />
          それにまつわる知識をクイズ形式で学ぶことができます。
        </p>
      </div>
      <div className='container mx-auto grid sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 xl:gap-16 mt-12 md:mt-20 pb-16'>
        <div className="my-12 bg-white flex shadow-lg flex-col rounded-lg border-2 border-green-700">
          <div className="bg-green-700 py-2 text-center font-serif text-sm text-white">問題</div>
          <div className="flex flex-col p-6 pt-8">
            <div className="mx-auto mb-8 px-8 text-center text-gray-600">
              UI・UXとはそれぞれ何の略？
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 text-gray-500">
                テスト
              </div>
            </div>
            <div className="mx-auto flex justify-center py-4">
              <div className="btn btn-sm font-serif font-light bg-green-700 hover:bg-green-600 text-white text-center rounded-lg">
                回答する
              </div>
            </div>

            <div className='text-gray-600'>
              <div className='pb-4 font-serif text-lg'>
                結果
              </div>
              <div className='pb-4'>
                <div className='font-serif text-lg'>答え</div>
              </div>
              <div className='font-serif text-lg'>解説</div>
            </div>
          </div>
        </div>
        <div className="my-12 bg-white flex shadow-lg flex-col rounded-lg border-2 border-green-700">
          <div className="bg-green-700 py-2 text-center font-serif text-sm text-white">問題</div>
          <div className="flex flex-col p-6 pt-8">
            <div className="mx-auto mb-8 px-8 text-center text-gray-600">
              UI・UXとはそれぞれ何の略？
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 text-gray-500">
                テスト
              </div>
            </div>
            <div className="mx-auto flex justify-center py-4">
              <div className="btn btn-sm font-serif font-light bg-green-700 hover:bg-green-600 text-white text-center rounded-lg">
                回答する
              </div>
            </div>

            <div className='text-gray-600'>
              <div className='pb-4 font-serif text-lg'>
                結果
              </div>
              <div className='pb-4'>
                <div className='font-serif text-lg'>答え</div>
              </div>
              <div className='font-serif text-lg'>解説</div>
            </div>
          </div>
        </div>
        <div className="my-12 bg-white flex shadow-lg flex-col rounded-lg border-2 border-green-700">
          <div className="bg-green-700 py-2 text-center font-serif text-sm text-white">問題</div>
          <div className="flex flex-col p-6 pt-8">
            <div className="mx-auto mb-8 px-8 text-center text-gray-600">
              UI・UXとはそれぞれ何の略？
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 text-gray-500">
                テスト
              </div>
            </div>
            <div className="mx-auto flex justify-center py-4">
              <div className="btn btn-sm font-serif font-light bg-green-700 hover:bg-green-600 text-white text-center rounded-lg">
                回答する
              </div>
            </div>

            <div className='text-gray-600'>
              <div className='pb-4 font-serif text-lg'>
                結果
              </div>
              <div className='pb-4'>
                <div className='font-serif text-lg'>答え</div>
              </div>
              <div className='font-serif text-lg'>解説</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
}

export default Quiz;
