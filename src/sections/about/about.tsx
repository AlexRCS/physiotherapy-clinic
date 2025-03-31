import fisioterapeuta from '../../assets/images/fisioterapeuta.png'
import ScheduleBtn from '../../components/buttons/schedule-btn/schedule-btn'

import './about.css'

function About() {
    return (
        <section data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" className='about' id='1'>
            <article>
                <span>
                    Quer dar o primeiro passo rumo à recuperação e ao bem-estar?
                </span>
                <p>
                    Procure nossa clínica e agende uma avaliação.
                </p>
                <ScheduleBtn />
            </article>
            <img src={fisioterapeuta} alt="images-fisioterapeuta" />
        </section>
    )
}

export default About
