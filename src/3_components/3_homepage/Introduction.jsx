import React from 'react';
import { useGlobalContext } from '../../2_context/GlobalContext';
// import { ReactComponent as Avatar } from '../../&8assets/images/avatar/avatar.svg';
import { ReactComponent as CircleBottom } from '../../1_assets/images/avatar/circle_bottom_thin.svg';
import AvatarPng from './2_Introduction/AvatarPng';

const Introduction = () => {
  const { lang_fr } = useGlobalContext();

  return (
    <section
      className="
      flex items-center flex-col sm:flex-row gap-16 justify-start
      min-h-35"
      id="introduction_section"
    >
      <div
        className="
       h-80 flex flex-col items-end justify-end"
      >
        <div
          className=" w-64 h-96 rounded-b-full
        flex items-center justify-center
        overflow-hidden relative pt-24
        avatarDiv
        "
        >
          <div className="h-64 w-64 rounded-full absolute bottom-0 bg-tertiaryBgc-light dark:bg-rectangleBgc-dark"></div>
          <CircleBottom className="avatar__circle avatar__circle--top " />
          <AvatarPng />
          {/* <Avatar className="avatar" /> */}
          <CircleBottom className="avatar__circle avatar__circle--bottom" />
        </div>
      </div>
      <div className="order-2 sm:order-1 sm:w-3/5">
        <>
          <p>
            Aujourd'hui développeur web full-stack, mon premier contact avec le
            développement web a été totalement autodidacte.
          </p>
          <p>
            Pour poursuivre mon voyage dans ce domaine passionnant, j'ai suivi
            cette année une formation professionnalisante chez OpenClassRooms.
          </p>
          <p>
            Ce portfolio, réalisé avec Gatsby.js et Tailwind, est le fruit de
            cet apprentissage.
          </p>
        </>
      </div>
    </section>
  );
};
export default Introduction;
