import React from 'react';

export default function FeaturesSection() {
  const features = [
    {
      id: 1,
      title: 'YouTube',
      description: 'видео грузятся быстрее',
      iconBg: '../../../assets/youtube-logo.svg',
    },
    {
      id: 2,
      title: 'TikTok',
      description: 'короткие ролики летают',
      iconBg: '../../../assets/tiktok-logo.svg',
    },
    {
      id: 3,
      title: 'Netflix',
      description: 'стабильно работает',
      iconBg: '../../../assets/netflix-logo.svg',
    },
    {
      id: 4,
      title: 'Контент 18+',
      description: 'анонимно и без ограничений',
      iconBg: '../../../assets/secur-logo.svg',
    },
  ];

  return (
    <section className="relative bg-lianer py-20 px-[20px] max-[425px]:py-10">
      <div className="max-w-[1136px] mx-auto">
        {/* Sarlavha */}
        <h2 className="text-[42px] max-[425px]:text-[28px] font-light text-white text-center mb-[56px] max-[425px]:mb-[33px]">
          Ускоряем всё, что вы смотрите
        </h2>

        {/* Kartalar Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] mb-16 max-[425px]:mb-[32px]">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="relative bg-[#8B5CF6] rounded-3xl p-[28px] max-[425px]:p-[24px] transition-all duration-300"
            >

              {/* Icon - bu yerga o'z rasmingizni qo'yasiz */}
              <div className="relative flex justify-center mb-6">
                <div
                  className="w-[70px] h-[70px] rounded-full flex items-center border border-[rgba(255, 255, 255, 0.4)] justify-center relative" style={{boxShadow: ' 0 0 20px 0 rgba(139, 92, 246, 0.8)', background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%)'}}
                >
                  <div className={`w-16 h-16 ${feature.iconBg} rounded-full flex items-center justify-center`}>
                    {/* BU YERGA O'Z ICON YOKI RASMINGIZNI QO'YING */}
                    <img 
                      src={`${feature.iconBg}`} 
                      alt={feature.title}
                    />
                  </div>
                </div>
              </div>

              {/* Matn */}
              <div className="relative text-center">
                <h3 className="text-[18px] font-light text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <a
            href="#pricing"
            className="relative button-style text-white !px-[20px] !py-[17px] !rounded-[16px] font-medium text-lg button-glow-animate transition-all duration-300 group text-center"
            style={{
              boxShadow: '0 0 50px rgba(139, 92, 246, 0.6), 0 0 100px rgba(139, 92, 246, 0.3)',
            }}
          >
            <span className="relative z-10">Купить Турбо Интернет</span>
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                boxShadow: '0 0 70px rgba(139, 92, 246, 0.8), 0 0 120px rgba(139, 92, 246, 0.4)',
              }}
            />
          </a>
        </div>
      </div>

    </section>
  );
}
