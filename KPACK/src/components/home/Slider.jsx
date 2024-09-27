import React, { useEffect } from 'react'
import { useState } from 'react';


function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
    // "https://desagri.gov.in/wp-content/uploads/2021/03/india_gov.jpg"
        "/src/components/home/WB09.png",
        "/src/components/home/WB10.png",
        "/src/components/home/WB11.png",
        "/src/components/home/WB12.png"
    ];

    function nextSlide() {
        console.log("next slide");
        
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    function prevSlide() {
        console.log("prev slide");
        
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    useEffect(() => {
      const id=setInterval(() => {
        setCurrentIndex((prevIndex)=>(prevIndex+1)%images.length);
      }, 5000);
    //   console.log(images[currentIndex]);
      return ()=>clearInterval(id);
    }, [])

   
    
  return (
    
    <div 
    className="relative w-full h-64"
    >
        
            <button
                onClick={()=> prevSlide()}
                className="absolute  left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow"
            >
                &#10094; {/* Previous Arrow */}
            </button>
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                // className="w-full h-full object-cover"
            />
            
            <button
                onClick={()=> nextSlide()}
                className="absolute  right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow"
            >
                &#10095; {/* Next Arrow */}
            </button>
        </div>
    
  )
}

export default Slider