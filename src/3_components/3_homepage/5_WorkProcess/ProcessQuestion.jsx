import React from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { useGlobalContext } from '../../../2_context/GlobalContext';

const ProcessQuestion = ({ question, response }) => {
  const { dark } = useGlobalContext();
  return (
    <div className="flex w-full flex-col items-center sm:flex-row my-2">
      <div className="w-1/3 sm:w-1/5 md:w-1/6 flex items-center justify-center gap-2">
        <IconContext.Provider
          value={{ color: dark ? 'white' : 'black', size: '50%' }}
        >
          <AiOutlineQuestionCircle />
        </IconContext.Provider>
      </div>
      <div className="flex flex-col w-[90%] text-center sm:text-start gap-0">
        <p className="font-bold dark:!font-normal ">
          D’autres compétences ou plus de force de travail sont nécessaires pour
          mener à bien le projet ?
        </p>
        <p>
          Je collabore fréquemment avec d’autres développeurs et UI/UX designers
          qui seront heureux de nous rejoindre pour ces projets ambitieux.
        </p>
      </div>
    </div>
  );
};
export default ProcessQuestion;
