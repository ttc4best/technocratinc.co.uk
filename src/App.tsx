import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'   // ← removed BrowserRouter from here
import Layout from './components/Layout'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import ServiceDetail from './pages/ServiceDetail'
import PortfolioPage from './pages/PortfolioPage'
import PortfolioDetail from './pages/PortfolioDetail'
import BlogPage from './pages/BlogPage'
import BlogDetail from './pages/BlogDetail'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import FAQPage from './pages/FAQPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'

function App() {
  // This tiny trick fixes the blank page on Vercel/Bolt (hydration issue)
  useEffect(() => {
    if (import.meta.env.PROD) {
      window.location.reload()
    }
  }, [])

  return (
    // ← No BrowserRouter here anymore! (it's already in main.tsx)
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="portfolio/:slug" element={<PortfolioDetail />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:slug" element={<BlogDetail />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="faq" element={<FAQPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

export default App