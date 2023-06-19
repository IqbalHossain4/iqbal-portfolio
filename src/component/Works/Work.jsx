import sky from "../../assets/sky.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Work = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="my-28 z-20">
      <div className="container ">
        <p className="my-8 text-zinc-400">work/&gt;</p>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <div>
            <SwiperSlide>
              <div className="relative changeColor cursor-pointer md:h-[450px] h-[200px]">
                <a href="https://simple-firebase-5fde6.web.app/" target="blank">
                  <img src={sky} className="h-full w-full" alt="" />
                </a>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black bg-blend-overlay"></div>
              </div>
            </SwiperSlide>
            <div className="h-[450px] w-full">
              <SwiperSlide>
                <div className="relative changeColor cursor-pointer md:h-[450px] h-[200px]">
                  <a
                    href="https://simple-firebase-5fde6.web.app/"
                    target="blank"
                  >
                    <img src={sky} className="" alt="" />
                  </a>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black bg-blend-overlay"></div>
                </div>
              </SwiperSlide>
            </div>
            <SwiperSlide>
              <div className="relative cursor-pointer changeColor md:h-[450px] h-[200px]">
                <a href="https://simple-firebase-5fde6.web.app/" target="blank">
                  <img src={sky} alt="" />
                </a>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black bg-blend-overlay"></div>
              </div>
            </SwiperSlide>
          </div>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
        <div className="text-center mt-8 rounded-md">
          <Link>
            <button className="border border-blue-600 hover:bg-[#071cf9]  w-[150px] h-[40px] cursor-pointer text-white rounded-md tracking-wide transition-colors duration-300 ease-in-out shadow-[0_10px_20px_rgba(13,_53,_240,_0.9)]">
              View More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Work;
