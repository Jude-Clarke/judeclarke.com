import React from 'react'
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/scrollbar";

const Image = styled.img`
    width: 100%;
    max-height: 480px;
    aspect-ratio: 30/19;
    object-fit: cover;
    border-radius: 12px;
    margin-top: 30px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
    @media only screen and (max-width: 500){
        max-height: 220px;
    }
    @media only screen and (max-width: 768px){
        max-height: 350px;
    }
`;
const ImageDesc = styled.div`
    margin: 20px 0 44px;
`

const Carousel = (props) => {
    const { slides } = props;
  return (
    <Swiper
    //install Swiper modules
    modules={[Navigation, Pagination, A11y]}
    spaceBetween={0}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    onSlideChange={() => console.log("slide change")}
    onSwiper={(swiper) => console.log(swiper)}
    >
        {slides.map(slide => 
            <SwiperSlide key={slide.id}>
                <Image src={slide.image} />
                <ImageDesc>{slide.desc}</ImageDesc>
            </SwiperSlide>
        )}
    </Swiper>
  );
};

export default Carousel