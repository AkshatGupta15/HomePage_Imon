/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Types
type CarouselItem = {
  image: string;
  text: string;
  description?: string;
};

type GalleryImage = {
  url: string;
  caption: string;
  description?: string;
};



// Data
import carouselDataRaw from '../data/GalleryCarousel.json';
const carouselData: CarouselItem[] = carouselDataRaw;
import galleryData from '../data/GallerySections.json';
import { getFullImageUrl } from '@/utils/getFullImageUrl';

// Main Component
const GalleryPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 lora-bold-700 text-center">Gallery</h1>

      {/* Carousel with surrounding images (only on large screens) */}
      <div className="mb-16">
        {/* Mobile */}
        <div className="w-full lg:hidden">
          <EnhancedCarousel mobile />
        </div>

        {/* Desktop */}
        <div className="hidden lg:flex flex-row gap-6 items-center mb-8">
          <div className="w-1/4 grid grid-cols-2 gap-4">
            {galleryData[0]?.images.slice(0, 4).map((image, index) => (
              <GalleryCard key={`left-${index}`} image={image} compact />
            ))}
          </div>

          <div className="w-2/4">
            <EnhancedCarousel />
          </div>

          <div className="w-1/4 grid grid-cols-2 gap-4">
            {galleryData[0]?.images.slice(4, 8).map((image, index) => (
              <GalleryCard key={`right-${index}`} image={image} compact />
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Sections */}
      <div className="space-y-16">
        {galleryData.map((section, index) => (
          <GallerySection
            key={index}
            title={section.title}
            images={section.images}
            layout={index % 2 === 1 ? 'grid' : 'masonry'}
          />
        ))}
      </div>
    </div>
  );
};

// Carousel Component
const EnhancedCarousel = ({ mobile = false }: { mobile?: boolean }) => {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % carouselData.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToSlide = (index: number) => {
    setCurrent(index);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 3000);
  };

  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl shadow-lg ${mobile ? 'aspect-[4/3]' : ''}`}
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      <div className={`relative ${mobile ? 'h-full' : 'aspect-video h-auto max-h-[70vh]'}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 z-10"
          >
            <img
              src={getFullImageUrl(carouselData[current].image)}
              alt={carouselData[current].text}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-6">
              <p className="text-white text-sm md:text-lg font-medium">{carouselData[current].text}</p>
              {!mobile && carouselData[current].description && (
                <p className="text-white/90 text-xs md:text-sm mt-1">{carouselData[current].description}</p>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-2 md:bottom-4 left-0 right-0 z-20 flex justify-center space-x-1 md:space-x-2">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
              index === current ? 'bg-white scale-125' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={() => {
          setCurrent((prev) => (prev - 1 + carouselData.length) % carouselData.length);
          setIsPlaying(false);
        }}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-1 md:p-2 rounded-full"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="w-4 h-4 md:w-6 md:h-6" />
      </button>

      <button
        onClick={() => {
          setCurrent((prev) => (prev + 1) % carouselData.length);
          setIsPlaying(false);
        }}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-1 md:p-2 rounded-full"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="w-4 h-4 md:w-6 md:h-6" />
      </button>
    </div>
  );
};

// Section Component
const GallerySection = ({ title, images, layout }: { title: string; images: GalleryImage[]; layout: string }) => {
  return (
    <section className="animate-fadeIn">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-gray-800 border-b pb-2">{title}</h2>
      {images.length === 0 ? (
        <p className="text-gray-500 italic">No images available for this section.</p>
      ) : layout === 'grid' ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4">
          {images.map((image, index) => (
            <GalleryCard key={index} image={image} compact />
          ))}
        </div>
      ) : (
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-2 md:gap-4">
          {images.map((image, index) => (
            <div key={index} className="mb-2 md:mb-4 break-inside-avoid">
              <GalleryCard image={image} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

// Card Component
const GalleryCard = memo(({ image, compact = false }: { image: GalleryImage; compact?: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 ${
        compact ? 'aspect-square' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={getFullImageUrl(image.url)}
        alt={image.caption}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        loading="lazy"
      />
      {(image.caption || image.description) && (
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2 md:p-4 flex flex-col justify-end transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {image.caption && <p className="text-white text-xs md:text-sm font-medium">{image.caption}</p>}
          {image.description && !compact && (
            <p className="text-white/90 text-xs">{image.description}</p>
          )}
        </div>
      )}
    </div>
  );
});

const ChevronLeftIcon = ({ className = '' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = ({ className = '' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export default GalleryPage;