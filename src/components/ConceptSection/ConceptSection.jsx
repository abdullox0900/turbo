import React from 'react';

export default function ConceptSection() {
  const concepts = [
    {
      id: 1,
      title: 'Удобный личный кабинет и приложение',
      subtitle: 'и приложение',
      image: '../../../assets/concept-img-1.png',
    },
    {
      id: 2,
      title: 'Тысячи гигабайт для просмотра видео',
      subtitle: 'для просмотра видео',
      image: '../../../assets/concept-img-2.png', 
    },
    {
      id: 3,
      title: 'Можно делиться подпиской с друзьями',
      subtitle: 'подпиской с друзьями',
      image: '../../../assets/concept-img-3.png', 
    },
    {
      id: 4,
      title: 'Ваши данные под надежной защитой',
      subtitle: 'под надежной защитой',
      image: '../../../assets/concept-img-4.png', 
    },
  ];

  return (
    <section className="relative bg-lianer py-20 px-[20px] max-[425px]:py-[50px]">
      <div className="max-w-[1136px] mx-auto">
        <h2 className="text-[42px] max-[425px]:text-[28px] font-light text-white text-center mb-[47px]">
          Концепция Турбо Интернет
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] mb-[56px]">
          {concepts.map((concept) => (
            <div
              key={concept.id}
              className="bg-[#8B5CF6] rounded-3xl py-[26px] pt-[5px] px-[16px] backdrop-blur-sm border border-[rgba(139,92,246,0.4)] transition-all duration-300 group"
            >
              <div className="flex justify-center mb-1 max-[425px]:mb-0">
                  <img 
                    src={concept.image} 
                    alt={concept.title}
                    className="w-[170px] h-[140px] max-[425px]:h-[90px] object-cover transition-transform duration-300"
                  />
              </div>

              <div className="text-center">
                <h3 className="text-[18px] max-[425px]:text-[14px] font-light text-white leading-tight">
                  {concept.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="#pricing"
            className="relative button-style text-white !px-[20px] !py-[17px] !rounded-[16px] font-medium text-lg transition-all duration-300 group button-glow-animate text-center"
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
