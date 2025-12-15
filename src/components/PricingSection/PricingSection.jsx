import React from 'react';
import { pricingPlans } from '../../data/pricingPlans';

export default function PricingSection() {
  return (
    <section id="pricing" className="relative bg-black py-20 px-[20px] max-[425px]:py-10">
      <div className="max-w-[1136px] mx-auto">
        {/* Sarlavha */}
        <h2 className="text-[42px] font-light text-white text-center mb-[32px] max-[425px]:text-[28px]">
          Тарифы
        </h2>

        {/* Pricing Cards */}
        <div className="flex flex-col md:flex-row md:flex-nowrap gap-6 overflow-x-auto md:overflow-visible pb-2 scrollbar-hide">
          {pricingPlans.map((plan, index) => {
            const backgroundStyles = [
              { background: 'linear-gradient(180deg, rgba(139,92,246,0.12) 0%, rgba(0,0,0,0) 100%)' },
              { background: 'linear-gradient(180deg, rgba(139,92,246,0.12) 0%, rgba(0,0,0,0) 100%)' },
              { background: 'linear-gradient(180deg, rgba(139,92,246,0.12) 0%, rgba(0,0,0,0) 100%)' }
            ];
            const bgStyle = backgroundStyles[index % backgroundStyles.length] || {};

            return (
            <div
              key={plan.id}
                style={{
                  ...bgStyle,
                  willChange: 'transform',
                  transform: 'translateZ(0)',
                  WebkitTransform: 'translateZ(0)'
                }}
              className={`relative rounded-3xl p-[24px] backdrop-blur-sm border border-[rgba(139,92,246,0.35)] transition-all duration-300 min-w-[280px] md:min-w-0 flex-1`}
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
                type="button"
                onClick={() => { window.location.href = `/payment?plan=${plan.slug}` }}
                className={`relative ${plan.buttonStyle} max-[550px]:!w-full px-[16px] py-[12px] rounded-[12px] font-medium text-base mb-[12px] transition-all duration-300 button-glow-animate text-center`}
              >
                <span className="relative z-10" style={{ transform: 'translateZ(0)', willChange: 'auto' }}>
                  {plan.buttonText}
                </span>
              </button>

              {/* Note */}
              {plan.note ? (
                <p className={`text-sm ${plan.textColor} text-start max-[425px]:text-center`}>
                  {plan.note}
                </p>
              ) : null}
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
