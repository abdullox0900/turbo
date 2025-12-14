import faqtCenter from '../../../public/assets/faqt-center.svg'
import wifi from '../../../public/assets/wifi-icon.svg'
import secur from '../../../public/assets/secur-icon.svg'
import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(1); 

  const faqs = [
    {
      id: 0,
      question: 'Это полноценный сервер?',
      answer: 'Да, это полноценный VPN сервер с выделенными ресурсами и высокой скоростью подключения.',
    },
    {
      id: 1,
      question: 'Можно ли менять локацию?',
      answer: 'Да. Внутри кабинета доступны профили для разных стран. Переключение занимает считанные секунды.',
    },
    {
      id: 2,
      question: 'Какие устройства поддерживаются?',
      answer: 'Поддерживаются все популярные платформы: iOS, Android, Windows, macOS, Linux и роутеры.',
    },
    {
      id: 3,
      question: 'Работает ли с мобильной сети?',
      answer: 'Да, сервис работает со всеми типами подключений, включая мобильные сети 4G и 5G.',
    },
    {
      id: 4,
      question: 'Как оплатить?',
      answer: 'Принимаем банковские карты, криптовалюту и другие популярные способы оплаты.',
    },
    {
      id: 5,
      question: 'Есть ли гарантия возврата средств?',
      answer: 'Да, у нас есть гарантия возврата в течение 14 дней после покупки.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-black py-20 px-[20px] max-[425px]:py-10">
      <div className="max-w-[1136px] mx-auto">
      <h2 className="text-[42px] font-light text-white text-center mb-[32px] max-[425px]:text-[28px]">
              Частые вопросы
            </h2>

        <div className="flex justify-between gap-[120px] items-center">
          <div>
           
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className={`bg-[#1B1A1C] rounded-[13px] border !border-[#8B5CF6]/40 transition-all duration-300 overflow-hidden ${
                    openIndex === faq.id
                      ? '!border !border-[#8B5CF6]'
                      : 'border-gray-800/50'
                  }`}
                  style={{
                    boxShadow: openIndex === faq.id 
                      ? '0 10px 40px rgba(139, 92, 246, 0.2)' 
                      : '0 4px 20px rgba(0, 0, 0, 0.3)',
                    background: openIndex === faq.id ? 'linear-gradient(0deg, rgba(139,92,246,0.1) 0%, rgba(139,92,246,0) 100%)' : '#1B1A1C' 
                  }}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex items-center justify-between p-[16px] text-left"
                  >
                    <span className="text-white text-[18px] font-light pr-[16px]">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-6 h-6 text-[#8B5CF6] flex-shrink-0 transition-transform duration-300 ${
                        openIndex === faq.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      openIndex === faq.id
                        ? 'max-h-96 opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-[16px] pb-[16px]">
                      <p className="text-[#A3A3A3] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center max-[1024px]:hidden">
            {/* <img src={faqtCenter} alt="" className="animate-float" /> */}
            <div className="animate-float">
              <svg width="380" height="380" viewBox="0 0 380 380" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_2572_705" fill="white">
                  <path d="M50 190C50 112.68 112.68 50 190 50C267.32 50 330 112.68 330 190C330 267.32 267.32 330 190 330C112.68 330 50 267.32 50 190Z" />
                </mask>
                <path d="M50 190C50 112.68 112.68 50 190 50C267.32 50 330 112.68 330 190C330 267.32 267.32 330 190 330C112.68 330 50 267.32 50 190Z" fill="url(#paint0_linear_2572_705)" />
                <path d="M190 330V329C113.232 329 51 266.768 51 190H50H49C49 267.872 112.128 331 190 331V330ZM330 190H329C329 266.768 266.768 329 190 329V330V331C267.872 331 331 267.872 331 190H330ZM190 50V51C266.768 51 329 113.232 329 190H330H331C331 112.128 267.872 49 190 49V50ZM190 50V49C112.128 49 49 112.128 49 190H50H51C51 113.232 113.232 51 190 51V50Z" fill="#8B5CF6" fill-opacity="0.4" mask="url(#path-1-inside-1_2572_705)" />
                <g filter="url(#filter0_ddd_2572_705)">
                  <rect width="140" height="140" transform="translate(120 120)" fill="white" fill-opacity="0.01" />
                  <path d="M181.33 209.455V208.943C181.386 203.517 181.955 199.199 183.034 195.989C184.114 192.778 185.648 190.179 187.636 188.19C189.625 186.202 192.011 184.369 194.795 182.693C196.472 181.67 197.977 180.463 199.312 179.071C200.648 177.651 201.699 176.017 202.466 174.17C203.261 172.324 203.659 170.278 203.659 168.034C203.659 165.25 203.006 162.835 201.699 160.79C200.392 158.744 198.645 157.168 196.457 156.06C194.27 154.952 191.841 154.398 189.17 154.398C186.841 154.398 184.597 154.881 182.438 155.847C180.278 156.812 178.474 158.332 177.026 160.406C175.577 162.48 174.739 165.193 174.511 168.545H163.773C164 163.716 165.25 159.582 167.523 156.145C169.824 152.707 172.849 150.08 176.599 148.261C180.378 146.443 184.568 145.534 189.17 145.534C194.17 145.534 198.517 146.528 202.21 148.517C205.932 150.506 208.801 153.233 210.818 156.699C212.864 160.165 213.886 164.114 213.886 168.545C213.886 171.67 213.403 174.497 212.438 177.026C211.5 179.554 210.136 181.812 208.347 183.801C206.585 185.79 204.455 187.551 201.955 189.085C199.455 190.648 197.452 192.295 195.946 194.028C194.44 195.733 193.347 197.764 192.665 200.122C191.983 202.48 191.614 205.42 191.557 208.943V209.455H181.33ZM186.784 234.682C184.682 234.682 182.878 233.929 181.372 232.423C179.866 230.918 179.114 229.114 179.114 227.011C179.114 224.909 179.866 223.105 181.372 221.599C182.878 220.094 184.682 219.341 186.784 219.341C188.886 219.341 190.69 220.094 192.196 221.599C193.702 223.105 194.455 224.909 194.455 227.011C194.455 228.403 194.099 229.682 193.389 230.847C192.707 232.011 191.784 232.949 190.619 233.659C189.483 234.341 188.205 234.682 186.784 234.682Z" fill="#8B5CF6" />
                </g>
                <defs>
                  <filter id="filter0_ddd_2572_705" x="0" y="0" width="380" height="380" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="60" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.545098 0 0 0 0 0.360784 0 0 0 0 0.964706 0 0 0 0.4 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2572_705" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="40" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.545098 0 0 0 0 0.360784 0 0 0 0 0.964706 0 0 0 0.6 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_2572_705" result="effect2_dropShadow_2572_705" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="20" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.545098 0 0 0 0 0.360784 0 0 0 0 0.964706 0 0 0 0.8 0" />
                    <feBlend mode="normal" in2="effect2_dropShadow_2572_705" result="effect3_dropShadow_2572_705" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_2572_705" result="shape" />
                  </filter>
                  <linearGradient id="paint0_linear_2572_705" x1="50" y1="50" x2="330" y2="330" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#8B5CF6" stop-opacity="0.3" />
                    <stop offset="0.5" stop-color="#8B5CF6" stop-opacity="0.2" />
                    <stop offset="1" stop-color="#A855F7" stop-opacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div 
              className="absolute top-8 right-1 oval-style rounded-full flex items-center justify-center"
            >
            <img src={wifi} alt="" />
            </div>

            <div 
              className="absolute top-[120px] right-[5px] oval-style-3 rounded-full flex items-center justify-center"
            ></div>

            <div 
              className="absolute bottom-5 left-5 oval-style-2 rounded-full flex items-center justify-center"
            >
            <img src={secur} alt="" />
              
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}