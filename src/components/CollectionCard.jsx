import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CollectionCard({ collection }) {
  const [data, setData] = useState(null);
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
          `https://api.opensea.io/api/v2/collections/${collection}`,
          options
        );
        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        setData(await res.json());
      } catch (error) {
        console.error("Failed to fetch collection data:", error);
      }
    }

    api();
  }, [collection]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-[50%] max-lg:w-[80%] flex gap-x-10 max-md:w-full max-md:flex-col max-md:items-center">
      <div>
        <Image
          src={data.image_url || "/fallback-image.png"}
          height={200}
          width={200}
          alt={data.name || "Collection"}
        />
        {data.project === "" ? (
          <span className="inline-flex items-center">
            <h1 className="text-[25px] font-medium">{data.name || "Unnamed Collection"}</h1>
          </span>
        ) : (
          <Link
            className="inline-flex items-center hover:underline"
            target="_blank"
            href={data.project_url || "#"}
          >
            <h1 className="text-[25px] font-medium">{data.name || "Unnamed Collection"}</h1>
            <Image
              className="-rotate-45"
              src="/assets/link-arrow.svg"
              height={35}
              width={35}
              alt="arrow"
            />
          </Link>
        )}
      </div>

      <div className="w-[60%] max-md:w-[85%] max-md:mt-[15px] max-md:font-light">
        <p className="mb-[20px] text-[13px]">{data.description || "No description available."}</p>
        <Link
          className="text-sm font-medium p-[10px] pl-[15px] pr-[15px] bg-[#111111] rounded-full hover:bg-[#222222]"
          target="_blank"
          href={data.opensea_url || "#"}
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
}
