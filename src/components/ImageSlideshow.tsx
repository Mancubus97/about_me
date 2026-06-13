import { useState, useEffect } from 'react';
import './ImageSlideshow.css';

export type ImageSlideshowProps = {
  images?: string[];
  title: string;
  interval?: number; // milliseconds between slides
};

const ImageSlideshow = ({ images = [], title, interval = 3000 }: ImageSlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate images
  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  if (images.length === 0) {
    return <div className="slideshow">No images available</div>;
  }

  return (
    <div className="slideshow">
      <div className="slideshow-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${title} - slide ${index + 1}`}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button className="prev" onClick={goToPrevious}>
            &#10094;
          </button>
          <button className="next" onClick={goToNext}>
            &#10095;
          </button>

          <div className="dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageSlideshow;
