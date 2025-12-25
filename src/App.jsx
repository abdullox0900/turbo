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
import PaymentSuccessPage from "./components/PaymentSuccessPage/PaymentSuccessPage"
import PaymentFailedPage from "./components/PaymentFailedPage/PaymentFailedPage"

function App() {
  const pathname = typeof window !== 'undefined' ? window.location.pathname.toLowerCase() : ''
  const search = typeof window !== 'undefined' ? window.location.search : ''
  const searchParams = typeof window !== 'undefined' ? new URLSearchParams(search) : null
  const planSlug = searchParams?.get('plan') || pricingPlans[0].slug

  const isPaymentSuccessPage = pathname.includes('payment-success')
  const isPaymentFailedPage = pathname.includes('payment-failed')
  const isPaymentPage = pathname.includes('payment')
  const isPrivacyPage = pathname.includes('privacy')
  const isOfferPage = pathname.includes('offer')

  if (isPaymentSuccessPage) {
    return (
      <>
        <Header />
        <PaymentSuccessPage />
        <Footer />
      </>
    )
  }

  if (isPaymentFailedPage) {
    return (
      <>
        <Header />
        <PaymentFailedPage />
        <Footer />
      </>
    )
  }

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
