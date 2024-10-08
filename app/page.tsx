import Image from "next/image";
import Header from "./components/Header";
import HowItWorks from "./components/HowItWorks";
import Features from './components/Features';
import WhatIsBonga from './components/WhatIsBonga';
import WhyBonga from './components/WhyBonga'
import Aob from './components/Aob'
import Footer from './components/Footer'
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar />
    <main className="flex min-h-screen flex-col items-center">
     <Header />
     <HowItWorks />
     <Features />
     <WhatIsBonga />
     <WhyBonga />
     <Aob />
     <Footer />
    </main>
    </>
  );
}
