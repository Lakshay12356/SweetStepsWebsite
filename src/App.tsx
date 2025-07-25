import ChoosePackage from './components/Packages'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import BookingOptions from './components/Bookings'
import FAQ from './components/Faq'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <ChoosePackage />
      <Testimonials />
      <BookingOptions />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default App