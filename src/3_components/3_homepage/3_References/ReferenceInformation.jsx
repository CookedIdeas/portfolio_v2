import React from 'react';
import Button from '../../99_smallReusable/Button';

const ReferenceInformation = ({ project }) => {
  const { title, stacks, description, link, git } = project;

  const partClass = 'inline';

  const subTileClass = '';
  return (
    <div className="secondary-container-bcgColor p-6  z-10 relative rounded-md shadow-md flex flex-col gap-4 w-full items-start relative">
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
      <div className="flex gap-4 justify-self-end absolute bottom-6 left-1/2 translate-x-[-50%]">
        {link && (
          <Button
            type={'Link'}
            to={link}
            text_fr={'Voir'}
            additionalClassName={'mt-2 w-36'}
          />
        )}
        {git && (
          <Button
            type={'Link'}
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
