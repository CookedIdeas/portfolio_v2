import React from 'react';

const ProcessQuestion = ({ question, response }) => {
  return (
    <div className="flex w-full flex-col items-center sm:flex-row my-2">
      {/* <div className="w-1/3 sm:w-1/5 md:w-1/6 flex items-center justify-center gap-2">
        <IconContext.Provider
          value={{ color: dark ? 'white' : 'black', size: '50%' }}
        >
          <AiOutlineQuestionCircle />
        </IconContext.Provider>
      </div> */}
      <div className="flex flex-col w-[90%] text-center sm:text-start gap-0">
        {/* <p className="font-bold dark:!font-normal ">
          {question} {response}
        </p> */}
        <p>
          {question} {response}
        </p>
      </div>
    </div>
  );
};
export default ProcessQuestion;
