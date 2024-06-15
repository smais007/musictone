import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NewArtists from "@/components/NewArtists";
import NewSong from "@/components/NewSong";
import TopSong from "@/components/TopSong";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero></Hero>
      <TopSong></TopSong>
      <NewSong></NewSong>
      <NewArtists></NewArtists>
      <Footer></Footer>
    </main>
  );
}
