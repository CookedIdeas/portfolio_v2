import React from 'react';
import DomainSkills from './6_Skills/DomainSkills';
import { skills } from '../../1_assets/datas/skills';

const Skills = () => {
  const domainStyle = 'flex flex-col gap-6 [&>p]:!text-start';
  const yo = skills.filter((data) => data.type === 'frontend');
  console.log(yo);
  return (
    <section className="min-h-35 flex flex-col gap-12">
      <h2>Mes compétences</h2>
      <div className="flex flex-col gap-8 px-2">
        <div className={domainStyle}>
          <h4>Développement web</h4>
          <p>
            2023 - Diplôme Développeur Web validant mes compétences acquises en
            autoformation.{' '}
          </p>
          <p>
            Depuis 2017 - Production de cartographies web, apprentissage
            autodidacte.
          </p>
          <DomainSkills
            title={'frontend'}
            skillsData={skills.filter((data) => data.type === 'frontend')}
          />
          <DomainSkills
            title={'backend'}
            skillsData={skills.filter((data) => data.type === 'backend')}
          />
          <DomainSkills
            title={'Gestion de projets web'}
            skillsData={skills.filter(
              (data) => data.type === 'Gestion de projets web'
            )}
          />
          <DomainSkills
            title={'Solutions Saas'}
            skillsData={skills.filter((data) => data.type === 'Solutions Saas')}
          />
        </div>
        {/* ENTREPRENEURIAT */}
        <div className={domainStyle}>
          <h4>Entrepreneuriat</h4>
          <p>
            2023 - Création du Saas BobeeBot, une solution de génération de
            contenu et de publication automatisée sur les réseaux sociaux.
          </p>
          <p>
            2017 - 2019 : Création d’une entreprise en BtoB de cartographie et
            cartographie web, Aralifi Cartographie.
          </p>
          <p>
            Accompagnement par la BGE IdF, avec des formations sur : le droit
            des sociétés et des affaires, la comptabilité, le marketing...
          </p>
          <DomainSkills
            title={''}
            skillsData={skills.filter(
              (data) => data.type === 'entrepreneuriat'
            )}
          />
        </div>
        {/* VIE d'AVANT */}
        <div className={domainStyle}>
          <h4>Ma vie d'avant</h4>
          <p>
            Coordinateur de la vie associative et des actions de terrains dans
            une association lyonnaise (4 ans).
          </p>
          <p>
            Serveur et barman dans l’hôtellerie/restauration, en ville et en
            station (7 ans).
          </p>
          <p>Titulaire d'un Master 2 Chimie de l’environnement.</p>
          <DomainSkills
            title={''}
            skillsData={skills.filter((data) => data.type === "Ma vie d'avant")}
          />
        </div>
      </div>
    </section>
  );
};
export default Skills;
