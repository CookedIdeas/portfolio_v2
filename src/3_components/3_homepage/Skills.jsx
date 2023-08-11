import React from 'react';
import DomainSkills from './6_Skills/DomainSkills';
import { skills_2 } from '../../1_assets/datas/skills_2';

const Skills = () => {
  const domainStyle = 'flex flex-col gap-6 [&>p]:!text-start';

  return (
    <section className="min-h-35 flex flex-col gap-12" id="competences_section">
      <h2>Mes compétences</h2>
      <div className="flex flex-col gap-8 px-2">
        <div className={domainStyle}>
          <h3>Développement web</h3>
          <p>
            2023 - Diplôme Développeur Web validant mes compétences acquises en
            autoformation.{' '}
          </p>
          <p>
            Depuis 2017 - Production de cartographies web, apprentissage
            autodidacte.
          </p>
          <DomainSkills
            title={skills_2.frontend.title}
            skillsData={skills_2.frontend.skills}
          />
          <DomainSkills
            title={skills_2.backend.title}
            skillsData={skills_2.backend.skills}
          />
          <DomainSkills
            title={skills_2.saasSolutions.title}
            skillsData={skills_2.saasSolutions.skills}
          />
          <DomainSkills
            title={skills_2.webProjectManagement.title}
            skillsData={skills_2.webProjectManagement.skills}
          />
          <DomainSkills
            title={skills_2.webMapping.title}
            skillsData={skills_2.webMapping.skills}
          />
        </div>
        {/* ENTREPRENEURIAT */}
        <div className={domainStyle}>
          <h3>Entrepreneuriat</h3>
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
            skillsData={skills_2.businessManagement.skills}
          />
        </div>
        {/* VIE d'AVANT */}
        <div className={domainStyle}>
          <h3>Ma vie d'avant</h3>
          <p>
            Coordinateur de la vie associative et des actions de terrains dans
            une association lyonnaise (4 ans).
          </p>
          <p>
            Serveur et barman dans l’hôtellerie/restauration, en ville et en
            station (7 ans).
          </p>
          <p>Titulaire d'un Master 2 Chimie de l’environnement.</p>
          <DomainSkills title={''} skillsData={skills_2.beforeLife.skills} />
        </div>
      </div>
    </section>
  );
};
export default Skills;
