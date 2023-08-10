import React from 'react';

const DomainSkills = ({ title, skillsData }) => {
  console.log(skillsData);
  const skillsToDisplay = skillsData[0].skills;
  return (
    <div className="pl-2 flex flex-col gap-4 mb-2">
      {title && (
        <h4 className="capitalize font-semibold dark:font-normal">{title}</h4>
      )}

      <div className="self-center flex flex-col sm:flex-row sm:flex-wrap gap-4 w-full items-center justify-center sm:justify-start">
        {skillsToDisplay.map((skill, index) => (
          <div
            key={index}
            className="skills-gradient skills-bcg w-full sm:w-[45%] lg:w-[40%] xl:w-[32%] py-3 rounded-full [&>p]:!text-center "
          >
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DomainSkills;
