import React from 'react';
import ProcessQuestion from './5_WorkProcess/ProcessQuestion';
import Button from '../99_smallReusable/Button';
import Balancer from 'react-wrap-balancer';

const WorkProcess = () => {
  return (
    <section className="min-h-35 flex flex-col gap-12" id="process_section">
      <h2>Mon process de travail</h2>
      <div className="flex flex-col gap-4">
        <p>
          Tout d’abord, je prends le temps qu’il faut pour bien comprendre votre
          besoin.
        </p>
        <p>
          Ensuite, je vous propose une solution qui répondra à vos attentes. Je
          vous propose une planification rigoureuse du projet afin que vous
          sachiez où nous allons, comment et pourquoi.{' '}
        </p>
        <ProcessQuestion
          question={
            'Plusieurs rencontres sont nécessaires pour s’assurer que la solution proposée sera la meilleure ?'
          }
          response={
            'Aucun problème, mon but est justement de vous proposer la meilleure solution.'
          }
        />
        <p>
          Dés que nous sommes accordés sur une solution, je lance le
          développement. Dans une approche agile, nous validons les différentes
          étapes et les possibles modifications à apporter en cours de projet.
        </p>
        {/* <ProcessQuestion
          question={
            'D’autres compétences ou plus de force de travail sont nécessaires pour mener à bien le projet ?'
          }
          response={
            'Je collabore fréquemment avec d’autres développeurs et UI/UX designers qui seront heureux de nous rejoindre pour ces projets ambitieux.'
          }
        /> */}
        <div className="w-full sm:w-5/6 md:w-[90%] secondary-container-bcgColor p-4 self-center text-center rounded-md ">
          <p className="!text-base !text-center mb-2">
            Mon souhait est de travailler dans une ambiance de collaboration
            agréable.
          </p>
          <p className="flex justify-center">
            <Balancer className=" font-bold dark:!font-normal !text-base !text-center">
              Je veux que mes clients valident leur commande en sachant que le
              bon choix a été fait en me faisant confiance pour la développer.
            </Balancer>
          </p>
        </div>
        <div className="w-2/3 flex self-center justify-center">
          <Button
            text_fr={'Parlons de votre besoin'}
            type={'Anchor'}
            to={'/#contact_section'}
          />
        </div>
      </div>
    </section>
  );
};
export default WorkProcess;
