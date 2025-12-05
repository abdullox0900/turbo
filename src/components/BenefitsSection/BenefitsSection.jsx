import React from 'react';

export default function BenefitsSection() {
  const topFeatures = [
    {
      id: 1,
      title: 'Личный сервер',
      description: '160+ страна. До 10 Гбит/сек. Меняйте локацию сервера в любой момент без разрыва соединения.',
    },
    {
      id: 2,
      title: 'Для всех устройств',
      description: 'Подключайтесь к серверу со всех устройств одновременно. А еще вы можете поделиться им с семьей и друзьями.',
    },
    {
      id: 3,
      title: 'Совместимость',
      description: 'Используйте приложение для устройств на iOS, Android, Windows, macOS, Linux или ваш роутер. Быстрая настройка.',
    },
  ];

  const stats = [
    {
      id: 1,
      value: '< 20 мс',
      label: 'обычная задержка',
    },
    {
      id: 2,
      value: '10 Гбит/с',
      label: 'порт на большинстве локаций',
    },
    {
      id: 3,
      value: '99.9%',
      label: 'доступность узлов',
    },
    {
      id: 4,
      value: '24/7',
      label: 'приоритетная поддержка',
    },
  ];

  return (
    <section className="relative py-20 px-[20px] bg-lianer max-[425px]:py-10">
      <div className="max-w-[1136px] mx-auto">
        <h2 className="text-[42px] font-light text-white text-center mb-[32px] max-[425px]:text-[28px]">
          Что вы получаете?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-[425px]:gap-[16px] mb-6 max-[425px]:mb-[16px]">
          {topFeatures.map((feature) => (
            <div
              key={feature.id}
              className="bg-[#1B1A1C] max-[425px]:min-h-[150px] h-full rounded-[16px] p-[16px] backdrop-blur-sm border border-[#8B5CF6]/40 transition-all duration-300"
              style={{
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
              }}
            >
              <h3 className="text-[18px] font-light text-white mb-[8px]">
                {feature.title}
              </h3>
              <p className="text-[#A3A3A3] text-[14px] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-[425px]:!gap-[16px]">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-[#1B1A1C] max-[425px]:min-h-[140px] rounded-[16px] p-[16px] backdrop-blur-sm border border-[#8B5CF6]/40 transition-all duration-300 text-center"
              style={{
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
              }}
            >
              <div className="text-[42px] font-light text-white mb-3 max-[425px]:text-[24px]">
                {stat.value}
              </div>
              <p className="text-[#A3A3A3] text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}