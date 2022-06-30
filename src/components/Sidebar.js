import React, { useEffect, useLayoutEffect } from "react";
import { useState } from "react";

import {
  BsFillArrowLeftCircleFill,

} from "react-icons/bs";

function Sidebar() {
  let buttonns = document.querySelectorAll(".buttonn");
  console.log(buttonns);
  buttonns.forEach((buttonn) => {
    buttonn.addEventListener("click", () => {
      reset();
      buttonn.classList.add("activeBtn");
    });
  });

  function reset() {
    buttonns.forEach((btn) => btn.classList.remove("activeBtn"));
  }

  const [mobile, setmobile] = useState(false);

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }
  const [width] = useWindowSize();

  console.log(width);
  const [options, setoptions] = useState(true)

  useEffect(() => {
    if (width < 800) {
      setmobile(true);
      setOpen(false);
      setoptions(false)
    }

    if (width > 800) {
      setmobile(false);
      setOpen(true);
      setoptions(true)
    }
  }, [width]);

  const [open, setOpen] = useState(false);
  const [mob, setmob] = useState(true);
  console.log(open);

  return (
    <>
    <Navbar open={open} options={options} setOpen={setOpen} mob={mob} setmob={setmob} />
      <div className="w-full ">
        <div className="flex text-gray-500 duration-500   mr-0">

          <div
            className={` ${mob===false?'bg-gradient-to-t from-amber-100 via-amber-100 to-amber-200':"bg-transparent"} lg:bg-gradient-to-t from-amber-100 via-amber-100 to-amber-200 z-10 fixed top-13 mr-72 left-0  h-full lg:w-56 w-48   flex  pt-2 lg:pt-8 flex-col rounded-tr-xl `}
          >
          

            <div className={`${mobile && mob ? "hidden" : "flex flex-col"}  `}>
             
              <button
                className={`text-gray-500    lg:w-48 p-[15px] w-40 my-3  ml-3 bg-[#1c076c] justify-center items-center   rounded-2xl ${
                  open ? "flex" : "hidden"
                }`}
              >
                <h2 className="text-[10px] text-white ">PYTHON</h2>
              </button>

              <div className="py-2 mb-3 bb w-full flex flex-col items-center ">
                <div className=" w-full border-gray-200 flex flex-col items-center">
                  <ul className=" w-full overflow-y-scroll h-screen lg:h-[31rem] scrollbar-hide ">
                    <li className="flex items-center  bb w-full buttonn  pl-3 cursor-pointer ">
                      <h2
                        className={`  mb-0  text-[14px] lg:text-[16px] duration-200 ${
                          !open && "scale-0"
                        }`}
                      >
                        Javascript Variables
                      </h2>
                    </li>
                    <li className="flex items-center  buttonn  pl-3 cursor-pointer">
                      {" "}
                      <h2
                        className={`  mb-0  text-[14px] lg:text-[16px] duration-200 ${
                          !open && "scale-0"
                        }`}
                      >
                              Javascript Keywords
                      </h2>
                    </li>
                    <li className="flex items-center  buttonn  pl-3 cursor-pointer">
                      <h2
                        className={`  mb-0  text-[14px] lg:text-[16px] duration-200 ${
                          !open && "scale-0"
                        }`}
                      >
                             Javascript Comments
                      </h2>
                    </li>
                    <li className="flex items-center  buttonn  pl-3 cursor-pointer">
                      <h2
                        className={`  mb-0  text-[14px] lg:text-[16px] duration-200 ${
                          !open && "scale-0"
                        }`}
                      >
                                  Javascript Identifier
                      </h2>
                    </li>
                    <li className="flex items-center  buttonn  pl-3 cursor-pointer">
                      <h2
                        className={` mb-0   text-[14px] lg:text-[16px] duration-200 ${
                          !open && "scale-0"
                        }`}
                      >
                        {" "}
                        Javascript Operator
                      </h2>
                    </li>
                    <li className="flex items-center  buttonn  pl-3 cursor-pointer">
                      <h2
                        className={`  mb-0  text-[14px] lg:text-[16px] duration-200 ${
                          !open && "scale-0"
                        }`}
                      >
                        Javascript First Program
                      </h2>
                    </li>
                    <li className="flex items-center  buttonn  pl-3 cursor-pointer">
                      <h2
                        className={`  mb-0  text-[14px] lg:text-[16px] duration-200 ${
                          !open && "scale-0"
                        }`}
                      >
                        Javascript First Program
                      </h2>
                    </li>
                    <li className="flex items-center  buttonn  pl-3 cursor-pointer">
                      <h2
                        className={`  mb-0  text-[14px] lg:text-[16px] duration-200 ${
                          !open && "scale-0"
                        }`}
                      >
                             Javascript Comments
                      </h2>
                    </li>
                    <li className="flex items-center  buttonn  pl-3 cursor-pointer">
                      <h2
                        className={`  mb-0  text-[14px] lg:text-[16px] duration-200 ${
                          !open && "scale-0"
                        }`}
                      >
                             Javascript Comments
                      </h2>
                    </li>
                    <li className="flex items-center  buttonn  pl-3 cursor-pointer">
                      <h2
                        className={`  mb-0  text-[14px] lg:text-[16px] duration-200 ${
                          !open && "scale-0"
                        }`}
                      >
                             Javascript Comments
                      </h2>
                    </li>
                    <li className="flex items-center  buttonn  pl-3 cursor-pointer">
                      <h2
                        className={`  mb-0  text-[14px] lg:text-[16px] duration-200 ${
                          !open && "scale-0"
                        }`}
                      >
                        Javascript First Program
                      </h2>
                    </li>
                    <li className="flex items-center  buttonn  pl-3 cursor-pointer">
                      <h2
                        className={`  mb-0  text-[14px] lg:text-[16px] duration-200 ${
                          !open && "scale-0"
                        }`}
                      >
                        Javascript First Program
                      </h2>
                    </li>
                    <li className="flex items-center  buttonn  pl-3 cursor-pointer">
                      <h2
                        className={`  mb-0  text-[14px] lg:text-[16px] duration-200 ${
                          !open && "scale-0"
                        }`}
                      >
                        Javascript First Program
                      </h2>
                    </li>
                    <li className="flex items-center  buttonn  pl-3 cursor-pointer">
                      <h2
                        className={`  mb-0  text-[14px] lg:text-[16px] duration-200 ${
                          !open && "scale-0"
                        }`}
                      >
                        Javascript First Program
                      </h2>
                    </li>
                    <li className="flex items-center  buttonn  pl-3 cursor-pointer">
                      <h2
                        className={`  mb-0  text-[14px] lg:text-[16px] duration-200 ${
                          !open && "scale-0"
                        }`}
                      >
                        Javascript First Program
                      </h2>
                    </li>
                    <li className="flex items-center  buttonn  pl-3 cursor-pointer">
                      <h2
                        className={`  mb-0  text-[14px] lg:text-[16px] duration-200 ${
                          !open && "scale-0"
                        }`}
                      >
                        Javascript First Program
                      </h2>
                    </li>
                    <li className="flex items-center  buttonn  pl-3 cursor-pointer">
                      <h2
                        className={`  mb-0  text-[14px] lg:text-[16px] duration-200 ${
                          !open && "scale-0"
                        }`}
                      >
                        Javascript First Program
                      </h2>
                    </li>
                    <li className="flex items-center  buttonn  pl-3 cursor-pointer">
                      <h2
                        className={`  mb-0  text-[14px] lg:text-[16px] duration-200 ${
                          !open && "scale-0"
                        }`}
                      >
                        Javascript First Program
                      </h2>
                    </li>
                    <li className="flex items-center  buttonn  pl-3 cursor-pointer">
                      <h2
                        className={`  mb-0  text-[14px] lg:text-[16px] duration-200 ${
                          !open && "scale-0"
                        }`}
                      >
                        Javascript First Program
                      </h2>
                    </li>
                    <li className="flex items-center  buttonn  pl-3 cursor-pointer">
                      <h2
                        className={`  mb-0  text-[14px] lg:text-[16px] duration-200 ${
                          !open && "scale-0"
                        }`}
                      >
                        Javascript First Program
                      </h2>
                    </li>
                    <li className="flex items-center  buttonn  pl-3 cursor-pointer">
                      <h2
                        className={`  mb-0  text-[14px] lg:text-[16px] duration-200 ${
                          !open && "scale-0"
                        }`}
                      >
                        Javascript First Program
                      </h2>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <h1 className="lg:ml-[235px] ml-0 lg:px-0 p-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, modi tempora sunt dolor illo similique atque earum inventore accusantium, dolorum aspernatur facilis animi amet odit autem itaque nobis deserunt, quia corporis temporibus? Recusandae nobis quae distinctio fuga enim tenetur sit, voluptatibus asperiores tempora? Alias sit repellat dolores quae asperiores ducimus quo similique, ut corrupti dolorum dignissimos adipisci maxime expedita enim earum consequuntur perferendis optio minima nemo aut. Iure repudiandae quasi aspernatur eveniet libero officia voluptate eligendi, excepturi doloremque facilis unde nihil, dicta rerum ut exercitationem provident minima labore odio. Consectetur cumque amet incidunt aut voluptatem quaerat vitae autem ut id dignissimos veniam aliquam culpa, iste facere debitis nemo modi nam minus ipsa velit nesciunt quia aspernatur illo. Sit, tempore, facilis repudiandae odio excepturi ea aliquid, labore quod eaque unde optio. Saepe voluptas soluta dolor iste. Eaque laudantium excepturi iste commodi, quam reiciendis nulla quod veritatis earum temporibus? Impedit aut illum consequuntur eaque facere provident adipisci? Dicta eveniet ea, voluptatum placeat molestiae cum non porro amet, laborum, iusto maxime. Magni ipsa eius consequatur aliquid doloremque quidem expedita aliquam beatae nostrum, officiis facilis modi iusto doloribus quos praesentium aperiam numquam? Sed recusandae amet ipsam qui alias facere voluptas, nulla similique, facilis dignissimos illum nesciunt id earum aperiam ut consequatur voluptatem? Obcaecati libero sunt maiores nam adipisci commodi doloremque modi corporis cupiditate dicta fugiat eveniet alias, harum nisi ullam repellat error rem possimus atque iure animi enim repellendus nesciunt vitae! Odio similique facilis magnam ut consequuntur optio in provident quae quisquam nesciunt? Voluptatem deserunt enim officiis dolore nemo velit beatae numquam! Impedit incidunt dolorum sapiente explicabo illum, consectetur, dolor dolorem iure ipsa quidem blanditiis necessitatibus quasi voluptate sequi reprehenderit. Itaque veritatis velit nulla repellat quidem beatae facilis neque deserunt sequi, sed id dicta et? Eum suscipit veniam excepturi unde eligendi, perferendis consectetur nisi facilis consequuntur quasi cum, sint nobis. Hic beatae quos quisquam expedita accusamus libero voluptas sapiente doloribus amet! Officiis, quos? Omnis ipsum doloremque tempore fuga a quos, iusto natus odio! Molestiae aperiam eum dolor minus temporibus facere ad eius hic dignissimos laudantium ipsum rem numquam voluptates deserunt magni, quisquam quibusdam dolorum placeat nam sit dicta vero, blanditiis minima. Earum harum, facere doloribus eius quisquam quos voluptate alias? Laborum soluta hic ipsum minus ducimus exercitationem corrupti praesentium esse omnis culpa eos, cumque saepe id aperiam animi. Dicta quidem recusandae sequi delectus eos, incidunt illo nostrum, rerum expedita veniam nihil id unde ipsa nobis ea illum. Quia, illum sunt. Incidunt, ullam. Perspiciatis asperiores corrupti libero, enim fugiat magnam alias aperiam voluptas dolorum, soluta earum quo commodi sit adipisci nam assumenda delectus ducimus esse laborum dolore. Iste eum minima placeat maxime perspiciatis, ut modi minus deleniti error adipisci iusto esse temporibus quisquam quam, sequi amet totam? Vel dignissimos, illum deserunt veritatis nostrum totam! Earum rerum pariatur modi cum! Dolorum tenetur assumenda laudantium minima corporis ea eveniet vitae dolorem dolores qui praesentium sit voluptate unde nulla magni labore laborum recusandae placeat, necessitatibus perferendis. Aut nulla temporibus eaque, in ex nisi ullam magnam voluptate assumenda dicta incidunt doloribus vel et excepturi minus placeat, itaque dolorum omnis sed eligendi adipisci vitae ea? Ipsam, ipsum? Alias aspernatur nisi provident enim accusamus, adipisci ea tenetur necessitatibus quos earum rerum sequi esse laboriosam distinctio? Praesentium, quod delectus facere quo incidunt, quia ipsum libero quam veritatis perferendis, quidem iure nulla qui corrupti amet velit quaerat officia atque tenetur sequi explicabo eum! Hic rerum iusto quod. Ad accusantium adipisci, quis enim ex voluptate laborum hic minima obcaecati non quod iusto quia consequatur corrupti dolores totam. Nihil vel omnis iure cumque impedit error, eaque nisi aliquid debitis dicta laudantium porro quibusdam possimus in quo fugiat odio cum sit aperiam! Recusandae mollitia blanditiis sed et, perspiciatis, nostrum hic animi officiis molestiae adipisci optio tempora reprehenderit, saepe voluptas quibusdam illum explicabo earum sequi! Beatae tempore nobis accusantium consectetur. Vel eum voluptates veritatis aspernatur assumenda fuga possimus sed expedita! Non aut, natus, a impedit magni beatae praesentium quae modi quasi eius laboriosam in quo suscipit possimus! Ab temporibus repellendus perspiciatis, minima inventore maxime eum unde ipsa quo in odit aspernatur amet nesciunt molestias sed cumque incidunt culpa animi dolores labore. Nisi dolorum temporibus quia iste fuga recusandae distinctio, repellat error exercitationem minus placeat at nihil ea veniam voluptate iure sit voluptatem beatae! Odit doloremque, magnam sapiente ab cumque expedita consequatur doloribus vitae reiciendis nisi, aperiam nam nulla tempore, fugiat minima unde pariatur nostrum. Nesciunt pariatur maiores explicabo. Deserunt quis eum vel mollitia ea non sunt obcaecati, reiciendis illo a illum nam vero consequuntur expedita maiores repellendus magnam veritatis. Quidem hic architecto, consectetur blanditiis saepe non facilis quia, laudantium expedita quisquam omnis similique odit praesentium nam consequatur rem. Rerum tempore sed est debitis rem quo laborum perspiciatis labore in voluptates quos placeat voluptate neque culpa veniam nesciunt odit, repudiandae, omnis voluptatem consequatur iusto eum. Minima in inventore officiis eligendi maiores culpa laboriosam molestiae ducimus. Eum blanditiis ullam corporis amet sapiente ratione in, accusantium voluptatem et illum minus architecto at aliquid quae ab optio culpa fugiat eaque eius ipsam. Voluptates ad ratione quis, pariatur ea expedita molestiae odio similique fuga sed! Doloremque nesciunt molestias veritatis est soluta recusandae doloribus rerum sit ad eveniet inventore quas modi numquam, omnis totam. Recusandae magnam inventore perspiciatis quam laudantium totam deserunt eius, obcaecati, cupiditate perferendis at eveniet quasi nulla molestiae cum esse corrupti. Magni modi esse eius tempora dignissimos quibusdam consectetur porro blanditiis fugit perferendis iste veritatis recusandae commodi illo eum, expedita deserunt cum natus in explicabo laboriosam facilis amet saepe nobis? Expedita iusto accusamus eius officiis doloremque quidem tenetur praesentium, dolor, maxime doloribus repudiandae. Eos ipsum quod ea officiis, ex hic sunt obcaecati. Magni dolorem perferendis optio animi quaerat sequi dolor, voluptates alias recusandae repellendus aut, culpa provident esse ipsa minus, quod quibusdam natus aliquam consequuntur enim tempore. Quos accusamus aliquid temporibus libero aperiam sunt, voluptatum officiis placeat unde qui nihil optio facilis dolorem quis dignissimos vero tempora beatae cumque laborum incidunt possimus! Pariatur necessitatibus reiciendis corporis molestias. Officia qui vel, ipsa fugiat tempore iure. Debitis iure ipsum consequuntur eligendi aspernatur.
          </h1>
        </div>
      </div>
    </>
  );
}

