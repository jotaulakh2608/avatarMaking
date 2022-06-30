import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export const EditCodeExampler = ({setprofile , setmainImage}) => {
    
  const slideRight = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 400;
  };
  const slideLeft = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 400;
    
  };

 

    const [selectedImage, setselectedImage] = useState("https://i.ibb.co/VHVbzMK/Screenshot-80-removebg-preview.png")
    useEffect(() => {
        setselectedImage(window.localStorage.getItem('profile'));
  
    }, [])
    useEffect(() => {
        window.localStorage.setItem('profile', selectedImage)
      }, [selectedImage])
    
  return (
    <div className="flex items-center justify-center h-screen ">


    <div className="flex bb w-[1200px] h-[600px] py-14 px-24  bg-white">
    <div className="flex flex-col bb h-full w-5/12 px-4  scrollbar-hide scroll border border-gray-200 overflow-y-scroll ">
        <div className="flex h-20 border-b border-gray-200 items-center fixed bg-white w-[400px] ">
            
            <h1 className=' text-2xl text-[#ff4500] mr-4 '>
                Explore
            </h1>
            <h1 className='text-2xl text-[#636669] mr-4 '>
               Style
            </h1>
            <h1 className='text-2xl text-[#636669] mr-4 '>
                Me
            </h1>
        </div>
    
        <div className=" mt-20">
    
    
        <h1 className="text-xl">
            Stranger Things
        </h1>
        <div onClick={slideLeft}  className=" cursor-pointer bg-white rounded-full h-6 w-6 flex items-center justify-center relative translate-y-24 mr-auto ml-3 ">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
</svg>
        </div>
    
        <div id='slider' className="flex w-full scrollbar-hide  overflow-x-scroll scroll scrollbar-hide whitespace-nowrap   scroll-smooth">
    
        {images.map((img, key) =>(
           <>
        <img src={img.imgs} key={key}  onClick={()=> { setselectedImage(img.imgsRemoved) ; setmainImage(img.imgs)} } className='h-44 inline-block w-32 mr-2 rounded-xl' alt="" />
       
    </>
        ))}
    
    
    
        </div>
        <div onClick={slideRight}  className=" cursor-pointer bg-white rounded-full h-6 w-6 flex items-center justify-center relative -translate-y-24 ml-auto mr-3 ">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
</svg>
        </div>
        </div>
        <div className="">
    
    
        <h1 className="text-xl">
          Destiny 2: The Witch Queen 
        </h1>
    
        <div className="flex w-full  overflow-x-scroll scroll whitespace-nowrap  scroll-smooth">
    
        {images2.map(img =>(
           
            <img src={img.imgs} className='h-44 inline-block w-32 mr-2 rounded-xl' alt="" />
       
        ))}
    
    
    
        </div>
        </div>
    </div>
    <div className="flex flex-col bb h-full w-7/12 ">
    
    <div className="flex flex-col items-center  justify-center">
    <div className="h-[450px] flex items-center justify-center bb">
    
    <img src={selectedImage} alt="" className={ selectedImage==="https://i.ibb.co/VHVbzMK/Screenshot-80-removebg-preview.png"? 'h-[400px] w-[] pr-5 pt-3': 'h-[450px] w-[350px]'} /> 
    </div>
    
    <div className="flex">
    
    <button onClick={()=>setselectedImage("https://i.ibb.co/VHVbzMK/Screenshot-80-removebg-preview.png")} className='rounded-full button h-8 w-32 mr-2 font-bold text-base mb-2  text-white flex items-center justify-center'>
        Reset 
    </button>
    <Link to='/'>

    <button onClick={()=> setprofile(selectedImage)}   className='rounded-full button h-8 w-32 font-bold text-base mb-2  text-white flex items-center justify-center'>
        Save 
    </button>
    </Link>
    </div>
    
    </div>
    
    
    </div>
    
    </div>
    
    </div>
  )
}


export const images = [
  {
    id: "1",
    imgs: "https://i.redd.it/snoovatar/snoo_assets/runways/l7ZSjweYdUA_avatar_60678560.jpg",
    imgsRemoved:"https://i.ibb.co/CVzKVw2/l7-ZSjwe-Yd-UA-avatar-60678560-removebg-preview.png",
    name: "Eleven",
  },
  {
    id: "2",
    imgs: "https://i.redd.it/snoovatar/snoo_assets/runways/CIWKiCY7py4_avatar_60680747.jpg",
    imgsRemoved:"https://i.ibb.co/yQR48pG/CIWKi-CY7py4-avatar-60680747-removebg-preview.png",
    name: "Glleven",
  },
  {
    id: "3",
    imgs: "https://i.redd.it/snoovatar/snoo_assets/runways/HLR0GfGDfTo_avatar_60679866.jpg",
    imgsRemoved:"https://i.ibb.co/JthHHcY/HLR0-Gf-GDf-To-avatar-60679866-removebg-preview.png",
    name: "Mven",
  },
  {
    id: "4",
    imgs: "https://i.redd.it/snoovatar/snoo_assets/runways/MW-3MmTkvzs_avatar_60679984.jpg",
    imgsRemoved:"https://i.ibb.co/P62RtRF/MW-3-Mm-Tkvzs-avatar-60679984-removebg-preview.png",
    name: "Twleven",
  },
];
export const images2 = [
  {
    id: "1",
    imgs: "https://i.redd.it/snoovatar/snoo_assets/runways/CrCAxscb3fE_avatar_44903546.jpg",
    name: "Saver",
  },
  {
    id: "2",
    imgs: "https://i.redd.it/snoovatar/snoo_assets/runways/UKnGSoLIxyQ_avatar_44904068.jpg",
    name: "Mogou",
  },
  {
    id: "3",
    imgs: "https://i.redd.it/snoovatar/snoo_assets/runways/MAxhE9KnCjc_avatar_44904370.jpg",
    name: "Loso",
  },
  {
    id: "4",
    imgs: "https://i.redd.it/snoovatar/snoo_assets/runways/u3bT4J2tjzc_avatar_44904747.jpg",
    name: "Likaj",
  },
  {
    id: "5",
    imgs: "https://i.redd.it/snoovatar/snoo_assets/runways/5jueZteO--U_avatar_44904936.jpg",
    name: "Shiigi",
  },
];
