import Image from "next/image";
import Hero from "@/components/Hero"
import Grid from "@/components/Grid"
import Experience from "@/components/Experience"
import Approach from "@/components/Approach"
import Footer from "@/components/Footer"

import RecentProjects from "@/components/RecentProjects"
import {navItems} from "../data/index"

import { FloatingNav } from "@/components/ui/FloatingNav"
import { FaHome } from "react-icons/fa"

export default function Home() {
  return (
   <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-hidden">
    <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems} />
      <Hero />
      <Grid />
      <RecentProjects/>
      <Experience />
      <Approach/>
      <Footer/>
    </div>
   </main>
  );
}
