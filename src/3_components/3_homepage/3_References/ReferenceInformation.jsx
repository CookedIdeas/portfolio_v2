import React from 'react';
import Button from '../../99_smallReusable/Button';
import RefLogos from './RefLogos';

const ReferenceInformation = ({ project, logos }) => {
  const {
    title,
    stacks,
    text_1_title,
    text_1_text,
    text_2_title,
    text_2_text,
    text_2_secondText,
    link,
    git,
    disabled,
    gitDisabled,
  } = project;

  const partClass = 'inline';

  return (
    <div className="secondary-container-bcgColor p-6 mt-[-0.5rem] lg:mt-0 z-10 rounded-md shadow-lg flex flex-col gap-4 w-full items-start justify-between relative">
      <div className="flex xl:hidden w-full justify-center">
        <RefLogos project={project} logos={logos} />
      </div>
      <div className="flex flex-col gap-4">
        <h3>{title}</h3>
        <div className={partClass}>
          <h4 className="inline">Stacks : </h4>
          {stacks.map((stack, index) => (
            <p className="inline" key={index}>
              {stack}
              {index < stacks.length - 1 ? ', ' : '.'}
            </p>
          ))}
        </div>
        {text_1_title && (
          <div className={partClass}>
            <h4 className="inline">{text_1_title} : </h4>
            <p className="inline">{text_1_text}</p>
          </div>
        )}
        {text_2_title && (
          <div className={partClass}>
            <h4 className="inline">{text_2_title} : </h4>
            <p className="inline">{text_2_text}</p>
            {text_2_secondText && <p className="">{text_2_secondText}</p>}
          </div>
        )}
      </div>
      <div className="flex gap-4 self-center flex-col sm:flex-row">
        {link && (
          <Button
            type={'ExternalLink'}
            to={link}
            text_fr={'Visiter le site'}
            alternative_content={'Bientôt disponible'}
            additionalClassName={'mt-2 w-56'}
            disabled={disabled}
          />
        )}
        {git && (
          <Button
            type={'ExternalLink'}
            to={git}
            text_fr={'Voir le git'}
            alternative_content={'Git à venir'}
            additionalClassName={'mt-2 w-56'}
            disabled={gitDisabled}
          />
        )}
      </div>
    </div>
  );
};
export default ReferenceInformation;
