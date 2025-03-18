"use client"

import Image from "next/image";
import Hero from "./sections/hero";
import About from "./sections/about";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Banner from "./sections/banner";
import ClinicTour from "./sections/clinicTour";
import CommonQuestions from "./sections/commonQuestions";
import ConditionsTreated from "./sections/conditionstreated";
import Article from "./sections/blog";
import Map from "./sections/map";
import Gallery from "./sections/gallery";

export default function Home() {
  return (
    <>
      <FloatingWhatsApp phoneNumber="254706534206" accountName="Prife-Lang'ata" statusMessage="Typically replies within a minute." avatar="/prife.webp" chatMessage="Hello and welcome to Prife Lang'ata. Would you like to book an appointment?" darkMode="true" allowEsc="true" className="floating-whatsapp" notificationSound="true" />
      <Hero />
      <About />
      <Banner />
      <CommonQuestions />
      <ClinicTour />
      <ConditionsTreated />
      <Article />
      <Map />
      <Gallery />
    </>
  );
}
