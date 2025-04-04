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
  const [thumbsSwiper] = useState<SwiperClass | null>(null);

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
          <div className='team description'>
            <h2 className='team-title' data-aos="fade-right"
              data-aos-anchor-placement="top-bottom"> Nosso time de tecnico!</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={fisioterapeuta1} alt="Fisioterapeuta 1" />
          <div className='description'>
            <h1 className='medic-name'> Dra. Ana Beatriz Lima</h1>
            <h2 className='speciality'><span>Fisioterapia Pediátrica </span></h2>
            <h3 className='resume'> Atua há 5 anos com fisioterapia pediátrica,
              ajudando pequenos pacientes com dificuldades motoras a
              se desenvolverem com mais autonomia e confiança.
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={fisioterapeuta2} alt="Fisioterapeuta 2" />
          <div className='description'>
            <h1 className='medic-name'> Dr. Rafael Monteiro</h1>
            <h2 className='speciality'><span> Reabilitação Ortopédica </span></h2>
            <h3 className='resume'> Atua há mais de 8 anos, com foco em recuperação
              pós-cirúrgica e prevenção de lesões esportivas.
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={fisioterapeuta3} alt="Fisioterapeuta 3" />
          <div className='description'>
            <h1 className='medic-name'>Dr. Lucas Andrade</h1>
            <h2 className='speciality'><span> Fisioterapia Esportiva </span> </h2>
            <h3 className='resume'> Com 7 anos de atuação, Lucas trabalha com atletas
              amadores e profissionais,
              utilizando técnicas modernas de recuperação funcional.
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={fisioterapeuta4} alt="Fisioterapeuta 4" />
          <div className='description'>
            <h1 className='medic-name'> Dra. Mariana Costa</h1>
            <h2 className='speciality'><span> Fisioterapia Neurológica </span></h2>
            <h3 className='resume'>trabalha há 6 anos na reabilitação de pacientes com
              doenças neurológicas, como AVC e Parkinson.
            </h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
