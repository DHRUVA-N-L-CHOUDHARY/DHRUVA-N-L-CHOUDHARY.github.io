import React from "react";
import { Logo, Text } from "@/components/atoms";

const FooterContent: React.FC = () => {
  return (
    <div className="col-span-2 flex flex-col gap-y-2 md:col-span-1">
      <div className="flex items-center justify-center gap-x-4 md:justify-start lg:gap-x-6">
        <div className="flex items-center gap-x-1">
          <Logo className="scale-75 stroke-white" />
          <Text fontWeight="font-semibold" className="text-xl md:text-2xl">
            Dhruva
          </Text>
        </div>
        <Text className="text-xs text-gray md:text-sm">dhruva05022003@gmail.com</Text>
      </div>
      <Text className="ml-2 text-center text-sm md:text-start lg:text-base xl:w-5/6">
        Full Stack application Developer.
      </Text>
    </div>
  );
};

export default FooterContent;
