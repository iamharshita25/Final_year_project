import React, { useState, useEffect, useRef } from 'react';
import './Ad.scss';
import img1 from './i1.jpg';
import img2 from './i2.avif';
import img3 from './i3.webp';
import img4 from './i4.webp';
import img5 from './i5.webp';

function Ad() {
    const images = [img1, img2, img3, img4, img5];
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef();

    const startSlideShow = () => {
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds
    };

    const stopSlideShow = () => {
        clearInterval(intervalRef.current);
    };

    useEffect(() => {
        startSlideShow();
        return () => stopSlideShow(); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="ad">
            <div className="ad__container">
                <div
                    className="image-container"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div
                            className="images"
                            key={index}
                            onMouseEnter={stopSlideShow}
                            onMouseLeave={startSlideShow}
                        >
                            <img src={image} alt={`Ad ${index}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Ad;
