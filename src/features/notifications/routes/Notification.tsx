const Notification: React.FC = () => {
  return <>
    <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <div className="sm:pb-8 lg:pb-12 mt-20">
        <h1 className="font-serif text-gray-600 text-xl mb:text-3xl lg:text-4xl py-12">
          新着情報通知
        </h1>

        <p className="text-gray-600">
          新しい情報が追加された際はこちらに通知します。
        </p>
      </div>
    </div>
  </>;
}

export default Notification;
