import React from 'react';
import { Animation, Page, Section, Seo } from 'gatsby-theme-portfolio-minimal';
import Gallery from '@browniebroke/gatsby-image-gallery';
import { graphql } from 'gatsby';

// eslint-disable-next-line react/prop-types
export default function Gallery2({ data }) {
  // eslint-disable-next-line
  const images = data.allFile.edges.map(({ node }) => node.childImageSharp).filter(img => !!img);


  return (
    <>
      <Seo title="Gallery" useTitleTemplate noIndex />
      <Page>
        <Animation type="fadeUp">
          <Section anchor="gallery" heading="Gallery">
            <Gallery images={images} />
          </Section>
        </Animation>
      </Page>
    </>
  );
}

export const pageQuery = graphql`
  query ImagesForGallery {
    allFile {
      edges {
        node {
          childImageSharp {
            thumb: gatsbyImageData(width: 270, height: 270, placeholder: BLURRED)
            full: gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
