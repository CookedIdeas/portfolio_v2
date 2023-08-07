import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          description
          githubUsername
          siteDefaultLang
          image
          linkedInUsername
          siteUrl
          title
        }
      }
    }
  `);
  return data.site.siteMetadata;
};
