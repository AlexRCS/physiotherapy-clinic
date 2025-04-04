import { useEffect } from 'react'
import NavBtn from './components/buttons/nav-btn/nav-btn'
import About from './sections/about/about'
import Map from './widgets/map/map'
import TeamSwiper from './sections/team/team'
import Footer from './sections/footer/footer'

import headerBanner from './assets/images/headerBanner.png'
import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Relates from './sections/relates/relates'
import ToUpsideBtn from './components/buttons/to-upside-btn/to-upside-btn'



function App() {
  useEffect(() => {
    AOS.init({
      duration: 2500,
      once: true,
    })
  }, [])

  return (
    <>
      <header>
        <img id='0' className="banner-logo" src={headerBanner} alt="banner" />
        <nav >
          <NavBtn />
        </nav>
      </header>
      <ToUpsideBtn />
      <About />
      <section className='location' id='2'>
        <Map />
      </section>
      <section data-aos="fade-up"
        data-aos-anchor-placement="top-bottom" className='team' id='3'>
        <TeamSwiper />
      </section>
      <Relates />
      <Footer />
    </>
  )
}

export default App
