import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import HomeCharacters from "@/components/sections/HomeCharacters";
import HomeFeatured from "@/components/sections/HomeFeatured";
import HomeSongs from "@/components/sections/HomeSongs";
import WhyShrempies from "@/components/sections/WhyShrempies";
import ForParents from "@/components/sections/ForParents";
import HomePrintables from "@/components/sections/HomePrintables";
import InvestorTeaser from "@/components/sections/InvestorTeaser";
import EmailSignup from "@/components/sections/EmailSignup";

export const metadata: Metadata = {
  title: "Shrempies — A World of Wonder for the Newest Generation",
  description:
    "Children's characters, songs, and stories for babies and toddlers. Built for Gen Beta.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <HomeCharacters />
      <HomeFeatured />
      <WhyShrempies />
      <HomeSongs />
      <ForParents />
      <HomePrintables />
      <InvestorTeaser />
      <EmailSignup />
    </>
  );
}
