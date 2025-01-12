"use client";

import CollectionCard from "@/components/CollectionCard";
import Loading from "@/app/loading";
import { Suspense } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";

export default function Collection() {
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Scroll hua hai: ", latest);
  });

  return (
    <Suspense fallback={<Loading />}>
      <div>
        <motion.div
          initial={{ height: 0, position: "absolute", top: "50%" }}
          animate={{ height: "100vh", position: "sticky", top: 0 }}
          className="bg-[#111111] top-0 text-[#dad7cd] h-screen w-screen justify-center items-center inline-flex flex-col"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="text-[105px] font-bold max-md:text-[55px]"
          >
            COLLECTIONS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="font-medium mt-[-20px] max-md:text-[15px] max-md:font-normal max-md:mt-0"
          >
            HANDPICKED FOR YOU
          </motion.p>

          <motion.p
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, position: "absolute", bottom: 10 }}
          >
            Scroll for more{" "}
            <Image src={"/assets/down.svg"} height={30} width={30} alt="down" />
          </motion.p>
        </motion.div>

        <div className="bg-[#ab5050] sticky top-0 text-[#dad7cd] h-screen w-screen justify-center items-center inline-flex flex-col">
          <CollectionCard collection={"azuki"} />
        </div>

        <div className="bg-[#000000] sticky top-0 text-[#dad7cd] h-screen w-screen justify-center items-center inline-flex flex-col">
          <CollectionCard collection={"valhalla"} />
        </div>

        <div className="bg-[#211327] sticky top-0 text-[#dad7cd] h-screen w-screen justify-center items-center inline-flex flex-col">
          <CollectionCard collection={"muribyfabrik"} />
        </div>

        <div className="bg-[#121832] sticky top-0 text-[#dad7cd] h-screen w-screen justify-center items-center inline-flex flex-col">
          <CollectionCard collection={"pxnghostdivision"} />
        </div>

        <div className="bg-[#351a8f] sticky top-0 text-[#dad7cd] h-screen w-screen justify-center items-center inline-flex flex-col">
          <CollectionCard collection={"0n1-force"} />
        </div>

        <div className="bg-[#000000] sticky top-0 text-[#dad7cd] h-screen w-screen justify-center items-center inline-flex flex-col">
          <CollectionCard collection={"azukielementals"} />
        </div>

        <div className="bg-[#ab5050] sticky top-0 text-[#dad7cd] h-screen w-screen justify-center items-center inline-flex flex-col">
          <CollectionCard collection={"beanzofficial"} />
        </div>
      </div>
    </Suspense>
  );
}
