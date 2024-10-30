import React from 'react';

const Link = ({ color = 'text-primary-text', textStyle = 'span', content }) => {
  // Define the Tag based on the textStyle prop, defaulting to 'span'
  const Tag = textStyle;

  return (
    <Tag
      className={`${color} underline transition-all duration-300 hover:text-accent hover:shadow-[0px_0px_8px_rgba(0,255,0,0.8)]`}
    >
      {content}
    </Tag>
  );
};

export default Link;
