import Hero from "@/components/Home/Hero";
import DualPowerhouse from "@/components/Home/DualPowerhouse";
// import MissionVision from "@/components/Home/MissionVision";
import ServicesTeaser from "@/components/Home/ServicesTeaser";
import Testimonial from "@/components/Home/Testimonial";
import PartnersNetwork from "@/components/Home/PartnersNetwork";

export default function Home() {
  return (
    <main>
      <Hero />
      <DualPowerhouse />
      {/* <MissionVision /> */}
      <ServicesTeaser />
      <Testimonial />
      <PartnersNetwork />
    </main>
  );
}
