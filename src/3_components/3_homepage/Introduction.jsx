import React from 'react';
import { useGlobalContext } from '../../2_context/GlobalContext';
// import { ReactComponent as Avatar } from '../../&8assets/images/avatar/avatar.svg';
import { ReactComponent as CircleBottom } from '../../1_assets/images/avatar/circle_bottom_thin.svg';
import AvatarPng from './2_Introduction/AvatarPng';

const Introduction = () => {
  const { lang_fr } = useGlobalContext();

  return (
    <section
      className="md:!px-5
      flex items-center flex-col sm:flex-row gap-16 justify-start
      min-h-35"
      id="introduction_section"
    >
      <div className="order-2 sm:order-1 sm:w-3/5">
        <h1 className=" mb-2 sm:mb-4">Gabriel G.</h1>
        <div className="flex flex-col gap-2">
          {' '}
          {lang_fr ? (
            <>
              <p>
                Aujourd'hui développeur web full-stack, mon premier contact avec
                le développement web a été totalement autodidacte. Très vite
                mordu de ce domaine aux possibilités et aux défis intellectuels
                infinis, j'ai réalisé quelques commandes de cartographies web en
                tant qu'indépendant.
              </p>
              <p>
                Pour poursuivre mon voyage dans ce domaine passionnant, j'ai
                suivi cette année une formation professionnalisante chez
                OpenClassRooms.
              </p>
              <p>
                Ce portfolio, réalisé avec Gatsby.js et Tailwind, est le fruit
                de cet apprentissage.
              </p>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div
        className="
        order-1 sm:order-2 h-80 flex flex-col items-end justify-end"
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
    </section>
  );
};
export default Introduction;
