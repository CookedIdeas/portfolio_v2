import React from 'react';
import { useGlobalContext } from '../../2_context/GlobalContext';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const Button = ({ type, text_fr, to, additionalClassName = 'w-auto' }) => {
  const { dark } = useGlobalContext();

  const buttonClassName = `${
    dark ? 'btn btn--dark ' : 'btn'
  } ${additionalClassName} rounded-full font-semibold !text-[#121212] !font-normal flex items-center justify-center`;

  if (type === 'Anchor') {
    return (
      <AnchorLink
        className={buttonClassName}
        to={to}
        stripHash
        title={text_fr}
      />
    );
  }
  if (type === 'Link') {
    return (
      <Link className={buttonClassName} to={to}>
        {text_fr}
      </Link>
    );
  }
  return <button className={buttonClassName}>{text_fr}</button>;
  //   return <button className={`btn`}>{text_fr}</button>;
};
export default Button;
