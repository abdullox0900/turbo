import React from 'react';

export default function PricingSection() {
  const pricingPlans = [
    {
      id: 1,
      badge: 'Пробный тариф',
      badgeColor: 'bg-[#8B5CF6]/40',
      duration: 'На 1 день',
      price: '10 ₽',
      buttonText: 'Выбрать',
      buttonStyle: 'bg-[#8B5CF6] text-white',
      note: 'Можно воспользоваться только один раз',
      cardBg: 'from-gray-900/80 to-black/90',
      borderColor: 'border border-[#8B5CF6]',
      textColor: 'text-[#A3A3A3]',
    },
    {
      id: 2,
      badge: 'Базовый тариф',
      badgeColor: 'bg-[#8B5CF6]/40',
      duration: 'На месяц',
      price: '990 ₽',
      buttonText: 'Выбрать',
      buttonStyle: 'bg-[#8B5CF6] text-white',
      note: '14 дней возврат средств',
      cardBg: 'from-purple-800/80 to-purple-900/90',
      borderColor: '',
      textColor: 'text-[#A3A3A3]',
    },
    {
      id: 3,
      badge: 'Выгода 60%',
      badgeColor: 'bg-black',
      duration: 'На год',
      price: '6400 ₽',
      buttonText: 'Выбрать',
      buttonStyle: 'bg-white hover:bg-gray-100 text-purple-700',
      note: '14 дней возврат средств',
      cardBg: 'from-purple-500 to-purple-700',
      borderColor: '',
      textColor: 'text-white',
      popular: true,
    },
  ];

  return (
    <section className="relative bg-black py-20 px-[20px] max-[425px]:py-10">
      <div className="max-w-[1136px] mx-auto">
        {/* Sarlavha */}
        <h2 className="text-[42px] font-light text-white text-center mb-[32px] max-[425px]:text-[28px]">
          Тарифы
        </h2>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => {
            const backgroundStyles = [
              { background: 'linear-gradient(0deg, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0) 100%)' },
              { background: 'rgba(139, 92, 246, 0.4)' },
              { background: '#8b5cf6' }
            ];

            return (
            <div
              key={plan.id}
              style={backgroundStyles[index]}
              className={`relative rounded-3xl p-[24px] backdrop-blur-sm ${plan.borderColor} transition-all duration-300`}
            >
              <div className='max-[425px]:flex flex-row-reverse justify-between'>
                {/* Badge */}
              <div className="mb-[16px]">
                <span className={`${plan.badgeColor} text-white text-[12px] px-[12px] py-[4px] rounded-full inline-block`}>
                  {plan.badge}
                </span>
              </div>

             <div>
               {/* Duration */}
               <div className={`text-[18px] text-white mb-[5px]`}>
                {plan.duration}
              </div>

              {/* Price */}
              <div className={`text-[52px] font-light text-white mb-[16px]`}>
                {plan.price}
              </div>
             </div>

              </div>
              {/* Button */}
              <button
                className={`${plan.buttonStyle} max-[550px]:!w-full px-[20px] py-[17px] rounded-[16px] font-medium text-lg mb-[16px] transition-all duration-300 button-glow-animate`}
              >
                {plan.buttonText}
              </button>

              {/* Note */}
              <p className={`text-sm ${plan.textColor} text-start max-[425px]:text-center`}>
                {plan.note}
              </p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}