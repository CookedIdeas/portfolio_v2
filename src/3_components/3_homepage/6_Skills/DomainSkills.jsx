import React from 'react';

const DomainSkills = ({ title, skillsData }) => {
  const skillsToDisplay = skillsData;
  return (
    <div className="pl-0 flex flex-col gap-4 mb-2">
      {title && (
        <h4 className="capitalize font-semibold dark:font-normal">{title}</h4>
      )}
      {/* sm:flex-row sm:flex-wrap */}
      <div className="self-center flex flex-col sm:grid sm:grid-cols-2 xl:grid-cols-3  gap-4 w-full items-center justify-center sm:justify-start">
        {skillsToDisplay.map((skill, index) => (
          <div
            key={index}
            className="skills-gradient skills-bcg w-full py-3 rounded-full [&>p]:!text-center "
          >
            <p className="text-sm md:text-xs lg:text-sm">{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DomainSkills;
