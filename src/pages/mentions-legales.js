import * as React from 'react';
import Seo from '../3_components/1_global/Seo';
import Layout from '../3_components/1_global/Layout';

const LegalPage = () => {
  return (
    <Layout>
      <section
        className="
      flex items-start flex-col gap-8 lg:gap-16 justify-start mt-8 md:mt-6
      min-h-35 mb-8 "
      >
        <div className="w-full">
          <h2>Mentions légales</h2>
        </div>
        <div className="flex flex-col gap-2 ">
          <h3>Conditions d’utilisation du site</h3>
          <p>
            Le Site Web gabrielgourcerol.com, désigné ci-après par le terme « le
            Site », vous est proposé sous certaines conditions d’utilisation,
            définissant l’ensemble des relations entre vous et le Site.
          </p>
          <p>
            La simple utilisation et/ou consultation de ce Site implique, de
            façon automatique et inconditionnelle, votre acceptation pleine et
            entière de l’ensemble de ses conditions d’utilisation.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3>Contenu</h3>
          <p>
            Les informations présentées sur le Site le sont à titre informatif.
            Leur exactitude et leur actualité ne sauraient être garanties. Les
            contenus, les services et la présentation du Site peuvent être
            modifiés à tout moment, sans préavis.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3>Propriété intellectuelle</h3>
          <p>
            L’ensemble du site relève de la législation sur les droits d’auteurs
            et la propriété intellectuelle, tant pour les éléments de son
            contenu (y compris, et de façon non limitative, le code source) que
            pour sa forme (y compris, et de façon non limitative, l’organisation
            des informations).
          </p>
          <p>
            Toute reproduction, représentation, diffusion, ou transmission, en
            tout ou partie du contenu du Site, des pages du Site, du code source
            du Site, ou de tout autre élément constitutif du Site, par quelque
            procédé que ce soit, et sur quelque support que ce soit, est
            interdite, sauf autorisation expresse et préalable de l’éditeur.
          </p>
          <p>
            Tout contrevenant verrait sa responsabilité engagée au titre de la
            contrefaçon, sanctionnée par les articles L 335-2 et suivants du
            Code de la Propriété Intellectuelle.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3> Données personnelles</h3>
          <p>
            Pour le traitement de vos demandes, le Site peut collecter des
            informations personnelles. Les informations que vous fournissez au
            Site ne seront pas transmises à des tiers.
          </p>
          <p>
            Conformément aux dispositions de l’Art. 34 de la loi » Informatique
            et Libertés « , vous disposez d’un droit d’accès, de modification,
            de rectification et de suppression des données qui vous concernent.
            Vous pouvez l’exercer auprès de l'éditeur du Site.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3>Liens hypertexte</h3>
          <p>
            Ce site comporte des liens hypertexte vers d’autres sites.
            L’existence d’un lien de ce site vers un autre site ne constitue pas
            une validation de ce site ou de son contenu. Il appartient à
            l’internaute d’utiliser ces informations avec discernement et esprit
            critique. La responsabilité de l’éditeur de ce site ne saurait être
            engagée du fait des informations, opinions et recommandations
            formulées sur ces sites.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3>Cookies</h3>
          <p>
            Les utilisateurs sont informés que lors de leurs visites sur le
            Site, un cookie peut s’installer automatiquement. Ce cookie ne
            permet pas d’identifier les utilisateurs mais il enregistre des
            informations liées à la navigation de ceux-ci sur le Site, à des
            fins de statistiques et d’améliorations du Site.
          </p>
          <p>
            Les utilisateurs du Site reconnaissent avoir été informés de cette
            pratique et autorisent le Site à l’employer. Ils pourront désactiver
            ce cookie par l’intermédiaire des paramètres de leur logiciel de
            navigation.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3>Crédits</h3>
          <p>
            Tous les contenus de ce site (textes, photos, dessins…), mis à part
            les logos de sociétés externes, ainsi que le site lui-même
            (maquette, navigation…) sont l’œuvre et la propriété de Gabriel
            Gourcerol. Tous droits réservés. Reproduction interdite sans
            l’accord express de l’auteur.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3>Editeur du site</h3>
          <p>Demander ces informations</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3>Hébergement</h3>
          <p>OVH SAS</p>
          <p>2 rue Kellermann</p>
          <p>BP 80157 59053 ROUBAIX</p>
        </div>
      </section>
    </Layout>
  );
};

export default LegalPage;

export const Head = () => <Seo title="Gabriel G. - Mentions légales" />;
