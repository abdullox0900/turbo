
import center from '../../../public/assets/hero-center-oval.svg'
import wifi from '../../../public/assets/wifi-icon.svg'
import secur from '../../../public/assets/secur-icon.svg'

export default function Hero() {
  return (
    <section className="relative py-[80px] px-[20px] overflow-hidden bg-lianer max-[435px]:py-[35px]">
      <div className="max-w-[1136px] mx-auto">
        <div className="flex items-center justify-between max-[768px]:flex-col-reverse max-[768px]:gap-[80px] max-[435px]:gap-[40px]">
          <div className="z-10">
            <h1 className="text-[52px] font-light text-white mb-[16px] leading-[60px] max-[435px]:text-[40px]">
              Ваш интернет <br /> будет работать <br />
              <span className="text-[52px] font-light text-[#8B5CF6] text-glow-animate max-[435px]:text-[40px]">быстро и стабильно</span>
            </h1>
            
            <p className="text-[#A3A3A3] text-[18px] mb-[32px]">
              Включите ускоритель YouTube и соцсетей за 1 минуту
            </p>

            <a
              href="#pricing"
              className="relative button-style max-[768px]:!w-full !px-[20px] !py-[18px] !rounded-[16px] transition-all duration-300 group button-glow-animate text-center"
            >
              <span className="relative z-10">Купить Турбо Интернет</span>
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: '0 0 60px rgba(139, 92, 246, 0.8), 0 0 100px rgba(139, 92, 246, 0.4)'
                }}
              />
            </a>
          </div>

          <div className="relative flex items-center justify-center">

            <div className="animate-float">
              <svg width="380" height="380" viewBox="0 0 380 380" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_2572_555" fill="white">
                  <path d="M50 190C50 112.68 112.68 50 190 50C267.32 50 330 112.68 330 190C330 267.32 267.32 330 190 330C112.68 330 50 267.32 50 190Z" />
                </mask>
                <path d="M50 190C50 112.68 112.68 50 190 50C267.32 50 330 112.68 330 190C330 267.32 267.32 330 190 330C112.68 330 50 267.32 50 190Z" fill="url(#paint0_linear_2572_555)" />
                <path d="M190 330V329C113.232 329 51 266.768 51 190H50H49C49 267.872 112.128 331 190 331V330ZM330 190H329C329 266.768 266.768 329 190 329V330V331C267.872 331 331 267.872 331 190H330ZM190 50V51C266.768 51 329 113.232 329 190H330H331C331 112.128 267.872 49 190 49V50ZM190 50V49C112.128 49 49 112.128 49 190H50H51C51 113.232 113.232 51 190 51V50Z" fill="#8B5CF6" fill-opacity="0.4" mask="url(#path-1-inside-1_2572_555)" />
                <g filter="url(#filter0_ddd_2572_555)">
                  <rect width="140" height="140" transform="translate(120 120)" fill="white" fill-opacity="0.01" />
                  <path d="M143.333 201.667C142.23 201.67 141.147 201.361 140.212 200.774C139.277 200.187 138.528 199.347 138.052 198.351C137.575 197.356 137.391 196.245 137.521 195.149C137.65 194.053 138.088 193.016 138.783 192.158L196.533 132.658C196.967 132.158 197.557 131.82 198.208 131.7C198.858 131.58 199.53 131.684 200.114 131.996C200.697 132.308 201.157 132.809 201.418 133.417C201.679 134.025 201.726 134.704 201.55 135.342L190.35 170.458C190.02 171.342 189.909 172.293 190.027 173.229C190.145 174.165 190.488 175.059 191.027 175.833C191.566 176.608 192.285 177.24 193.123 177.675C193.96 178.111 194.89 178.336 195.833 178.333H236.667C237.771 178.33 238.853 178.639 239.788 179.226C240.723 179.813 241.472 180.653 241.949 181.649C242.425 182.644 242.609 183.755 242.48 184.851C242.35 185.947 241.912 186.984 241.217 187.842L183.467 247.342C183.034 247.842 182.443 248.18 181.793 248.3C181.142 248.42 180.47 248.316 179.887 248.004C179.303 247.692 178.843 247.191 178.582 246.583C178.321 245.975 178.275 245.296 178.45 244.658L189.65 209.542C189.98 208.658 190.091 207.707 189.973 206.771C189.855 205.835 189.512 204.941 188.973 204.167C188.434 203.392 187.715 202.76 186.878 202.325C186.041 201.889 185.11 201.664 184.167 201.667H143.333Z" stroke="#8B5CF6" stroke-width="11.6667" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <filter id="filter0_ddd_2572_555" x="0" y="0" width="380" height="380" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="60" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.545098 0 0 0 0 0.360784 0 0 0 0 0.964706 0 0 0 0.4 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2572_555" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="40" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.545098 0 0 0 0 0.360784 0 0 0 0 0.964706 0 0 0 0.6 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_2572_555" result="effect2_dropShadow_2572_555" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="20" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.545098 0 0 0 0 0.360784 0 0 0 0 0.964706 0 0 0 0.8 0" />
                    <feBlend mode="normal" in2="effect2_dropShadow_2572_555" result="effect3_dropShadow_2572_555" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_2572_555" result="shape" />
                  </filter>
                  <linearGradient id="paint0_linear_2572_555" x1="50" y1="50" x2="330" y2="330" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#8B5CF6" stop-opacity="0.3" />
                    <stop offset="0.5" stop-color="#8B5CF6" stop-opacity="0.2" />
                    <stop offset="1" stop-color="#A855F7" stop-opacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>

            </div>

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
