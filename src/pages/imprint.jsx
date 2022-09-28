import React from 'react';
import { LegalSection, Page, Seo } from 'gatsby-theme-portfolio-minimal';

export default function ImprintPage() {
  return (
    <>
      <Seo title="Imprint" useTitleTemplate noIndex />
      <Page>
        <LegalSection sectionId="imprint" heading="Imprint" />
      </Page>
    </>
  );
}
