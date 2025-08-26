import { Link } from "react-router-dom";

const SignUp: React.FC = () => {
  return <>
    <div className="flex justify-center font-serif">
      <div className="bg-white rounded-lg lg:w-5/12 md:6/12 w-10/12 shadow-3xl mb-16">
        <div className="flex justify-center">
          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <h1 className="font-bold text-center text-2xl mt-12">ユーザー登録</h1>
            <div className="p-12 md:p-18">
                <div className="flex flex-col mb-4 md:mb-6">
                  ユーザー名
                </div>
                <div className="flex flex-col mb-4 md:mb-6">
                  メールアドレス
                </div>
                <div className="flex flex-col mb-4 md:mb-6">
                  パスワード
                </div>
                <div className="flex flex-col mb-6 md:mb-8">
                  パスワード（確認用）
                </div>
                <button className="rounded-full bg-emerald-700 px-4 py-2 text-white hover:bg-emerald-600">
                  登録
                </button>

              <div className='flex flex-col text-center mt-2'>
                <br />
                Googleログイン
                <br />
                <Link to="/login" className="text-gray-400 hover:text-green-800 active:text-green-900">
                  ログインページへ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
}

export default SignUp;