export default Sidebar;


export const Navbar = ({open, setOpen, mob , setmob}) => {
   let navs = document.querySelectorAll(".nav");
  console.log(navs);
  navs.forEach((nav) => {
    nav.addEventListener("click", () => {
      reset();
      nav.classList.add("activeNav");
    });
  });

  function reset() {
    navs.forEach((nav) => nav.classList.remove("activeNav"));
  }

  return (
    
<nav class="bg-[#1c076c] border-gray-200 px-2 sm:px-4  h-12 dark:bg-gray-800">
  <div class=" flex justify-between items-center ">
<div className="flex text-white w-4/5">
  <div className="flex  h-12 items-center    justify-center px-4 cursor-pointer mr-3  w-full ">
  <span className="hidden lg:flex nav ">

JAVA QUERY
  </span>

<div className="mb-3  absolute lg:hidden flex animate-bounce lg:animate-none  top-3 left-4 z-10 ">
              <BsFillArrowLeftCircleFill
                className={`cursor-pointer     h-9 w-9  duration-300
             ${!open && "rotate-180 duration-300 "}`}
                onClick={() => {
                  setOpen(!open);
                  setmob(!mob);
                }}
              />
            </div>
  </div>



  <div className="hidden lg:flex h-12 nav  items-center hover:bg-white hover:text-black justify-center px-4 cursor-pointer mr-3  w-full ">
CSS
  </div>
  <div className="hidden lg:flex h-12 nav  items-center hover:bg-white hover:text-black justify-center px-4 cursor-pointer mr-3  w-full ">
JAVASCRIPT
  </div>
  <div className="hidden lg:flex h-12 nav  items-center hover:bg-white hover:text-black justify-center px-4 cursor-pointer mr-3  w-full ">
SQL
  </div>
  <div className="hidden lg:flex h-12  nav items-center hover:bg-white hover:text-black justify-center px-4 cursor-pointer mr-3  w-full ">
PYTHON
  </div>
  <div className="hidden lg:flex h-12 nav  items-center hover:bg-white hover:text-black justify-center px-4 cursor-pointer mr-3  w-full ">
JAVA
  </div>
  <div className="hidden lg:flex h-12 nav  items-center hover:bg-white hover:text-black justify-center px-4 cursor-pointer mr-3  w-full ">
PHP
  </div>

  
  
</div>
<div className="flex  text-white h-12 items-center w-14 justify-center px-4 cursor-pointer mr-3   ">
Search
  </div>
  </div>
</nav>

  )
}
