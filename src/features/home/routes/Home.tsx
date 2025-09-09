import React, { useMemo, useState } from "react";
import baseImg from '@/assets/base.jpg';
import brandingImg from '@/assets/branding.jpg';
import designToolImg from '@/assets/design_tool.jpg';
import lookImg from '@/assets/look.jpg';
import makeImg from '@/assets/make.jpg';
import marketingImg from '@/assets/marketing.jpg';
import moveImg from '@/assets/move.jpg';
import publicImg from '@/assets/public.jpg';
import responsiveImg from '@/assets/responsive.jpg';
import seoImg from '@/assets/seo.jpg';
import topImg from '@/assets/top.jpg';
import uiUxImg from '@/assets/ui_ux.jpg';
import { useQueryCategories } from "@/features/design_tips/hooks/useQueryCategories";

// ---------- Types ----------
type Ask = {
  id: number;
  askDetail: string;
  responses: { id: number; content: string }[];
};

type DesignTip = {
  id: string | number;
  title: string;
  image: string;       // /public 配下のパス（例："/baseImg}）
  href?: string;       // 外部リンク（任意）
  subtitle?: string;   // ちょい補足（任意）
};

type HomeProps = {
  loggedIn?: boolean;
  asks?: Ask[];
  recommendDesignTips?: DesignTip[];
  sortDesignTips?: DesignTip[];
};

// ---------- 小物コンポーネント ----------
function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-brand-brown hover:text-yellow-900"
    >
      {children}
    </a>
  );
}

function DesignTipCard({ tip }: { tip: DesignTip }) {
  return (
    <article className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-zinc-200">
      <div className="h-40 w-full bg-zinc-200">
        <img
          src={tip.image}
          alt={tip.title}
          loading="lazy"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="p-4">
        <h3 className="font-serif text-zinc-700 text-lg">{tip.title}</h3>
        {tip.subtitle && <p className="text-xs text-zinc-500 mt-1">{tip.subtitle}</p>}
        {tip.href && (
          <div className="mt-3">
            <ExternalLink href={tip.href}>外部リンク</ExternalLink>
          </div>
        )}
      </div>
    </article>
  );
}

