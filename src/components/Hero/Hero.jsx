
import center from '../../../public/assets/hero-center-oval.svg'
import wifi from '../../../public/assets/wifi-icon.svg'
import secur from '../../../public/assets/secur-icon.svg'

export default function Hero() {
  return (
    <section className="relative py-[80px] px-[20px] overflow-hidden bg-lianer">
      <div className="max-w-[1136px] mx-auto">
        <div className="flex items-center justify-between max-[768px]:flex-col-reverse max-[768px]:gap-[80px]">
          <div className="z-10">
            <h1 className="text-[42px] font-light text-white mb-[16px] leading-[60px]">
              Ваш интернет <br /> будет работать <br />
            <span className="text-[52px] font-light text-[#8B5CF6] text-glow-animate">быстро и стабильно</span>
            </h1>
            
            <p className="text-[#A3A3A3] text-[18px] mb-[32px]">
              Включите ускоритель YouTube и соцсетей за 1 минуту
            </p>

            <button 
              className="relative button-style max-[768px]:!w-full !px-[20px] !py-[18px] !rounded-[16px] transition-all duration-300 group button-glow-animate"
            >
              <span className="relative z-10">Купить Турбо Интернет</span>
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: '0 0 60px rgba(139, 92, 246, 0.8), 0 0 100px rgba(139, 92, 246, 0.4)'
                }}
              />
            </button>
          </div>

          <div className="relative flex items-center justify-center">
            <img src={center} alt="" />

            <div 
              className="absolute top-8 right-5 oval-style rounded-full flex items-center justify-center"
            >
            <img src={wifi} alt="" />
            </div>

            <div 
              className="absolute top-[120px] right-[5px] oval-style-3 rounded-full flex items-center justify-center"
            ></div>

            <div 
              className="absolute bottom-5 left-12 oval-style-2 rounded-full flex items-center justify-center"
            >
            <img src={secur} alt="" />
              
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}