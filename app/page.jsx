import Graphs from "@/components/landingpage/graphs";
import HeroSection from "@/components/landingpage/HeroSection";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import InfoAboutSite from "@/components/landingpage/InfoAboutSite";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Graphs />
      <InfoAboutSite />
      <Footer />
    </div>
  );
}
