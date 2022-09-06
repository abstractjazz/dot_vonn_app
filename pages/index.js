import MainPage from '../components/MainPage'
import Portfolio from '../components/Portfolio'
import HowItWorks from '../components/HowItWorks'
import Contact from '../components/Contact'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'

export default function Main() {
  return (
   <section>
   <MainPage />
   <Portfolio/>
   <HowItWorks/>
   <CTA/>
   <Contact/>
   <FAQ/>
   </section>
  )
}
