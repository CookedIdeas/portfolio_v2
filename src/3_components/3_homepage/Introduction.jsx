import React from 'react';
import { ReactComponent as CircleBottom } from '../../1_assets/images/avatar/circle_bottom_thin.svg';
import AvatarPng from './2_Introduction/AvatarPng';
import Button from '../99_smallReusable/Button';
import { useGlobalContext } from '../../2_context/GlobalContext';

const Introduction = () => {
  const { dark } = useGlobalContext();

  return (
    <section
      className="
      flex items-center flex-col lg:flex-row gap-8 lg:gap-16 justify-start mt-8 md:mt-6
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
      <div className="order-2 sm:order-1 lg:w-4/5 h-4/5 flex flex-col justify-between self-end gap-4">
        <p>
          Je vous accompagne dans le développement des différents éléments de
          votre Saas.
        </p>
        <div className="inline text-center sm:text-start">
          <p className="inline">
            Entrepreneur dans l’âme, je suis le créateur du Saas{' '}
          </p>
          <span className="font-['Roboto'] text-base ">
            <span className="!font-bold">BooBee</span>
            <span
              className={`outlined-text !font-bold ${
                dark ? 'outlined-text--dark' : 'outlined-text--light'
              }`}
            >
              bot
            </span>
          </span>
          <p className="inline">
            , l’outil qui aide les entrepreneurs à être présents sur les réseaux
            sociaux grâce à l’IA.
          </p>
        </div>
        <p>Je suis aussi cartographe web.</p>
        <p>
          Reconverti dans le développement web, j’ai été entrepreneur. Mais
          aussi barman, coordinateur d’association, technicien de laboratoire...
        </p>
        <div className="flex gap-4 mt-4 flex-col sm:flex-row">
          <Button
            text_fr={'En savoir plus'}
            type={'Anchor'}
            to={'/#references_section'}
          />
          <Button
            text_fr={'Me contacter'}
            type={'Anchor'}
            to={'/#contact_section'}
          />
        </div>
      </div>
    </section>
  );
};
export default Introduction;