// ---------- メイン ----------
const Home: React.FC<HomeProps> = ({
  loggedIn = false,
  asks,
  recommendDesignTips,
  sortDesignTips,
}) => {
  // モーダルの開閉
  const [showModal, setShowModal] = useState(false);

  // タブ（0:初心者, 1:脱初心者, 2:運用）
  const [activeTab, setActiveTab] = useState<0 | 1 | 2>(0);

  // モバイルのタグドロップダウン
  const [tagsOpen, setTagsOpen] = useState(false);

  // ---- ダミーデータ（props が無ければ使う） ----
  const fallbackAsks: Ask[] = useMemo(
    () => [
      {
        id: 1,
        askDetail: "Web系のサービスやデザインの作成に関わった経験は？",
        responses: [
          { id: 11, content: "全くない" },
          { id: 12, content: "少しはある" },
        ],
      },
      {
        id: 2,
        askDetail: "デザインする際に重視したいのは？",
        responses: [
          { id: 21, content: "使いやすさ" },
          { id: 22, content: "おしゃれさ" },
        ],
      },
      {
        id: 3,
        askDetail: "学習スタイルは？",
        responses: [
          { id: 31, content: "まずは基本を抑える" },
          { id: 32, content: "手を動かしながら覚える" },
        ],
      },
    ],
    []
  );

  const { data: fallbackTags = [] } = useQueryCategories();

  const fallbackRecommend: DesignTip[] = useMemo(
    () => [
      { id: 1, title: "はじめてのWebデザイン", image: topImg },
      { id: 2, title: "配色の基本10選", image: baseImg },
      { id: 3, title: "Figma入門", image: designToolImg },
    ],
    []
  );

  const fallbackSort: DesignTip[] = useMemo(
    () => [
      { id: "s1", title: "評価の高い記事A", image: publicImg },
      { id: "s2", title: "評価の高い記事B", image: moveImg },
      { id: "s3", title: "評価の高い記事C", image: makeImg },
    ],
    []
  );

  const _asks = asks && asks.length ? asks : fallbackAsks;
  const _recommend = recommendDesignTips && recommendDesignTips.length ? recommendDesignTips : fallbackRecommend;
  const _sort = sortDesignTips && sortDesignTips.length ? sortDesignTips : fallbackSort;

  // （仮）回答フォームの submit は画面更新なしで止める
  const onSubmitPick = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: API 連携時に差し替え
    setShowModal(false);
  };

  return (
    <div className="pb-6 sm:pb-8 lg:pb-12">
      <div className="mx-auto max-w-screen-2xl md:px-8">
        <div className="flex flex-col justify-between gap-6 sm:gap-10 md:flex-row md:gap-16">
          <div className="xl:w-7/12 flex flex-col justify-center lg:py-12 text-left xl:py-24">
            <h1 className="mb-8 font-serif text-xl text-gray-600 md:mb-12 lg:text-5xl">
              ここから始まるデザインがある。
            </h1>

            <p className="mb-8 text-sm leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 lg:text-lg">
              誰でもデザインは、Web系デザイン初学者向けの情報検索・閲覧サービスです。
            </p>

            <button
              className="mb-8 self-start text-left font-serif text-brand-brown hover:text-yellow-900 md:mb-12 md:text-xl"
              onClick={() => setShowModal(true)}
            >
              情報をピックアップする
            </button>

            {showModal && (
              <div
                className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4"
                role="dialog"
                aria-modal="true"
              >
                <div className="relative w-full max-w-3xl rounded-lg bg-white p-6 shadow-lg">
                  <button
                    onClick={() => setShowModal(false)}
                    className="btn btn-sm btn-circle bg-green-800 text-white hover:bg-green-700 absolute right-2 top-2 rounded-full px-2 py-1"
                    aria-label="閉じる"
                  >
                    ✕
                  </button>

                  <div className="mt-12 pb-6 sm:pb-8 lg:pb-12">
                    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                      <p className="mb-16 text-gray-600">
                        質問に対する回答を元に情報をピックアップします。<br />
                      </p>

                      {/* 回答フォーム（見た目） */}
                      <form onSubmit={onSubmitPick}>
                        {_asks.map((ask) => (
                          <div className="mb-10" key={ask.id}>
                            <div className="font-serif xl:text-lg">{ask.askDetail}</div>
                            {ask.responses.map((res) => (
                              <label key={res.id} className="my-2 block">
                                <input
                                  type="radio"
                                  name={`responses_${ask.id}`}
                                  value={res.id}
                                  className="mr-2 align-middle"
                                  required
                                />
                                <span className="align-middle">{res.content}</span>
                              </label>
                            ))}
                          </div>
                        ))}

                        <button
                          type="submit"
                          className="btn btn-sm rounded-full bg-green-700 px-4 py-2 font-serif font-light text-white hover:bg-green-600"
                        >
                          回答する
                        </button>
                      </form>

                      {/* （ダミー）回答結果の表示枠 */}
                      <div className="container mx-auto gap-8 pt-8 md:gap-12 xl:gap-16">
                        {/* 実装時：回答コードでフィルタしてマップ */}
                        <div className="pt-4">
                          <DesignTipCard
                            tip={{ id: "ans1", title: "あなたへのピックアップ例", image: "/topImg.jpg" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 背景クリックで閉じる */}
                <button className="absolute inset-0 -z-10 h-full w-full" onClick={() => setShowModal(false)} />
              </div>
            )}

            {/* 検索フォーム（見た目だけ） */}
            <div className="font-serif mb-8 flex flex-row items-center justify-start gap-2 lg:gap-8 md:mb-0">
              <input
                type="text"
                placeholder="タイトル検索"
                className="w-64 rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button className="rounded-lg bg-emerald-700 px-4 py-2 text-white hover:bg-emerald-600">
                検索
              </button>
            </div>
          </div>

          <div className="xl:w-5/12 h-48 rounded-lg lg:h-auto">
            <img src={topImg} alt="トップ" />
          </div>
        </div>
      </div>

      {/* タグ（PC: 横並び / SP: ドロップダウン） */}
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

      <div className="xl:hidden">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="pt-36">
            <button
              className="btn btn-outline outline-green-800 text-green-800 hover:bg-green-800 hover:text-white font-serif rounded-lg px-4 py-2"
              onClick={() => setTagsOpen((x) => !x)}
            >
              情報ジャンル
            </button>
            {tagsOpen && (
              <ul className="mt-2 w-52 rounded-lg bg-white p-2 text-sm font-normal shadow">
                {fallbackTags.map((tag) => (
                  <li key={tag.name}>
                    <a
                      href="#"
                      className="m-2 block font-serif text-base text-gray-500 hover:text-emerald-600"
                      onClick={(e) => e.preventDefault()}
                    >
                      {tag.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* おすすめセクション */}
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="pt-16 text-center font-serif text-brand-brown text-lg md:pt-36 md:text-xl lg:text-3xl">
          あなたにおすすめの情報
        </div>

        {loggedIn ? (
          _recommend && _recommend.length ? (
            <div className="container mx-auto mt-12 grid gap-8 pb-16 pt-3 sm:grid-cols-2 md:mt-20 md:gap-12 xl:grid-cols-3 xl:gap-16">
              {_recommend.slice(0, 3).map((tip) => (
                <DesignTipCard tip={tip} key={tip.id} />
              ))}
            </div>
          ) : (
            <div className="pt-8 pb-20 text-center font-serif text-gray-600">
              お気に入り登録された情報がありません。情報をお気に入りしていただくと、<br />
              そちらをもとにあなたにおすすめの情報を表示します。
            </div>
          )
        ) : (
          <>
            <div className="pt-8 pb-20 text-center font-serif text-gray-600">
              ログイン後、あなたがお気に入りした情報をもとにおすすめの情報が表示されます。
            </div>
          </>
        )}

        {/* 高評価の情報 */}
        <div className="pt-16 text-center font-serif text-brand-brown text-lg md:pt-36 md:text-xl lg:text-3xl">
          高評価の情報
        </div>
        <div className="container mx-auto mt-12 grid gap-8 pb-16 pt-3 sm:grid-cols-2 md:mt-20 md:gap-12 xl:grid-cols-3 xl:gap-16">
          {_sort.slice(0, 3).map((tip) => (
            <DesignTipCard tip={tip} key={tip.id} />
          ))}
        </div>

        {/* タブ切り替え（初心者 / 脱初心者 / 運用） */}
        <div>
          <div className="flex justify-around pt-20">
            {["初心者はこちら", "脱・初心者に向けて", "サービスの運用について"].map((label, idx) => (
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

          {/* コンテンツ：初心者 */}
          {activeTab === 0 && (
            <section>
              <div className="mt-20 pb-6 sm:pb-8 lg:pb-12">
                <div className="py-12 font-serif text-xl text-gray-600 md:text-3xl lg:text-4xl">
                  デザインって何から始めたらいいの？
                </div>
                <p className="mb-8 max-w-md text-gray-600">
                  そんなあなたに向けて、まず始めに知っておきたいこと
                  <br />
                  やっておきたいことをまとめました。
                  <br />
                  まずはここから始めてみましょう。
                </p>
              </div>

              {/* 4本の紹介セクション（基礎 / 手を動かす / 作ってみる / 権利） */}
              <div className="py-6 sm:py-8 lg:py-12">
                <div className="md:h-80 flex flex-col overflow-hidden rounded-lg bg-white sm:flex-row">
                  <div className="order-first h-48 w-full bg-gray-300 sm:order-none sm:w-1/2 lg:w-2/5 md:h-auto">
                    <img src={baseImg} loading="lazy" className="h-full w-full object-cover object-center" />
                  </div>
                  <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
                    <div className="mb-4 font-serif text-xl text-gray-600 lg:text-2xl">基本を知る</div>
                    <p className="mb-8 text-xs text-gray-600 lg:text-base">
                      何事も基本から。<br />
                      chot.designではデザインの基本的な考え方からHTML・CSSのコーディング、デザインツールの使い方まで
                      <br />
                      幅広く学ぶことができます。まずはこちらのサービスでwebデザインの基本に触れてみましょう。
                      <br />
                    </p>
                    <div className="font-serif text-brand-brown hover:text-yellow-900 lg:text-xl">
                      <ExternalLink href="https://chot.design/">・chot.design</ExternalLink>
                    </div>
                    <br />
                  </div>
                </div>
              </div>

              <div className="py-6 lg:py-20">
                <div className="md:h-80 flex flex-col overflow-hidden rounded-lg bg-white sm:flex-row">
                  <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
                    <div className="mb-4 font-serif text-xl text-gray-600 lg:text-2xl">手を動かす</div>
                    <p className="mb-8 text-xs text-gray-600 lg:text-base">
                      Webデザインに必須のコーディングついて、もう少し具体的に学んでいきましょう。
                      <br />
                      以下のサービスがとても役に立ちます。
                      <br />
                      実際に手を動かしながら理解を深めていきましょう。
                      <br />
                    </p>
                    <div className="flex flex-col font-serif">
                      <div className="flex items-end">
                        <ExternalLink href="https://dotinstall.com/">
                          ・ドットインストール
                        </ExternalLink>
                        <p className="text-gray-400">&nbsp; #動画で</p>
                      </div>
                      <div className="my-2 flex items-end">
                        <ExternalLink href="https://saruwakakun.com/">・サルワカ</ExternalLink>
                        <p className="text-gray-400">&nbsp; #テキストで</p>
                      </div>
                      <div className="flex items-end">
                        <ExternalLink href="https://prog-8.com/">・Progate</ExternalLink>
                        <p className="text-gray-400">&nbsp; #手軽に</p>
                      </div>
                    </div>
                  </div>
                  <div className="order-first h-30 w-full bg-gray-300 sm:order-none sm:w-1/2 lg:w-2/5 md:h-auto">
                    <img src={moveImg} loading="lazy" className="h-full w-full object-cover object-center" />
                  </div>
                </div>
              </div>

              <div className="pt-6 pb-12 lg:py-20">
                <div className="md:h-80 flex flex-col overflow-hidden rounded-lg bg-white sm:flex-row">
                  <div className="order-first h-30 w-full bg-gray-300 sm:order-none sm:w-1/2 lg:w-2/5 md:h-auto">
                    <img src={makeImg} loading="lazy" className="h-full w-full object-cover object-center" />
                  </div>
                  <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
                    <div className="mb-4 font-serif text-xl text-gray-600 lg:text-2xl">作ってみる</div>
                    <p className="mb-8 text-xs text-gray-600 lg:text-base">
                      学んだことは実践してみましょう。以下の書籍が非常に役に立ちます。
                      <br />
                      丁寧な解説をもとにおしゃれなサイトが作れるので、最初の一冊に最適です。
                      <br />
                      学んでいてとても楽しくなりますよ。
                      <br />
                    </p>
                    <div className="font-serif text-brand-brown hover:text-yellow-900 lg:text-xl">
                      <ExternalLink href="https://www.amazon.co.jp/1%E5%86%8A%E3%81%A7%E3%81%99%E3%81%B9%E3%81%A6%E8%BA%AB%E3%81%AB%E3%81%A4%E3%81%8FHTML-CSS%E3%81%A8Web%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E5%85%A5%E9%96%80%E8%AC%9B%E5%BA%A7-Mana/dp/4797398892">
                        ・1冊ですべて身につくHTML&CSSとWebデザイン入門講座
                      </ExternalLink>
                    </div>
                    <br />
                  </div>
                </div>
              </div>

              <div className="py-6 lg:py-20">
                <div className="md:h-80 flex flex-col overflow-hidden rounded-lg bg-white sm:flex-row">
                  <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
                    <div className="mb-4 font-serif text-xl text-gray-600 lg:text-2xl">※権利の確認は忘れずに※</div>
                    <p className="mb-8 text-xs text-gray-600 lg:text-base">
                      Webデザインに、フリー素材やテンプレートを利用する際は著作権等に注意しましょう。
                      <br />
                      トラブルを防ぐためにも早めに学んでおくに越したことはありません。
                      <br />
                      以下ページなどを参考に勉強しましょう。
                      <br />
                    </p>
                    <div className="flex flex-col font-serif text-brand-brown lg:text-xl">
                      <ExternalLink href="https://japan-design.jp/design/0068/">
                        ・WEBデザイナー必見！著作権を侵害しないために注意すべきこと！
                      </ExternalLink>
                      <ExternalLink
                        href="https://www.mp-creative.jp/columns/764"
                      >
                        ・無料で自由に使えるは間違い！フリー素材を使うときの注意点を教えます
                      </ExternalLink>
                    </div>
                  </div>
                  <div className="order-first h-30 w-full bg-gray-300 sm:order-none sm:w-1/2 lg:w-2/5 md:h-auto">
                    <img src={publicImg} loading="lazy" className="h-full w-full object-cover object-center" />
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* コンテンツ：脱初心者 */}
          {activeTab === 1 && (
            <section>
              <div className="mt-20 pb-6 sm:pb-8 lg:pb-12">
                <div className="py-12 font-serif text-xl text-gray-600 md:text-3xl lg:text-4xl">
                  脱・初心者に向けて
                </div>
                <p className="mb-8 text-gray-600">
                  初心者からステップアップするために知っておきたいことをまとめました。<br />
                  より良いデザインを作るための知見を得て、初心者の壁を越えていきましょう。
                </p>
              </div>

              <div className="py-6 lg:py-20">
                <div className="md:h-80 flex flex-col overflow-hidden rounded-lg bg-white sm:flex-row">
                  <div className="order-first h-30 w-full bg-gray-300 sm:order-none sm:w-1/2 lg:w-2/5 md:h-auto">
                    <img src={designToolImg} loading="lazy" className="h-full w-full object-cover object-center" />
                  </div>
                  <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
                    <div className="mb-4 font-serif text-xl text-gray-600 lg:text-2xl">
                      デザインツールについて知る
                    </div>
                    <p className="mb-8 text-xs text-gray-600 lg:text-base">
                      デザインツールはWebデザインの強力な武器になります。
                      <br />
                      まずはどんなツールがあるか知ることから始めてみましょう。
                      <br />
                      色々と触れてみることで自分に合うものが見つかるはずです。
                      <br />
                    </p>
                    <div className="flex flex-col font-serif text-brand-brown lg:text-xl">
                      <ExternalLink href="https://www.sejuku.net/blog/105585">
                        ・無料で使えるWebデザインツールおすすめ8選【2023年版】
                      </ExternalLink>
                      <ExternalLink href="https://kredo.jp/media/web-design-tool/">
                        ・おすすめのWebデザインツール特集【初心者でも使える！】
                      </ExternalLink>
                    </div>
                    <br />
                  </div>
                </div>
              </div>

              <div className="py-6 lg:py-20">
                <div className="md:h-80 flex flex-col overflow-hidden rounded-lg bg-white sm:flex-row">
                  <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
                    <div className="mb-4 font-serif text-xl text-gray-600 lg:text-2xl">
                      レスポンシブ対応について知る
                    </div>
                    <p className="mb-8 text-xs text-gray-600 lg:text-base">
                      レスポンシブ対応とはデバイスの画面幅に合わせてレイアウトを変えること。
                      <br />
                      あらゆるデバイスからネットに繋がれる現代には必須のスキルです。
                      <br />
                      作り方をしっかり学んでいきましょう。
                      <br />
                    </p>
                    <div className="flex flex-col font-serif text-brand-brown lg:text-xl">
                      <ExternalLink href="https://www.sejuku.net/blog/99964">
                        ・CSSでスマホ対応！レスポンシブサイトの作り方と初心者向けQ&A
                      </ExternalLink>
                      <ExternalLink href="https://www.kagoya.jp/howto/it-glossary/web/responsive/">
                        ・【入門】レスポンシブWebデザインとは？概要と作り方を丁寧解説
                      </ExternalLink>
                    </div>
                  </div>
                  <div className="order-first h-30 w-full bg-gray-300 sm:order-none sm:w-1/2 lg:w-2/5 md:h-auto">
                    <img src={responsiveImg} loading="lazy" className="h-full w-full object-cover object-center" />
                  </div>
                </div>
              </div>

              <div className="pt-6 pb-12 lg:py-20">
                <div className="md:h-80 flex flex-col overflow-hidden rounded-lg bg-white sm:flex-row">
                  <div className="order-first h-30 w-full bg-gray-300 sm:order-none sm:w-1/2 lg:w-2/5 md:h-auto">
                    <img src={lookImg} loading="lazy" className="h-full w-full object-cover object-center" />
                  </div>
                  <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
                    <div className="mb-4 font-serif text-xl text-gray-600 lg:text-2xl">いいデザインを見る</div>
                    <p className="mb-8 text-xs text-gray-600 lg:text-base">
                      いいデザインを見ることも非常に勉強になります。
                      <br />
                      自分のデザインに活かせる部分はないか
                      <br />
                      考えながら見ることで視野も広がっていくでしょう。
                      <br />
                    </p>
                    <div className="flex flex-col font-serif text-brand-brown lg:text-xl">
                      <ExternalLink href="https://webdesignclip.com/">
                        ・WebDesignClip｜Webサイト制作の参考になる日本のWebデザインリンク集
                      </ExternalLink>
                      <ExternalLink href="https://io3000.com/">
                        ・I/O 3000｜Webデザインギャラリー
                      </ExternalLink>
                    </div>
                    <br />
                  </div>
                </div>
              </div>

              <div className="py-6 lg:py-20">
                <div className="md:h-80 flex flex-col overflow-hidden rounded-lg bg-white sm:flex-row">
                  <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
                    <div className="mb-4 font-serif text-xl text-gray-600 lg:text-2xl">
                      UI/UXについて知識を深める
                    </div>
                    <p className="mb-8 text-xs text-gray-600 lg:text-base">
                      UI/UXとは何なのか？それらをよくするにはどうしたらいいのか？
                      <br />
                      これを考えるとデザインの質もグッと上がるはず。
                      <br />
                      まずはUI/UXについて知識から深めていきましょう。
                      <br />
                    </p>
                    <div className="flex flex-col font-serif text-brand-brown lg:text-xl">
                      <ExternalLink href="https://shiftasia.com/ja/column/ui-ux%E3%81%A8%E3%81%AF%E4%BD%95%E3%81%8B/">
                        ・UI/UXとは｜UIとUXそれぞれの意味や違い、改善方法についてわかりやすく解説
                      </ExternalLink>
                      <ExternalLink href="https://udemy.benesse.co.jp/design/web-design/ui-ux.html">
                        ・UIとUXの違いとは？Webデザイナー必見「UI/UXデザイン」をわかりやすく解説
                      </ExternalLink>
                    </div>
                  </div>
                  <div className="order-first h-30 w-full bg-gray-300 sm:order-none sm:w-1/2 lg:w-2/5 md:h-auto">
                    <img src={uiUxImg} loading="lazy" className="h-full w-full object-cover object-center" />
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* コンテンツ：運用 */}
          {activeTab === 2 && (
            <section>
              <div className="mt-20 pb-6 sm:pb-8 lg:pb-12">
                <div className="py-12 font-serif text-xl text-gray-600 md:text-3xl lg:text-4xl">
                  サービスの運用について
                </div>
                <p className="mb-8 text-gray-600">
                  作成したサービスは多くの人に知ってもらって初めて価値が生まれます。
                  <br />
                  サービスの拡散や運用についての情報にも目を通しておきましょう。
                </p>
              </div>

              <div className="py-6 lg:py-20">
                <div className="md:h-80 flex flex-col overflow-hidden rounded-lg bg-white sm:flex-row">
                  <div className="order-first h-30 w-full bg-gray-300 sm:order-none sm:w-1/2 lg:w-2/5 md:h-auto">
                    <img src={seoImg} loading="lazy" className="h-full w-full object-cover object-center" />
                  </div>
                  <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
                    <div className="mb-4 font-serif text-xl text-gray-600 lg:text-2xl">SEO対策</div>
                    <p className="mb-8 text-xs text-gray-600 lg:text-base">
                      SEOとはサービスが検索で見つかりやすくするための施策のことです。
                      <br />
                      サービスの認知度向上のために必要なことの一つなので
                      <br />
                      以下の情報を参考にまずは概要を掴んでいきましょう。
                      <br />
                    </p>
                    <div className="flex flex-col font-serif text-brand-brown lg:text-xl">
                      <ExternalLink href="https://www.xserver.ne.jp/bizhp/homepage-seo/">
                        ・SEO対策とは？ホームページ初心者が制作時に意識すべきポイント6つ
                      </ExternalLink>
                      <ExternalLink href="https://satori.marketing/marketing-blog/seo-measures/">
                        ・SEOとは？初心者がすぐやるべき基本対策5つをわかりやすく解説】
                      </ExternalLink>
                    </div>
                    <br />
                  </div>
                </div>
              </div>

              <div className="py-6 lg:py-20">
                <div className="md:h-80 flex flex-col overflow-hidden rounded-lg bg-white sm:flex-row">
                  <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
                    <div className="mb-4 font-serif text-xl text-gray-600 lg:text-2xl">Webマーケティング</div>
                    <p className="mb-8 text-xs text-gray-600 lg:text-base">
                      Webマーケティングとは、Webサービスを用いて行われるマーケティング活動のこと。
                      <br />
                      Webに関わる人なら誰もが知っておいて損はないことなので基本だけでも抑えておきましょう。
                      <br />
                    </p>
                    <div className="flex flex-col font-serif text-brand-brown lg:text-xl">
                      <ExternalLink href="https://mieru-ca.com/blog/web_marketing/">
                        ・Webマーケティングとは？【初心者向け】基礎知識と成果の上げ方
                      </ExternalLink>
                      <ExternalLink href="https://seolaboratory.jp/29896/">
                        ・Webマーケティングとは？基礎知識や施策など初心者にわかりやすく解説！
                      </ExternalLink>
                    </div>
                  </div>
                  <div className="order-first h-30 w-full bg-gray-300 sm:order-none sm:w-1/2 lg:w-2/5 md:h-auto">
                    <img src={marketingImg} loading="lazy" className="h-full w-full object-cover object-center" />
                  </div>
                </div>
              </div>

              <div className="pt-6 pb-12 lg:py-20">
                <div className="md:h-80 flex flex-col overflow-hidden rounded-lg bg-white sm:flex-row">
                  <div className="order-first h-30 w-full bg-gray-300 sm:order-none sm:w-1/2 lg:w-2/5 md:h-auto">
                    <img src={brandingImg} loading="lazy" className="h-full w-full object-cover object-center" />
                  </div>
                  <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
                    <div className="mb-4 font-serif text-xl text-gray-600 lg:text-2xl">サービスのブランディング</div>
                    <p className="mb-8 text-xs text-gray-600 lg:text-base">
                      サービスのブランディングにはさまざまなメリットがあります。
                      <br />
                      発展的な内容になりますが、自分のサービスを好きになってもらうためにも
                      <br />
                      ブランディングに対する意識も持っておくようにしましょう。
                      <br />
                    </p>
                    <div className="flex flex-col font-serif text-brand-brown lg:text-xl">
                      <ExternalLink href="https://trasp-inc.com/blog/marketing/branding/web-branding/">
                        ・これだけ読めば大丈夫！Webブランディングの基本から実践4ステップ
                      </ExternalLink>
                      <ExternalLink href="https://re-v.co.jp/webmali/2020/06/23/beginner-branding/">
                        ・初心者向け！ブランディングをザックリ理解しよう
                      </ExternalLink>
                    </div>
                    <br />
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
