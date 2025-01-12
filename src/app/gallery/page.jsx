"use client";
import Cards from "@/components/Cards";

export default function Gallery() {
    let collection;

  return (
      <div className="mt-[130px] mb-[40px] text-[#dad7cd]">
        <Cards collection={"azuki"} />
        <Cards collection={"valhalla"} />
        <Cards collection={"0n1-force"} />
        <Cards collection={"beanzofficial"} />
        <Cards collection={"azukielementals"} />
        <Cards collection={"pxnghostdivision"} />
        <Cards collection={"muribyfabrik"} />
      </div>
  );
}
