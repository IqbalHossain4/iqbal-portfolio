import sky from "../../assets/sky2.png";
import bluKey from "../../assets/bluKey.png";
import findus from "../../assets/findus.png";
// import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div
      id="projects"
      className="my-28 z-20 font-serif"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="container ">
        <p className="my-8 text-zinc-400">work/&gt;</p>

        <div>
          {/* Sky-sports */}
          <div className="p-8 md:flex items-center justify-between">
            <div className="md:w-1/3">
              <h4 className="text-[#071cf9] text-[18px]">Full-Stack Project</h4>

              <h2 className="text-[#FF78C4] font-bold text-[22px] my-8">
                Sky-Sprts{" "}
                <span className="text-white">| Learning platform</span>
              </h2>
              <p className="text-white text-[18px] leading-[35px]">
                <span className="text-[#FF78C4]">Sky-Sports</span> is a
                full-stack application. Here users will find a lot of features.
                Users can create accounts using email and password or with
                Google. Students will find a fancy gallery section. and course
                section. and top instructor section. There has an admin or
                instructor section. They are different role. admin can make an
                instructor or admin.
              </p>
              <div className=" text-white flex items-center gap-2 mt-8">
                <a href="https://simple-firebase-5fde6.web.app/" target="blank">
                  <button className="border border-blue-600 hover:bg-[#071cf9]  w-[100px] md:w-[180px] h-[40px] cursor-pointer text-white rounded-md tracking-wide transition-colors duration-300 ease-in-out shadow-[0_10px_20px_rgba(13,_53,_240,_0.9)]">
                    Live View
                  </button>
                </a>
                <a
                  href="https://github.com/IqbalHossain4/sky-sports_available_here_man_and_women_sports"
                  target="blank"
                >
                  <button className="border border-blue-600 hover:bg-[#071cf9]  w-[100px] md:w-[180px] h-[40px] cursor-pointer text-white rounded-md tracking-wide transition-colors duration-300 ease-in-out shadow-[0_10px_20px_rgba(13,_53,_240,_0.9)]">
                    Front-end
                  </button>
                </a>
                <a
                  href="https://github.com/IqbalHossain4/assignment-12-server"
                  target="blank"
                >
                  <button className="border border-blue-600 hover:bg-[#071cf9]  w-[100px] md:w-[180px] h-[40px] cursor-pointer text-white rounded-md tracking-wide transition-colors duration-300 ease-in-out shadow-[0_10px_20px_rgba(13,_53,_240,_0.9)]">
                    Back-end
                  </button>
                </a>
              </div>
            </div>
            <div className="md:h-[600px] h-full md:mt-0 mt-8">
              <img className="h-full w-full" src={sky} alt="" />
            </div>
          </div>
          {/* findus */}
          <div>
            <div className="p-8 md:flex items-center justify-between">
              <div className="md:w-1/3">
                <h4 className="text-[#071cf9] text-[18px]">
                  Front-End Project
                </h4>

                <h2 className="text-yellow-400 font-bold text-[22px] my-8">
                  Findus Toy{" "}
                  <span className="text-white">| Ecommerce platform</span>
                </h2>
                <p className="text-white text-[18px] leading-[35px]">
                  <span className="text-yellow-400">Findus Toy</span> is a
                  front-end application. Here users will find a lot of features.
                  Users can create accounts using email and password or with
                  Google. Users will find a fancy gallery section. and product
                  section. In the product section users can find categorized
                  products. Users can add products easily and delete a product
                  and if users want buy a product they can buy a product.
                </p>
                <div className=" text-white flex items-center gap-2 mt-8">
                  <a href="https://income-hero.web.app/" target="blank">
                    <button className="border border-blue-600 hover:bg-[#071cf9]  w-[100px] md:w-[180px] h-[40px] cursor-pointer text-white rounded-md tracking-wide transition-colors duration-300 ease-in-out shadow-[0_10px_20px_rgba(13,_53,_240,_0.9)]">
                      Live View
                    </button>
                  </a>
                  <a
                    href="https://github.com/IqbalHossain4/Findus-toys"
                    target="blank"
                  >
                    <button className="border border-blue-600 hover:bg-[#071cf9]  w-[100px] md:w-[180px] h-[40px] cursor-pointer text-white rounded-md tracking-wide transition-colors duration-300 ease-in-out shadow-[0_10px_20px_rgba(13,_53,_240,_0.9)]">
                      Front-end
                    </button>
                  </a>
                  <a
                    href="https://github.com/IqbalHossain4/ass11"
                    target="blank"
                  >
                    <button className="border border-blue-600 hover:bg-[#071cf9]  w-[100px] md:w-[180px] h-[40px] cursor-pointer text-white rounded-md tracking-wide transition-colors duration-300 ease-in-out shadow-[0_10px_20px_rgba(13,_53,_240,_0.9)]">
                      Back-end
                    </button>
                  </a>
                </div>
              </div>
              <div className="md:h-[600px] h-full md:mt-0 mt-8">
                <img className="h-full w-full" src={findus} alt="" />
              </div>
            </div>
          </div>
          {/* blueKey */}
          <div>
            <div className="p-8 md:flex items-center justify-between">
              <div className="md:w-1/3">
                <h4 className="text-[#071cf9] text-[18px]">
                  Front-End Project
                </h4>

                <h2 className="text-red-600 font-bold text-[22px] my-8">
                  BlueKey{" "}
                  <span className="text-white">| Food Delivery platform</span>
                </h2>
                <p className="text-white text-[18px] leading-[35px]">
                  <span className="text-red-600">BlueKey</span> is a front-end
                  application. Here users will find a lot of features. Users can
                  create accounts using email and password or with Google. Users
                  will find a fancy food gallery section. and chef section. In
                  the food section users can find categorized food. A Chef can
                  add food easily and delete a food and if users want buy a food
                  they can buy a food.
                </p>
                <div className=" text-white flex items-center gap-2 mt-8">
                  <a href="https://ass-ten.web.app/" target="blank">
                    <button className="border border-blue-600 hover:bg-[#071cf9]  w-[100px] md:w-[180px] h-[40px] cursor-pointer text-white rounded-md tracking-wide transition-colors duration-300 ease-in-out shadow-[0_10px_20px_rgba(13,_53,_240,_0.9)]">
                      Live View
                    </button>
                  </a>
                  <a href="#" target="blank">
                    <button className="border border-blue-600 hover:bg-[#071cf9]  w-[100px] md:w-[180px] h-[40px] cursor-pointer text-white rounded-md tracking-wide transition-colors duration-300 ease-in-out shadow-[0_10px_20px_rgba(13,_53,_240,_0.9)]">
                      Front-end
                    </button>
                  </a>
                  <a href="#" target="blank">
                    <button className="border border-blue-600 hover:bg-[#071cf9]  w-[100px] md:w-[180px] h-[40px] cursor-pointer text-white rounded-md tracking-wide transition-colors duration-300 ease-in-out shadow-[0_10px_20px_rgba(13,_53,_240,_0.9)]">
                      Back-end
                    </button>
                  </a>
                </div>
              </div>
              <div className="md:h-[600px] h-full md:mt-0 mt-8">
                <img className="h-full w-full" src={bluKey} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
