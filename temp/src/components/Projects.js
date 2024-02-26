// import React from "react";
// import { myDatas } from "../myData";
// import { Swiper, SwiperSlide } from "swiper/react";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";

// const Projects = () => {
//   const { Projects } = myDatas;
//   return (
//     <>
//       <section className="bg-bg_light_primary" id="projects">
//         <div className="md:container px-5 pt-10 min-h-screen flex flex-col justify-between">
//           <div>
//             <h2 className="title" data-aos="fade-down">
//               {Projects.title}
//             </h2>
//             <h4 className="subtitle" data-aos="fade-down">
//               {Projects.subtitle}
//             </h4>
//             <br />
//           </div>
//           <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
//             <Swiper
//               pagination={{
//                 clickable: true,
//               }}
//               data-aos="fade-left"
//               spaceBetween={20}
//               modules={[Pagination]}
//               className="rounded-xl pb-10 max-w-xs drop-shadow-primary self-start"
//             >
//               {Projects.project_content.map((content, i) => (
//                 <SwiperSlide
//                   key={i}
//                   className="bg-white rounded-3xl p-5 border-b- border-[#FAF9FD] h-fit"
//                 >
//                   <img src={content.image} alt="..." className="w-400 h-400" />
//                   <div className="flex flex-col gap-1 mt-2">
//                     <h5 className="font-bold font-Poppins">{content.title}</h5>
//                     <a href={content.live_url} target="_blank" >
//                     <button className="font-bold text-gray self-end hover:text-blue-500">
//                       Live
//                     </button>

//                     </a>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Projects;

import React from "react";
import { myDatas } from "../myData";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Projects = () => {
  const { Projects } = myDatas;
  return (
    <>
      <section className="bg-bg_light_primary" id="projects">
        <div className="md:container px-5 pt-10 min-h-screen flex flex-col justify-between">
          <div>
            <h2 className="title" data-aos="fade-down">
              {Projects.title}
            </h2>
            <h4 className="subtitle" data-aos="fade-down">
              {Projects.subtitle}
            </h4>
            <br />
          </div>
          <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
            <Swiper
              pagination={{
                clickable: true,
              }}
              data-aos="fade-left"
              spaceBetween={20}
              modules={[Pagination]}
              className="rounded-xl pb-10 max-w-xs drop-shadow-primary self-start"
            >
              {Projects.project_content.map((content, i) => (
                <SwiperSlide
                  key={i}
                  className="bg-white rounded-3xl p-5 border-b- border-[#FAF9FD] h-fit"
                >
                  <div className="w-400 h-400">
                    <img
                      src={content.image}
                      alt="..."
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1 mt-2">
                    <h5 className="font-bold font-Poppins">{content.title}</h5>
                    <div className="flex justify-between">
                      <a
                        href={content.git_repo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="font-bold text-gray self-end hover:text-red-500">
                          Get Source
                        </button>
                      </a>
                      <a
                        href={content.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="font-bold text-gray self-end hover:text-blue-500">
                          Live
                        </button>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
