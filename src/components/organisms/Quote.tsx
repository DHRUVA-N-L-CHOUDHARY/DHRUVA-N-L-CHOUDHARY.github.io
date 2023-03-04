import React from "react";
import { QuoteAuthor, QuoteText } from "@/components/molecules";

const Quote: React.FC = () => {
  return (
    <section
      className={"relative mt-24 flex flex-col items-center justify-center text-center md:mx-auto lg:w-11/12 xl:w-9/12"}
    >
      <QuoteText>Inorder to be irreplaceable, one must always be different.</QuoteText>
      <QuoteAuthor>Coco Chanel</QuoteAuthor>
    </section>
  );
};

export default Quote;
