import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import HeroSection from "../components/PageSection/HeroSection";
import ServiceSlider from "../components/Slider/ServiceSlider";
import CustomSlider from "../components/Slider/BaseSlider";
import WorkSection from "../components/PageSection/WorkSection";
import BrandSection from "../components/PageSection/BrandSection";
import HowItWorks from "../components/PageSection/HowItWorks";
import WhyChooseUs from "../components/PageSection/WhyChooseUs";

const Home: NextPage = () => {
  return (
    <div>
      <HeroSection />
      <ServiceSlider />
      <WorkSection />
      <BrandSection />
      <HowItWorks />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
