import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function TestimonialsSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const testimonials = [
    {
      id: 1,
      name: 'Евгения',
      date: '5 ноября, 2024',
      rating: 5,
      text: '«Стабильный интернет даже вечером, когда все дома. Дети смотрят стримы, я работаю — без лагов»',
    },
    {
      id: 2,
      name: 'Илья',
      date: '4 ноября, 2024',
      rating: 5,
      text: '«Подключил для дачи: скорость держится, видеозвонки в Zoom не разваливаются. Настройка заняла 5 минут»',
    },
    {
      id: 3,
      name: 'Мария',
      date: '3 ноября, 2024',
      rating: 5,
      text: '«Работаю на фрилансе, важна стабильность. С Турбо Интернетом загрузки проектов и заливка файлов идут быстро»',
    },
    {
      id: 4,
      name: 'Дмитрий',
      date: '3 ноября, 2024',
      rating: 5,
      text: '«Перешёл с другого провайдера: скорость выше, пинг ниже. Можно играть онлайн без нервов»',
    },
    {
      id: 5,
      name: 'Анна',
      date: '1 ноября, 2024',
      rating: 5,
      text: '«Удобное приложение и поддержка отвечает быстро. Скорость стабильная даже на нескольких устройствах сразу»',
    },
  ];

  return (
    <section className="relative bg-black py-20 max-[425px]:py-10 overflow-hidden">
      <div className="mx-auto mb-12 px-4 md:px-0">
        <div className="text-center mb-4">
          <h2 className="text-[28px] md:text-[42px] max-w-[630px] mx-auto leading-[34px] md:leading-[50px] text-white mb-[16px]">
            84 % наших пользователей
            рекомендуют сервис друзьям
          </h2>
          <p className="text-[#A3A3A3] text-[16px] md:text-[18px]">
            Турбо Интернет, который ускоряет видео и делает интернет стабильным
          </p>
        </div>
      </div>

      <div className="relative w-full mb-12">
        {/* <div className="absolute left-[-50px] top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" /> */}
        

        <div className="px-4 md:px-0 md:pr-0">
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            loop
            slidesPerView="auto"
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
            className="!overflow-visible"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="max-[425px]:!w-[320px] max-[425px]:!h-[250px] !w-[443px] md:relative md:left-[150px]">
                <div className="h-full">
                  <div
                    className="bg-[#1B1A1C] rounded-[16px] p-[24px] border border-[rgba(139,92,246,0.4)] transition-all duration-300 h-full"
                    style={{
                      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)',
                    }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 testimonials-oval  rounded-full flex items-center justify-center border border-[rgba(139,92,246,0.4)]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21" stroke="#8B5CF6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M16 3.12805C16.8578 3.35042 17.6174 3.85132 18.1597 4.55211C18.702 5.25291 18.9962 6.11394 18.9962 7.00005C18.9962 7.88616 18.702 8.74719 18.1597 9.44799C17.6174 10.1488 16.8578 10.6497 16 10.8721" stroke="#8B5CF6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M22 21V19C21.9993 18.1137 21.7044 17.2528 21.1614 16.5523C20.6184 15.8519 19.8581 15.3516 19 15.13" stroke="#8B5CF6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#8B5CF6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>
                      </div>
                      <div>
                        <h4 className="text-white text-[18px]">{testimonial.name}</h4>
                        <p className="text-[#A3A3A3] text-sm">{testimonial.date}</p>
                      </div>
                    </div>

                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-6 h-6 text-purple-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-[#A3A3A3] leading-relaxed">{testimonial.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="flex justify-center gap-4 mb-12 max-[425px]:hidden">
        <button
          ref={prevRef}
          className="testimonials-prev w-12 h-12 bg-[#8B5CF6]/20 hover:bg-[rgba(139,92,246,0.4)] rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer z-20 active:scale-95"
          style={{
            boxShadow: '0 4px 20px rgba(139, 92, 246, 0.3)',
          }}
          aria-label="Previous testimonial"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          ref={nextRef}
          className="testimonials-next w-12 h-12 bg-[rgba(139,92,246,0.4)] hover:bg-[rgba(139,92,246,0.6)] rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer z-20 active:scale-95"
          style={{
            boxShadow: '0 0 40px 0 rgba(139, 92, 246, 0.8)',
          }}
          aria-label="Next testimonial"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <div className="max-w-[1136px] mx-auto px-6">
        <div className="flex justify-center">
          <a
            href="#pricing"
            className="relative button-style !px-[20px] !py-[17px] text-white !rounded-[16px] font-medium text-lg transition-all duration-300 group button-glow-animate text-center"
          >
            <span className="relative z-10">Купить Турбо Интернет</span>
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                boxShadow: '0 0 40px 0 rgba(139, 92, 246, 0.8)',
            }}
            />
          </a>
        </div>
      </div>

    </section>
  );
}
