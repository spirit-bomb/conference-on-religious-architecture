import Image from "next/image";
export default function Hero() {
  return (
    <>
      <div className="flex flex-col align-middle items-center">
        <p className="font-semibold text-xl md:text-3xl text-center">ICRA 2024</p>
        <div className="flex flex-col lg:flex-row font-semibold text-xl md:text-3xl text-center md:gap-2">
          <span>International Conference on </span><span> Religious Architecture</span>
        </div>
        <p className="font-semibold">December 29-30, 2024</p>
        <p className="font-semibold">
          National Institute of Technology, Patna, India
        </p>
      </div>
    </>
  );
}
