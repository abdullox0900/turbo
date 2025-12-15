import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection"
import FeaturesSection from "./components/FeaturesSection/FeaturesSection"
import BenefitsSection from "./components/BenefitsSection/BenefitsSection"
import PricingSection from "./components/PricingSection/PricingSection"
import ConceptSection from "./components/ConceptSection/ConceptSection"
import HowItWorksSection from "./components/HowItWorksSection/HowItWorksSection"
import FAQSection from "./components/FAQSection/FAQSection"
import Footer from './components/Footer/Footer'
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy"
import PaymentPage from "./components/PaymentPage/PaymentPage"
import { pricingPlans } from "./data/pricingPlans"
import OfferPage from "./components/OfferPage/OfferPage"

function App() {
  const pathname = typeof window !== 'undefined' ? window.location.pathname.toLowerCase() : ''
  const search = typeof window !== 'undefined' ? window.location.search : ''
  const searchParams = typeof window !== 'undefined' ? new URLSearchParams(search) : null
  const planSlug = searchParams?.get('plan') || pricingPlans[0].slug

  const isPaymentPage = pathname.includes('payment')
  const isPrivacyPage = pathname.includes('privacy')
  const isOfferPage = pathname.includes('offer')

  if (isPaymentPage) {
    return (
      <>
        <Header />
        <PaymentPage planSlug={planSlug} />
        <Footer />
      </>
    )
  }

  if (isOfferPage) {
    return (
      <>
        <Header />
        <OfferPage />
        <Footer />
      </>
    )
  }

  if (isPrivacyPage) {
    return (
      <>
        <Header />
        <PrivacyPolicy />
        <Footer />
      </>
    )
  }

  return (
    <>
    <Header />
    <Hero />
    <TestimonialsSection />
    <FeaturesSection />
    <BenefitsSection />
    <PricingSection />
    <ConceptSection />
    <HowItWorksSection />
    <FAQSection />
    <Footer />
    </>
  )
}

export default App
