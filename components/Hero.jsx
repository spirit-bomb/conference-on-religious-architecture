import Image from "next/image";
export default function Hero() {
  return (
    <>
      <div className="flex flex-col align-middle items-center">
        <div className="flex flex-col lg:flex-row font-medium text-xl md:text-3xl text-center md:gap-2">
          <span>ICRA 2024:</span> <span>International Conference on </span><span> Religious Architecture</span>
        </div>
        <p className="font-medium">December 28-29, 2024</p>
        <p className="font-medium">
          National Institute of Technology, Patna, India
        </p>
      </div>
    </>
  );
}
