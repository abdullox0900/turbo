import logo from '../../../public/assets/logo-icon.svg'

export default function Header() {
  return (
    <header className="bg-black py-4 px-6">
      <div className="max-w-[1136px] mx-auto flex items-center justify-between">
        {/* Logo va Brand */}
        <div className="flex items-center gap-[10px] cursor-pointer">
          <div className="w-[35px] h-[35px] logo-box-style rounded-[12px] flex items-center justify-center">
           <img src={logo} alt="logo" />
          </div>
          <h1 className="text-white text-[17px] font-regular">Турбо Интернет</h1>
        </div>

        {/* Купить Button */}
        <a href="#pricing" className="button-style">
          Купить
        </a>
      </div>
    </header>
  );
}
