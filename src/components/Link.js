import React from "react";

const Link = ({ color = "text-primary-text", textStyle = "span", content }) => {
  // Define the Tag based on the textStyle prop, defaulting to 'span'
  const Tag = textStyle;

  return (
    <Tag
      className={`${color} underline transition-all duration-200 hover:text-accent`}
    >
      {content}
    </Tag>
  );
};

export default Link;
