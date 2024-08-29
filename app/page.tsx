import Image from "next/image";
import Header from "./components/Header";
import HowItWorks from "./components/HowItWorks";
import Features from './components/Features'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
     <Header />
     <HowItWorks />
     <Features />
    </main>
  );
}
