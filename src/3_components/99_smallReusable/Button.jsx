import React from 'react';
import { useGlobalContext } from '../../2_context/GlobalContext';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const Button = ({ type, text_fr, to, additionalClassName = 'w-auto' }) => {
  const { dark } = useGlobalContext();

  const buttonClassName = `${
    dark ? 'btn btn--dark ' : 'btn'
  } ${additionalClassName} rounded-full border dark:border-0 font-semibold !text-[#121212] !font-normal flex items-center justify-center`;

  if (type === 'Anchor') {
    return (
      <a className={buttonClassName} href={to}>
        {text_fr}
      </a>
    );
  }
  if (type === 'ExternalLink') {
    return (
      <a className={buttonClassName} href={to} target="_blank" rel="noreferrer">
        {text_fr}
      </a>
    );
  }
  if (type === 'button') {
    return <button className={buttonClassName}>{text_fr}</button>;
  }
  return <button className={buttonClassName}>{text_fr}</button>;
  //   return <button className={`btn`}>{text_fr}</button>;
};
export default Button;
