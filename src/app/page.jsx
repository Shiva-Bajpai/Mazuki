"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* <div
        className="h-screen w-screen overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/bg-video-gif.gif')" }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, ease: "easeIn" }}
          className="flex justify-center items-center gap-x-[10px] text-xl text-[#dad7cd] font-medium absolute bottom-3 left-[50%] ml-[-100px] max-md:text-[15px] max-md:font-light max-md:ml-[-70px]"
        >
          Scroll for more{" "}
          <Link href={"/"}>
            <Image src="/assets/down.svg" height={17} width={17} alt="Down" />
          </Link>
        </motion.p>
      </div> */}
    <div className="h-screen w-screen overflow-hidden relative">
  <video
    className="absolute top-0 left-0 w-full h-full object-cover"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/assets/bg-video-gif.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 2, ease: "easeIn" }}
    className="flex justify-center items-center gap-x-[10px] text-xl text-[#dad7cd] font-medium absolute bottom-3 left-[50%] ml-[-100px] max-md:text-[15px] max-md:font-light max-md:ml-[-70px]"
  >
    Scroll for more{" "}
    <Link href={"/"}>
      <Image src="/assets/down.svg" height={17} width={17} alt="Down" />
    </Link>
  </motion.p>
</div>


      {/* 1st DIV */}
      <motion.div
        initial={{ opacity: 0, left: -50 }}
        whileInView={{ opacity: 1, left: 0 }}
        transition={{ ease: "easeIn", duration: 0.25 }}
        className="relative h-screen w-[100%] bg-[#111111] flex justify-around items-center max-lg:flex-col max-lg:h-auto max-lg:py-10"
      >
        <Image
          src="/assets/left-showcase.png"
          height={512}
          width={512}
          alt="What we do ?"
          className="max-lg:w-[300px] max-lg:h-[300px]"
        />
        <div className="w-[50%] mr-[20px] max-lg:w-[85%] max-lg:mr-0 max-lg:ml-[20px]">
          <h1 className="text-[65px] text-[#dad7cd] font-bold max-lg:text-[40px]">WHAT WE DO ?</h1>
          <q className="text-[17px] text-[#dad7cd] font-medium max-lg:text-[15px]">
            We help you get the best NFTs data from Azuki, Valhalla, Muri by
            Fabrik, 0n1-force, Azuki Elementals, Beanz Official.
          </q>
          <p className="mb-[30px] mt-[15px] text-[#dad7cd] max-lg:text-[13px]">
            At Mazuki, we specialize in providing comprehensive insights into
            the anime NFT market. Our team of experts curates and analyzes the
            best anime NFTs, offering detailed reviews and market predictions.
            We publish regular articles, guides, and exclusive interviews with
            key industry players to keep you informed about the latest trends
            and developments. Additionally, we offer personalized
            recommendations to help you find the perfect NFTs that align with
            your interests and investment goals. By blending our love for anime
            with cutting-edge blockchain technology, we strive to be your go-to
            resource for all things anime NFTs.
          </p>
          <Link
            className="bg-[#dad7cd] inline-flex items-center gap-x-[10px] p-[13px] pl-[20px] pr-[20px] font-medium rounded-full transition-all hover:bg-[#92908a]"
            href={"/about"}
          >
            Learn More{" "}
            <Image
              src="/assets/link-arrow-dark.svg"
              height={70}
              width={35}
              alt="What we do ?"
            />
          </Link>
        </div>
      </motion.div>


      {/* 2nd DIV */}
      <motion.div
        initial={{ opacity: 0, right: -50 }}
        whileInView={{ opacity: 1, right: 0 }}
        transition={{ ease: "easeIn", duration: 0.25 }}
        className="relative bg-[#dad7cd] h-screen w-[100%] flex justify-around items-center max-lg:flex-col-reverse max-lg:h-auto max-lg:py-10"
      >
        <div className="w-[50%] ml-[20px] max-lg:w-[85%]">
          <h1 className="text-[65px] text-[#111111] font-bold max-lg:text-[40px]">
            WHY YOU NEED US ?
          </h1>
          <q className="text-[17px] font-medium text-[#111111] max-lg:text-[15px]">
            You need the BEST that&apos;s why you need us.
          </q>
          <p className="mt-[15px] mb-[30px] max-lg:text-[13px]">
            Navigating the rapidly evolving world of anime NFTs can be
            overwhelming. Mazuki is here to simplify this journey for you. With
            our in-depth knowledge and passion for anime and blockchain
            technology, we provide expert insights that help you make informed
            decisions. We analyze market trends, highlight top-performing NFTs,
            and offer exclusive content to ensure you stay ahead of the curve.
            Whether you&apos;re a seasoned collector or a newcomer, Mazuki
            equips you with the tools and knowledge to thrive in the anime NFT
            space. Trust us to be your guide in this dynamic digital landscape.
          </p>
          <Link
            className="text-[#dad7cd] inline-flex items-center gap-x-[10px] p-[13px] pl-[20px] pr-[20px] font-medium rounded-full transition-all bg-[#111] hover:bg-[#222]"
            href={"/about"}
          >
            Learn More{" "}
            <Image
              src="/assets/link-arrow.svg"
              height={70}
              width={35}
              alt="What we do ?"
            />
          </Link>
        </div>
        <Image
          className="max-lg:w-[300px] max-lg:h-[300px]"
          src="/assets/right-showcase.png"
          height={512}
          width={512}
          alt="What we do ?"
        />
      </motion.div>

      <div className="group w-screen h-[720px] bg-[url('/assets/promo.png')] bg-cover bg-center]">
        <motion.div className="w-full h-full bg-[rgba(0,0,0,0.85)] hidden justify-center items-center group-hover:flex">
          <Link
            className="bg-[#dad7cd] inline-flex justify-center items-center gap-x-2 p-[20px] rounded-full pl-[40px] pr-[40px] text-lg font-medium hover:bg-[#92908a]"
            href={"/gallery"}
          >
            See Gallery{" "}
            <Image
              src="/assets/link-arrow-dark.svg"
              height={65}
              width={32.5}
              alt="What we do ?"
            />
          </Link>
        </motion.div>
      </div>

      <div
        className="relative h-[320px] max-lg:h-[500px] max-lg:overflow-hidden"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
      >
        <Footer />
      </div>
    </>
  );
}
