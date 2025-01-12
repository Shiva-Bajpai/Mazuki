"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
      <div className="flex h-screen w-screen max-md:flex-col-reverse">
        <div className="relative h-screen w-[60%] bg-[#111111] text-[#dad7cd] max-md:w-[100%]">
          <motion.div className="w-[60%] p-[20px] bottom-0 absolute mb-[20px] max-md:w-[100%] max-md:top-0">
            <motion.h1
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.2 }}
              className="text-[45px] font-bold"
            >
              WHO WE ARE ?
            </motion.h1>
            <motion.p
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2, duration: 0.2 }}
              className="font-normal text-[15px] mb-[30px]"
            >
              Welcome to Mazuki, your premier source for insights into the world
              of anime NFTs. At Mazuki, we are passionate about merging the
              captivating artistry of anime with the innovative realm of
              blockchain technology. Our mission is to guide enthusiasts and
              collectors in discovering the finest anime NFTs available. We
              provide expert analyses, market trends, and exclusive content to
              help you navigate this exciting digital frontier. Join us at
              Mazuki and embark on a journey where tradition meets innovation,
              bringing your favorite anime moments to life in the digital age.
            </motion.p>
            <motion.div
              initial={{ y: "100vh" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4, duration: 0.2 }}
            >
              <Link
                className="bg-[#222] p-[15px] pl-[30px] pr-[30px] rounded-full hover:bg-[#0d0d0d] transition-all"
                href="/collection"
              >
                Explore
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div
          className="w-[40%] h-full bg-cover bg-center max-md:w-[100%]"
          style={{ backgroundImage: "url('/assets/promo.png')" }}
        ></div>
      </div>
  );
}
