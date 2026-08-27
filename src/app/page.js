import Image from "next/image";
import Header from "./layouts/header";
import Banner from "./homepage/banner";
import About from "./homepage/about";
import Services from "./homepage/services";
import CTA from "./homepage/cta";
import WhyChooseUs from "./homepage/WhyChooseUs";
import SelectedWork from "./homepage/SelectedWork";
import Footer from "./layouts/footer";

export default function Home() {
  return (
   <>
   
   <Banner/>
   <About/>
   <Services/>
   <CTA/>
   <WhyChooseUs/>
   <SelectedWork/>
   </>
  );
}
