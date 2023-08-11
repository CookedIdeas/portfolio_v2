import React from 'react';
import DomainSkills from './6_Skills/DomainSkills';
import { skills_2 } from '../../1_assets/datas/skills_2';

const Skills = () => {
  const domainStyle = 'flex flex-col gap-4 [&>p]:!text-start';

  return (
    <section className="min-h-35 flex flex-col gap-12" id="competences_section">
      <h2>Mes compétences</h2>
      <div className="flex flex-col gap-8 px-2">
        <div className={domainStyle}>
          <h3>Développement web</h3>
          <p>
            En 2017, suite à une demande d'un client, j'ai appris à développer
            des cartographies web. Je n'ai cessé de m'intéresser au
            développement web depuis.
          </p>
          <p>
            Pour assoir mes compétences et dépasser le cadre de la cartographie,
            j'ai depuis obtenu un diplôme développeur web niveau bac +2.
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
            De 2017 à 2019, j'ai fondé une entreprise BtoB de cartographie et
            cartographie web, Aralifi Cartographie.
          </p>
          <p>
            Puis, durant mes études en développement web, j'ai créé le Saas
            BobeeBot (site bientôt en ligne !).
          </p>
          <p>
            Cet outil permet d'automatiser sa communication sur les réseaux
            sociaux. Finies les journées à préparer les publis des trois
            prochains mois !
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
            Avant le web et l'entrepreneuriat, j'ai eu de multiples expériences,
            de la coordination d'association à l'hôtellerie/restauration.
          </p>
          <DomainSkills title={''} skillsData={skills_2.beforeLife.skills} />
        </div>
      </div>
    </section>
  );
};
export default Skills;
