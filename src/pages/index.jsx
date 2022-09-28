import React from 'react';
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from 'gatsby-theme-portfolio-minimal';

export default function IndexPage() {
  return (
    <>
      <Seo title="We are Mahsa Amini" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Mahsa Amini" />
        <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} />
        <InterestsSection sectionId="details" heading="Details" />
        <ProjectsSection sectionId="features" heading="Built-in Features" />
        <ContactSection sectionId="github" heading="Issues?" />
      </Page>
    </>
  );
}
