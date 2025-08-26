import { Link } from "react-router-dom";

const Login: React.FC = () => {
  return <>
    <div className="flex justify-center font-serif">
      <div className="bg-white rounded-lg lg:w-5/12 md:6/12 w-10/12 shadow-3xl mb-16">
        <div className="flex justify-center">
          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <h1 className="font-bold text-center text-2xl mt-12">ログイン</h1>
            <div className="p-12 md:p-18">
                <div className="flex flex-col mb-4 md:mb-6">
                  メールアドレス
                </div>
                <div className="flex flex-col mb-4 md:mb-6">
                  パスワード
                </div>
                <button className="rounded-full bg-emerald-700 px-4 py-2 text-white hover:bg-emerald-600">
                  ログイン
                </button>

              <div className='flex flex-col text-center mt-2'>
                <br />
                Googleログイン
                <br />
                <Link to="/sign_up" className="text-gray-400 hover:text-green-800 active:text-green-900">
                  ユーザー登録ページへ
                </Link>
                <br />
                <Link to="/password_reset" className="text-gray-400 hover:text-green-800 active:text-green-900">
                  パスワードをお忘れの方はこちら
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
}

export default Login;
