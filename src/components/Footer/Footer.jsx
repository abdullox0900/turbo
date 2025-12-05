import logo from '../../../public/assets/logo-icon.svg'


export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-[40px] px-[20px]">
      <div className="max-w-[1136px] mx-auto">
        <div className="flex justify-between max-[1024px]:flex-col gap-[32px] mb-[24px]">
          {/* Logo va tavsif */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-[10px] cursor-pointer mb-[14px]">
              <div className="w-[35px] h-[35px] logo-box-style rounded-[12px] flex items-center justify-center">
                <img src={logo} alt="logo" />
              </div>
              <h1 className="text-white text-[17px] font-regular">Турбо Интернет</h1>
            </div>
            <p className="text-sm text-[#A3A3A3] leading-relaxed">
              Быстрый и безопасный<br />
              сервис для комфортного<br />
              интернета
            </p>
          </div>

          <div className='flex gap-[150px] max-[425px]:gap-[40px] max-[425px]:justify-between'> 
            {/* Поддержка */}
          <div>
            <h3 className="text-white font-light mb-4">Поддержка</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#A3A3A3] font-light hover:text-white transition-colors text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-[#A3A3A3] font-light hover:text-white transition-colors text-sm">
                  Связаться с нами
                </a>
              </li>
            </ul>
          </div>

          {/* Информация */}
          <div>
            <h3 className="text-white font-light mb-4">Информация</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#A3A3A3] font-light hover:text-white transition-colors text-sm">
                  Лицензия
                </a>
              </li>
              <li>
                <a href="#" className="text-[#A3A3A3] font-light hover:text-white transition-colors text-sm">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>
          </div>

          {/* Защищённое соединение */}
          <div>
            <div className="flex items-center gap-2 text-gray-400">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_4202_324)">
                  <path d="M13.3332 8.66664C13.3332 12 10.9998 13.6666 8.2265 14.6333C8.08128 14.6825 7.92353 14.6802 7.77984 14.6266C4.99984 13.6666 2.6665 12 2.6665 8.66664V3.99997C2.6665 3.82316 2.73674 3.65359 2.86177 3.52857C2.98679 3.40355 3.15636 3.33331 3.33317 3.33331C4.6665 3.33331 6.33317 2.53331 7.49317 1.51997C7.63441 1.39931 7.81407 1.33301 7.99984 1.33301C8.1856 1.33301 8.36527 1.39931 8.5065 1.51997C9.67317 2.53997 11.3332 3.33331 12.6665 3.33331C12.8433 3.33331 13.0129 3.40355 13.1379 3.52857C13.2629 3.65359 13.3332 3.82316 13.3332 3.99997V8.66664Z" stroke="#8B5CF6" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_4202_324">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="text-sm text-[#A3A3A3] font-light">Защищённое соединение</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="">
          <p className="text-sm text-[#A3A3A3]">
            © 2025 TurboVPN. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}