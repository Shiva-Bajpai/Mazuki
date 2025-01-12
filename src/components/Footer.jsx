import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="fixed w-full h-[320px] bottom-0 flex justify-between text-[#dad7cd] bg-[#111111] font-medium border-b-[10px] border-[#dad7cd] max-lg:h-[500px] max-lg:flex-col">
      <div className="ml-[20px]">
        <Image src={"/assets/logo.png"} height={50} width={100} alt="Logo" />
        <p className="mt-[-25px] max-lg:mr-[25px]">
          Mazuki showcases the best anime NFTs with their detailed insights.
        </p>
      </div>

      <div className="flex">
        <Image
          src={"/assets/footer.png"}
          height={320}
          width={287}
          alt="Footer"
          className="h-full w-auto max-lg:hidden max-xl:h-[200px] max-xl:absolute max-xl:bottom-0 max-xl:right-0"
        />
        <div className="p-[30px] flex flex-col border-l-[0.5px] border-[#dad7cd] max-lg:border-l-0">
          <h1 className="font-bold mb-[5px]">ABOUT US</h1>
          <Link href="/about">KNOW MORE</Link>
          <Link href="/gallery">GALLERY</Link>
          <Link href="/collection">COLLECTIONS</Link>

          <h1 className="font-bold mt-[20px] mb-[5px]">TECHNOLOGY</h1>
          <Link target="_blank" href="https://opensea.io/">OPENSEA</Link>
        </div>
        <div className="p-[30px] flex flex-col border-l-[0.5px] border-[#dad7cd] max-lg:border-l-0">
          <h1 className="font-bold mb-[5px]">OTHER</h1>
          <Link href="">LICENSE</Link>
          <Link href="">TERMS & CONDITIONS</Link>

          <h1 className="font-bold mt-[20px] mb-[5px]">FOLLOW US</h1>
          <div className="flex gap-x-[15px] items-center">
            <Link href="https://linkedin.com/in/shiva-bajpai-sb06/" target="_blank">
              <Image
                src={"/assets/linkedin light.svg"}
                height={50}
                width={50}
                alt="Linkedin"
                className="w-[30px] h-[auto]"
              />
            </Link>
            <Link
              href="https://twitter.com/sb__codes"
              target="_blank"
            >
              <Image
                src={"/assets/x-light.svg"}
                height={25}
                width={25}
                alt="X"
                className="w-[30px] h-[auto]"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
