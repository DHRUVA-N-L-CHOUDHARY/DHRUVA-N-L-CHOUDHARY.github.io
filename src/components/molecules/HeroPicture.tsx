import { Dots } from "@/components/atoms";
import Image from "next/image";
import React from "react";

const HeroPicture: React.FC = () => {
  return (
    <div className="relative flex h-72 items-center justify-center bg-gray/10 backdrop-blur-md md:h-96 lg:h-[20rem] xl:h-[25rem]">
      <Image
        className="absolute -left-4 -top-6 -z-10 h-44 w-36 select-none md:-left-10 md:top-6 md:h-52 md:w-48"
        width={250}
        height={250}
        priority
        src={"/assets/brand-logo.svg"}
        alt="Logo Background"
      />
      <Image
        className="w-fit select-none self-end"
        width={400}
        height={400}
        priority
        src={"/assets/profile-pic.png"}
        alt="Profile Image"
      />
      <Dots size={25} className="absolute bottom-12 -right-4 z-10 gap-3 md:-right-7 md:gap-4" />
    </div>
  );
};

export default HeroPicture;
