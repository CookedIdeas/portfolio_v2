import React from 'react';
import { useGlobalContext } from '../../2_context/GlobalContext';

const Button = ({
  type,
  text_fr,
  alternative_content = '',
  alt_text = '',
  to,
  additionalClassName = 'w-auto',
  disabled = false,
}) => {
  const { dark } = useGlobalContext();

  const buttonClassName = `${
    dark ? 'btn btn--dark ' : 'btn'
  } ${additionalClassName} rounded-full border dark:border-0 font-semibold !text-[#121212] !font-normal flex items-center justify-center`;

  if (type === 'Anchor') {
    if (!disabled) {
      return (
        <a
          className={buttonClassName}
          href={!disabled && to}
          aria-label={alt_text}
          aria-disabled={disabled}
          disabled={disabled}
        >
          {text_fr}
        </a>
      );
    } else {
      return (
        <button
          className={buttonClassName}
          aria-label={alt_text}
          aria-disabled={disabled}
          disabled={disabled}
        >
          {alternative_content}
        </button>
      );
    }
  }
  if (type === 'ExternalLink') {
    if (!disabled) {
      return (
        <a
          className={buttonClassName}
          href={!disabled && to}
          aria-label={alt_text}
          aria-disabled={disabled}
          target="_blank"
          rel="noreferrer"
          disabled={disabled}
        >
          {!disabled ? text_fr : alternative_content}
        </a>
      );
    } else {
      return (
        <button
          className={buttonClassName}
          aria-label={alt_text}
          aria-disabled={disabled}
          disabled={disabled}
        >
          {alternative_content}
        </button>
      );
    }
  }
  if (type === 'button') {
    return (
      <button
        className={buttonClassName}
        disabled={disabled}
        aria-label={alt_text}
      >
        {text_fr}
      </button>
    );
  }
  return (
    <button className={buttonClassName} disabled={disabled}>
      {text_fr}
    </button>
  );
};
export default Button;
