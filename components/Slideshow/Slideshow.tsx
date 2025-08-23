'use client';
import {Swiper, SwiperSlide} from 'swiper/react';
import {AssetBlock} from '@/lib/contentful/types';
import {Navigation, Pagination, A11y, Autoplay} from 'swiper/modules';
import {contentfulLoader} from '@/lib/contentful/utils';
import {StyledImage} from './Slideshow.styled';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SlideshowProps {
  className?: string;
  images: AssetBlock[];
}

export const Slideshow = ({className, images}: SlideshowProps) => {
  return (
    <Swiper
      className={className}
      modules={[A11y, Autoplay, Navigation, Pagination]}
      autoplay={{
        delay: 5000,
        pauseOnMouseEnter: true,
      }}
      navigation
      pagination
    >
      {images?.map((image) => (
        <SwiperSlide key={image.sys.id} style={{position: 'relative'}}>
          <StyledImage
            src={`${image.url}`}
            alt={image.description || image.title}
            width={image.width}
            height={image.height}
            loader={() =>
              contentfulLoader({
                src: image.url,
                height: 724,
              })
            }
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
