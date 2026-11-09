import { useState } from 'react';
import About from '@/components/About';
import BookingForm from '@/components/BookingForm';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import StyleSection from '@/components/StyleSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import type { EnquiryPrefill } from '@/lib/enquiry';

type PrefillRequest = Omit<EnquiryPrefill, 'key'>;

function App() {
  const [prefill, setPrefill] = useState<EnquiryPrefill | null>(null);

  const requestEnquiry = (request: PrefillRequest) => {
    setPrefill({ ...request, key: Date.now() });
    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-ivory-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services onEnquire={(service) => requestEnquiry({ service })} />
        <WhyChooseUs />
        <Gallery />
        <StyleSection onEnquire={requestEnquiry} />
        <BookingForm prefill={prefill} />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
