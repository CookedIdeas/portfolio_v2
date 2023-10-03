import * as React from 'react';
import Seo from '../3_components/1_global/Seo';
import Introduction from '../3_components/3_homepage/Introduction';
import References from '../3_components/3_homepage/References';
import Recommandations from '../3_components/3_homepage/Recommandations';
import WorkProcess from '../3_components/3_homepage/WorkProcess';
import Skills from '../3_components/3_homepage/Skills';
import Contact from '../3_components/3_homepage/Contact';

import Layout from '../3_components/1_global/Layout';

const IndexPage = () => {
  return (
    <Layout isIndexPage={true}>
      <Introduction />
      <References />
      <Recommandations />
      <WorkProcess />
      <Skills />
      <Contact />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Gabriel G. - Développeur web" />;
