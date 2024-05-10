import Image from "next/image";
import { Hero } from "./_components/hero";
import { Team } from "./_components/team";
import { Me } from "./_components/me";
import { Stats } from "./_components/stats";
import { HowItWorks } from "./_components/howitworks";
import { Features } from "./_components/features";
import { Testimonials } from "./_components/testimonials";
import { Footer } from "./_components/footer";
import { Blogs } from "./_components/blogs";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Team />
      <HowItWorks />
      <Testimonials />
      <Blogs />
      <Footer />
    </>
  );
}
