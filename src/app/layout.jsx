import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { Suspense } from "react";
import Loading from "./loading.js";

const helvetica = localFont({
  src: [
    {
      path: "../../fonts/font/HelveticaNowDisplay-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../fonts/font/HelveticaNowDisplay-Regular.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../fonts/font/HelveticaNowDisplay-Medium.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../fonts/font/HelveticaNowDisplay-Bold.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/font/HelveticaNowDisplay-ExtraBold.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/font/HelveticaNowDisplay-Black.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/font/HelveticaNowDisplay-ExtBlk.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Mazuki",
  description: "The Ultimate NFT Insight App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={helvetica.className}>
        <Suspense fallback={<Loading />}>
          <div className="w-screen z-10 flex items-center justify-between p-[1%] fixed top-0 left-0 overflow-x-hidden max-lg:p-[1.5%]">
            <Link href="/">
              <Image
                src={"/assets/logo.png"}
                height={50}
                width={100}
                alt="Logo"
              />
            </Link>

            <div className="flex justify-center items-center w-[auto] gap-x-[2px] bg-[rgba(218,215,205,0.5)] rounded-full border-[#111111] border-[1px] text-[17px] p-[10px] font-medium max-lg:gap-x-[1px] max-lg:text-[13px] max-lg:font-normal max-lg:p-[7px]">
              <Link
                href="/about"
                className="text-black rounded-full p-[10px] pr-[20px] pl-[20px] hover:bg-[#111111] hover:text-[#DAD7CD] ease-in duration-200 max-lg:p-[3.5px] max-lg:px-[7px]"
              >
                ABOUT
              </Link>
              <Link
                href="/gallery"
                className="text-black rounded-full p-[10px] pr-[20px] pl-[20px] hover:bg-[#111111] hover:text-[#DAD7CD] ease-in duration-200 max-lg:p-[3.5px] max-lg:px-[7px]"
              >
                GALLERY
              </Link>
              <Link
                href="/collection"
                className="text-black rounded-full p-[10px] pr-[20px] pl-[20px] hover:bg-[#111111] hover:text-[#DAD7CD] ease-in duration-200 max-lg:p-[3.5px] max-lg:px-[7px]"
              >
                COLLECTIONS
              </Link>
            </div>

            <div className="flex justify-between w-[auto] gap-x-[15px] items-center bg-[rgba(218,215,205,0.5)] rounded-full border-[#111111] border-[1px] p-[20px] pl-[40px] pr-[40px] mr-[15px] max-lg:hidden">
              <Link href="https://linkedin.com/in/shiva-bajpai-sb06/" target="_blank">
                <Image
                  src={"/assets/in2.svg"}
                  height={30}
                  width={30}
                  alt="Linkedin"
                  className="w-[30px] h-[auto]"
                />
              </Link>
              <Link
                href="https://twitter.com/sb__codes"
                target="_blank"
              >
                <Image
                  src={"/assets/x.svg"}
                  height={30}
                  width={30}
                  alt="X"
                  className="w-[30px] h-[auto]"
                />
              </Link>
            </div>
            {/* <button className="">MENU</button> */}
          </div>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
