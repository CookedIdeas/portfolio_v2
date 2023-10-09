import React, { useEffect, useState } from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useGlobalContext } from '../../../2_context/GlobalContext';

const ThemeSwitch = ({ forSidebar }) => {
  const { toggleDark, dark } = useGlobalContext();

  const [checked, setChecked] = useState(dark);
  const handleChange = () => {
    toggleDark();
  };
  useEffect(() => {
    setChecked(!dark);
  }, [dark]);

  return (
    <label
      className={`relative inline-flex items-center cursor-pointer ${
        forSidebar || 'scale-[1.3]'
      }`}
    >
      <input
        type="checkbox"
        role="button"
        id="theme-switch"
        aria-label="boutton switch pour choisir en le thème sombre et le thème lumineux"
        className="sr-only peer"
        onChange={handleChange}
        checked={checked}
      ></input>
      <span
        className={`w-11 h-6 bg-primary-light dark:bg-primary-dark peer-focus:outline-none rounded-full peer flex peer-checked:after:translate-x-full  after:content-[''] after:absolute ${
          forSidebar ? 'after:top-[2px]' : 'after:top-[2px]'
        }  after:left-[2px] dark:after:bg-secondaryBackground-dark after:bg-secondaryBackground-light after:rounded-full after:h-5 after:w-5 after:transition-all`}
      >
        {dark ? (
          <BsFillMoonFill
            className={`absolute block z-30 ${
              forSidebar ? 'top-[4px] left-[4px]' : 'top-[4px] left-[3px]'
            }  h-4 text-darkGreen`}
          />
        ) : (
          <BsFillSunFill
            className={`absolute block z-30 ${
              forSidebar ? 'top-[4px] right-[5px]' : 'top-[4px] right-[3px]'
            } h-4 text-primary-light `}
          />
        )}
      </span>
    </label>
  );
};
export default ThemeSwitch;

// https://flowbite.com/docs/forms/toggle/
