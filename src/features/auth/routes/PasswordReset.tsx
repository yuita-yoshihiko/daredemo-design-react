const PasswordReset: React.FC = () => {
  return <>
    <div className="flex justify-center font-serif">
      <div className="bg-white rounded-lg lg:w-5/12 md:6/12 w-10/12 shadow-3xl mb-16">
        <div className="flex justify-center">
          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <h1 className="font-bold text-center text-2xl mt-12">パスワードリセット申請</h1>
            <div className="p-12 md:p-18">
              <p>
                パスワード再設定用のメールを送信いたします。<br />
                本サービスに登録されているメールアドレスを<br />
                入力して下さい。
              </p>
              <button className="rounded-full bg-emerald-700 px-4 py-2 text-white hover:bg-emerald-600">
                送信
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
}

export default PasswordReset;
