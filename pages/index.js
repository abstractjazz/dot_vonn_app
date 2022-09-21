import MainPage from '../components/MainPage'
import Portfolio from '../components/Portfolio'
import HowItWorks from '../components/HowItWorks'
import Contact from '../components/Contact'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import Services from '../components/Services'
import MainPage2 from '../components/MainPage2'

export default function Main() {
  return (
   <section>
   <MainPage />
   {/* <MainPage2/> */}
   {/* <Portfolio/> */}
   <Services/>
   <HowItWorks/>
   <CTA/>
   <Contact/>
   <FAQ/>
   </section>
  )
}
