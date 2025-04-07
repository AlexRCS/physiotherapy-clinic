import { useEffect, useState } from 'react'
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
import Sidebar from './components/buttons/side-bar/side-bar'



function App() {

  const [isOpen, setIsOpen] = useState(false)

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
        <Sidebar />
        <nav >
          <NavBtn setIsOpen={setIsOpen} />
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
