import { useEffect } from 'react'
import NavBtn from './components/buttons/nav-btn/nav-btn'
import About from './sections/about/about'
import Map from './widgets/map/map'
import TeamSwiper from './sections/team/team'

import headerBanner from './assets/images/headerBanner.png'
import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    })
  }, [])

  return (
    <>
      <header>
        <img className="banner-logo" src={headerBanner} alt="banner" />
        <nav>
          <NavBtn />
        </nav>
      </header>
      <About />
      <section className='location' id='2'>
        <Map />
      </section>
      <section data-aos="fade-up"
        data-aos-anchor-placement="top-bottom" className='team' id='3'>
        <TeamSwiper />
      </section>
      <section className='contacts' id='4'>
        <h1>Entre em contato conosco</h1>
      </section>

    </>
  )
}

export default App
