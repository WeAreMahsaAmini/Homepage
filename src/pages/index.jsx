import React from 'react';
import {
  AboutSection,
  Animation,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Section,
  Seo,
} from 'gatsby-theme-portfolio-minimal';

export default function IndexPage() {
  return (
    <>
      <Seo title="We are Mahsa Amini" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="Why are people protesting?" />

        <Animation type="fadeUp">
          <Section anchor="request" heading="What are protesters asking for?">
            <div>
              <div>
                The protestors are not protesting against Islam or any other religion, they are
                fighting for woman&apos;s basic rights:
                <ul>
                  <li>The right to choose how they dress</li>
                  <li>The right to sing or dance</li>
                  <li>
                    The right to ask for a divorce, and to be considered to have custody over their
                    children
                  </li>
                  <li>The right to leave their country without their husband&apos;s permission</li>
                  <li>The right to go to the stadium</li>
                  <li>And many more basic rights...</li>
                </ul>
                They are fighting for freedom of speech, not only for journalists but for all
                citizens. They want their freedom back.
              </div>
            </div>
          </Section>
        </Animation>

        <Animation type="fadeUp">
          <Section anchor="chanting" heading="What are they chanting?">
            <div>
              <ul>
                <li>&quot;Woman, life, freedom.&quot;</li>
                <li>&quot;Death to the dictator!&quot;</li>
                <li>&quot;Freedom, freedom, freedom!&quot;</li>
                <li>&quot;We will fight and die, but we will get Iran back.&quot;</li>
              </ul>
            </div>
          </Section>
        </Animation>

        <Animation type="fadeUp">
          <Section anchor="help" heading="You can help...">
            <div>
              <a
                href="https://twitter.com/intent/tweet?text=I%20stand%20with%20the%20Iranian%20people%20and%20%23MahsaAmini%20movement.%20%23%D9%85%D9%87%D8%B3%D8%A7_%D8%A7%D9%85%DB%8C%D9%86%DB%8C%20%23OpIran%20"
                target="_blank"
                rel="noreferrer noopener"
                className="cta-button"
              >
                Be our voice
              </a>
            </div>
          </Section>
        </Animation>

        {/* <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} /> */}
        {/* <InterestsSection sectionId="details" heading="Details" /> */}
        {/* <ProjectsSection sectionId="features" heading="Events" /> */}
        {/* <ContactSection sectionId="github" heading="Issues?" /> */}
      </Page>
    </>
  );
}
