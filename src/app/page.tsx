import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import HomeCharacters from "@/components/sections/HomeCharacters";
import HomeSongs from "@/components/sections/HomeSongs";
import HomePrintables from "@/components/sections/HomePrintables";
import WhyShrempies from "@/components/sections/WhyShrempies";
import EmailSignup from "@/components/sections/EmailSignup";
import InvestorTeaser from "@/components/sections/InvestorTeaser";

export const metadata: Metadata = {
  title: "Shrempies — A World of Wonder for the Newest Generation",
  description:
    "Children's characters, songs, and stories for babies and toddlers. Built for Gen Beta.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeCharacters />
      <WhyShrempies />
      <HomeSongs />
      <HomePrintables />
      <InvestorTeaser />
      <EmailSignup />
    </>
  );
}
