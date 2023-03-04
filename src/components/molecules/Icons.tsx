import { FaDiscord } from "react-icons/fa";
import { Icon } from "@/components/atoms";
import type { IconType } from "react-icons";
import React from "react";
import {  AiFillGithub, AiFillLinkedin,  } from "react-icons/ai";

type Item = {
  iconName: IconType;
  url: string;
};

const items: Item[] = [
  {
    iconName: AiFillGithub,
    url: "https://github.com/DHRUVA-N-L-CHOUDHARY"
  },
  // {
  //   iconName: AiFillFacebook,
  //   url: ""
  // },
  // {
  //   iconName: AiOutlineInstagram,
  //   url: ""
  // },
  {
    iconName: AiFillLinkedin,
    url: "https://www.linkedin.com/in/dhruva-n-l-choudhary-199793223/"
  },
  {
    iconName: FaDiscord,
    url: "https://discord.com/channels/@me/1031555593376374805"
  }
];

const Icons: React.FC = () => {
  return (
    <>
      {items.map(({ iconName, url }, i) => (
        <a key={i} href={url} target="_blank" rel="noreferrer" aria-label="Visit my social media">
          <Icon iconName={iconName} />
        </a>
      ))}
    </>
  );
};

export default Icons;
