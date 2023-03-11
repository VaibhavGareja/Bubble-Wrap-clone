import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import HeroSection from "../components/PageSection/HeroSection";

const Home: NextPage = () => {
  return (
    <div>
      <HeroSection />
    </div>
  );
};

export default Home;
