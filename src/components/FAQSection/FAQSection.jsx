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
            <img src={faqtCenter} alt="" className="animate-float" />

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