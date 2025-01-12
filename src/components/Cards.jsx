import Image from "next/image";
import Link from "next/link.js";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Cards({ collection }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-api-key": process.env.NEXT_PUBLIC_OPENSEA_API,
    },
  };

  useEffect(() => {
    async function api() {
      try {
        const res = await fetch(
          `https://api.opensea.io/api/v2/collection/${collection}/nfts?limit=8`,
          options
        );
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status}`);
        }
        const response = await res.json();
        setData(response.nfts || []); // Fallback to empty array if no `nfts`
      } catch (error) {
        console.error("Error fetching NFTs:", error);
      } finally {
        setLoading(false);
      }
    }

    api();
  }, [collection]);

  if (loading) {
    return (
      <div className="mb-[10px] w-full flex flex-wrap justify-center gap-x-[15px] gap-y-[10px] max-md:gap-x-[10px]">
        {Array.from({ length: 8 }).map((_, index) => (
          <Skeleton key={index} height={200} width={200} />
        ))}
      </div>
    );
  }

  return (
    <div className="mb-[10px] w-full flex flex-wrap justify-center gap-x-[15px] gap-y-[10px] max-md:gap-x-[10px]">
      {data.map((item, index) => (
        <Link
          className="relative group"
          key={index}
          href={item?.opensea_url || "#"}
          target="_blank"
        >
          <Image
            className="rounded-lg"
            src={item?.image_url || "/fallback-image.png"} // Fallback for missing images
            height={200}
            width={200}
            alt={item?.name || "NFT"}
          />
          <h1
            className="absolute text-[17px] font-medium h-full w-full bottom-0 left-0 rounded-lg z-[3] hidden justify-center items-center group-hover:flex ease-in duration-200"
            style={{
              backgroundImage: "linear-gradient(to bottom, transparent, #000)",
            }}
          >
            {item?.name || "Unnamed NFT"}
          </h1>
        </Link>
      ))}
    </div>
  );
}
