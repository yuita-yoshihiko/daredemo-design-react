const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-700">
      <div className="font-serif text-xs flex justify-center md:grid-cols-4 lg:grid-cols-6 gap-12 lg:gap-8 pt-10 lg:pt-12 mb-8">
        <a
          href="#"
          className="text-gray-100 font-bold mb-4"
        >
          利用規約
        </a>
        <a
          href="#"
          className="text-gray-100 font-bold mb-4"
        >
          プライバシーポリシー
        </a>
        <a
          href="#"
          className="text-gray-100 font-bold mb-4"
        >
          お問い合せ
        </a>
      </div>
      <div className="font-serif text-gray-400 text-sm text-center border-t border-gray-500 py-8">© 2025 誰でもデザイン -anyone design-
      </div>
    </footer>
  );
};

export default Footer;
