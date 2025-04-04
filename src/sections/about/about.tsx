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
                    Agende já uma avaliação!
                </p>
                <ScheduleBtn />
            </article>
            <img className='about-img' src={fisioterapeuta} alt="images-fisioterapeuta" />
        </section>
    )
}

export default About
