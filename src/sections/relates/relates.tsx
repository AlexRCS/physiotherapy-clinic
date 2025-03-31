import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import relatef from '../../assets/images/relatef.png'
import relatem from '../../assets/images/relatem.png'

import './relates.css';

import { FreeMode, Pagination, Navigation } from 'swiper/modules';

export default function Relates() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination, Navigation]}
                className="relates-swiper"
            >
                <SwiperSlide>
                    <div className='relate-user' id='4'>
                        <img src={relatef} alt="user-img" />
                        <h3 className='relate-name'>Juliana S.</h3>
                    </div>
                    <p>Voltei a andar sem dor. Gratidão imensa!</p>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relate-user'>
                        <img src={relatem} alt="user-img" />
                        <h4 className='relate-name'>Marcos A.</h4>
                    </div>
                    <p>Melhorei rápido graças ao cuidado de vocês.</p>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relate-user'>
                        <img src={relatem} alt="user-img" />
                        <h4 className='relate-name'>Rafael L</h4>
                    </div>
                    <p>Atendimento impecável. Só tenho a agradecer!</p>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relate-user'>
                        <img src={relatem} alt="user-img" />
                        <h4 className='relate-name'>Daniel P.</h4>
                    </div>
                    <p>Alívio total das dores. Muito obrigado!</p>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relate-user'>
                        <img src={relatef} alt="user-img" />
                        <h4 className='relate-name'>Renata C.</h4>
                    </div>
                    <p>Cuidaram de mim como família. Obrigada!</p>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relate-user'>
                        <img src={relatef} alt="user-img" />
                        <h4 className='relate-name'>Camila R.</h4>
                    </div>
                    <p>Transformaram minha rotina. Eternamente grata!</p>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relate-user'>
                        <img src={relatem} alt="user-img" />
                        <h4 className='relate-name'>Gustavo F.</h4>
                    </div>
                    <p>Foram essenciais na minha recuperação. Gratidão! </p>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relate-user'>
                        <img src={relatem} alt="user-img" />
                        <h4 className='relate-name'>Henrique V.</h4>
                    </div>
                    <p>Profissionalismo e carinho em cada sessão. Obrigado! </p>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relate-user'>
                        <img src={relatef} alt="user-img" />
                        <h4 className='relate-name'>Bianca T.</h4>
                    </div>
                    <p>Profissionais incríveis. Senti confiança desde o início.</p>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
