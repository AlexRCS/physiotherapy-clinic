import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper';

import team from '../../assets/images/team.png';
import fisioterapeuta1 from '../../assets/images/fisioterapeuta1.png'
import fisioterapeuta2 from '../../assets/images/fisioterapeuta2.png'
import fisioterapeuta3 from '../../assets/images/fisioterapeuta3.png'
import fisioterapeuta4 from '../../assets/images/fisioterapeuta4.png'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './team.css';

export default function TeamSwiper() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <>
      <Swiper
        style={
          {
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          } as React.CSSProperties
        }
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={team} alt="Team" />
          <h2 className='swiper-txt'> Nosso time de tecnico!</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={fisioterapeuta1} alt="Fisioterapeuta 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fisioterapeuta2} alt="Fisioterapeuta 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fisioterapeuta3} alt="Fisioterapeuta 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fisioterapeuta4} alt="Fisioterapeuta 4" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={(swiper: SwiperClass) => setThumbsSwiper(swiper)}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={fisioterapeuta1} alt="Fisioterapeuta 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fisioterapeuta2} alt="Fisioterapeuta 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fisioterapeuta3} alt="Fisioterapeuta 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fisioterapeuta4} alt="Fisioterapeuta 4" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
