import React from "react";

type HeadingType = {
  tag?: keyof JSX.IntrinsicElements;
  text: string;
};

const Heading: React.FC<HeadingType> = ({ tag, text }) => {
  const Tag = tag || "h1";

  return <Tag>{text}</Tag>;
};

export default Heading;
