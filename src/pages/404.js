import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../3_components/1_global/Layout';

const NotFoundPage = () => {
  return (
    <Layout isIndexPage={false}>
      <div className="min-h-[55vh] md:min-h-screen mt-12 md:mt-0 flex flex-col items-center justify-center gap-4">
        <h1 className="text-9xl">404</h1>
        <h2 className="text-center text-xl">Cette page n'existe pas !</h2>
        <Link to="/" className="relative effect-underline">
          Revenir à l'accueil
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>Aïe... | Gabriel G. - Développeur web</title>;
