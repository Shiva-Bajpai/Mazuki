import { Ripple } from "react-css-spinners";

export default function Loading() {
  return (
    <div className="bg-[#111] h-screen w-screen z-50 inline-flex justify-center items-center">
      <Ripple color="#d36ac2" size={96} thickness={7} />
    </div>
  );
}
