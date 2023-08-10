import React from 'react';
import Button from '../../99_smallReusable/Button';
import RefLogos from './RefLogos';

const ReferenceInformation = ({ project }) => {
  const { title, stacks, description, link, git } = project;

  const partClass = 'inline';

  return (
    <div className="secondary-container-bcgColor p-6 mt-[-0.5rem] lg:mt-0 z-10 relative rounded-md shadow-md flex flex-col gap-4 w-full items-start justify-between relative">
      <div className="flex lg:hidden w-full justify-center">
        <RefLogos project={project} />
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
        <div className={partClass}>
          <h4 className="inline">Informations supplémentaires : </h4>
          <p className="inline">{description}</p>
        </div>
      </div>
      <div className="flex gap-4 self-center flex-col sm:flex-row">
        {link && (
          <Button
            type={'ExternalLink'}
            to={link}
            text_fr={'Voir'}
            additionalClassName={'mt-2 w-36'}
          />
        )}
        {git && (
          <Button
            type={'ExternalLink'}
            to={git}
            text_fr={'Voir le git'}
            additionalClassName={'mt-2 w-36'}
          />
        )}
      </div>
    </div>
  );
};
export default ReferenceInformation;
