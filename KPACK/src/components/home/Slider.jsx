import React, { useEffect } from 'react'
import { useState } from 'react';

function Slider() {
    const [currentIndex, setCurrentIndex] = useState(1);

    const images = [
        "https://desagri.gov.in/wp-content/uploads/2021/05/WB08.png",
    "https://desagri.gov.in/wp-content/uploads/2021/05/WB09.png",
    "https://desagri.gov.in/wp-content/uploads/2021/05/WB10.png",
    "https://desagri.gov.in/wp-content/uploads/2021/05/WB11.png",
    "https://desagri.gov.in/wp-content/uploads/2021/05/WB12.png",
    "https://desagri.gov.in/wp-content/uploads/2021/05/WB13.png",
    "https://desagri.gov.in/wp-content/uploads/2021/05/WB14.png",
    "https://desagri.gov.in/wp-content/uploads/2021/05/WB15.png",
    "https://desagri.gov.in/wp-content/uploads/2021/10/Azadi-K-Amrit.png",
    "https://desagri.gov.in/wp-content/uploads/2021/05/WB01.png",
    "https://desagri.gov.in/wp-content/uploads/2021/05/WB02.png",
    "https://desagri.gov.in/wp-content/uploads/2021/05/WB03.png",
    "https://desagri.gov.in/wp-content/uploads/2021/05/WB04.png",
    "https://desagri.gov.in/wp-content/uploads/2021/05/WB05.png",
    "https://desagri.gov.in/wp-content/uploads/2021/05/WB06.png",
    "https://desagri.gov.in/wp-content/uploads/2021/05/WB07.png",
    "https://desagri.gov.in/wp-content/uploads/2021/05/WB08.png",
    "https://desagri.gov.in/wp-content/uploads/2021/05/WB09.png",
    "https://desagri.gov.in/wp-content/uploads/2021/05/WB10.png",
    "https://desagri.gov.in/wp-content/uploads/2021/05/WB11.png",
    "https://desagri.gov.in/wp-content/uploads/2021/05/WB12.png",
    "https://desagri.gov.in/wp-content/uploads/2021/05/WB13.png",
    "https://desagri.gov.in/wp-content/uploads/2021/05/WB14.png",
    "https://desagri.gov.in/wp-content/uploads/2021/05/WB15.png",
    "https://desagri.gov.in/wp-content/uploads/2021/10/Azadi-K-Amrit.png",
    "https://desagri.gov.in/wp-content/uploads/2021/05/WB01.png",
    "https://desagri.gov.in/wp-content/uploads/2021/05/WB02.png",
    "https://desagri.gov.in/wp-content/uploads/2021/05/WB03.png",
    "https://desagri.gov.in/wp-content/uploads/2021/05/WB04.png",
    "https://desagri.gov.in/wp-content/uploads/2021/05/WB05.png",
    "https://desagri.gov.in/wp-content/uploads/2021/05/WB06.png",
    "https://desagri.gov.in/wp-content/uploads/2021/05/WB07.png",
    "https://desagri.gov.in/wp-content/uploads/2021/03/india_gov.jpg",
    "https://desagri.gov.in/wp-content/uploads/2021/03/my_gov.jpg",
    "https://desagri.gov.in/wp-content/uploads/2021/03/digital_india.jpg",
    "https://desagri.gov.in/wp-content/uploads/2021/03/data_gov_in.jpg",
    "https://desagri.gov.in/wp-content/uploads/2021/03/make_in_india.jpg",
    "https://desagri.gov.in/wp-content/uploads/2021/03/india_gov.jpg",
    "https://desagri.gov.in/wp-content/uploads/2021/03/my_gov.jpg",
    "https://desagri.gov.in/wp-content/uploads/2021/03/digital_india.jpg",
    "https://desagri.gov.in/wp-content/uploads/2021/03/data_gov_in.jpg",
    "https://desagri.gov.in/wp-content/uploads/2021/03/make_in_india.jpg",
    "https://desagri.gov.in/wp-content/uploads/2021/03/india_gov.jpg"
    ];

    function nextSlide() {
        console.log("next slide");
        
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    function prevSlide() {
        console.log({images});[currentIndex]
        
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    useEffect(() => {
      const id=setInterval(() => {
        setCurrentIndex(currentIndex+1);
      }, 5000);
      console.log("image move ahead");
      ()=>clearInterval(id);
    }, [currentIndex])
    
  return (
    <div className="relative w-full h-64">
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                className="w-full h-full object-cover"
            />
            <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow"
            >
                &#10094; {/* Previous Arrow */}
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow"
            >
                &#10095; {/* Next Arrow */}
            </button>
        </div>
  )
}

export default Slider