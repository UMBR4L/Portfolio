import React from 'react';
import Link from './Link';

const NavLink = ({ content }) => {
  return (
    <Link
      color="text-primary"        // Black as default color
      textStyle="h3"              // Default to 'h3' style
      content={content}
    />
  );
};

export default NavLink;
