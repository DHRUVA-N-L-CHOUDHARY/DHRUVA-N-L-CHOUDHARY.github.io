import React from "react";
import { Box, ButtonLink, Text } from "@/components/atoms";

interface Props {
  title: string;
  url : string|undefined;
}

const ProjectTitle: React.FC<Props> = ({ title, url }) => {
  return (
    <ButtonLink href={url} target="_blank">
    <Box className="px-3 py-2 md:px-5" border="border-b">
      <Text fontWeight="font-normal" className="lg:text-lg xl:text-xl">
        {title}
      </Text>
    </Box>
    </ButtonLink>
  );
};

export default ProjectTitle;
