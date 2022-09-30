import React from 'react';
import { Animation, Page, Section, Seo } from 'gatsby-theme-portfolio-minimal';
import { GatsbyImage } from 'gatsby-plugin-image';
import parseHTML from 'html-react-parser';
import * as classes from './style.module.css';
import en from '../lang/en.json';

export default function IndexPage() {
  return (
    <>
      <Seo title="We are Mahsa Amini" />
      <Page useSplashScreenAnimation>
        <Animation type="fadeUp" delay={400}>
          <Section anchor="hero">
            <div className={classes.Hero}>
              <div className={classes.Intro}>
                <span className={classes.ImagePrefix}>{en.block[0].greeting}</span>

                <Animation
                  className={classes.Image}
                  type="waving-hand"
                  duration={2500}
                  iterationCount={3}
                >
                  <img
                    width="48"
                    height="48"
                    src="/images/waving-hand.png"
                    alt="Waving Hand Emoji"
                    loading="eager"
                  />
                </Animation>
              </div>
              <h1 className={classes.Title}>{en.block[0].question}</h1>
              <h2 className={classes.Subtitle}>{parseHTML(en.block[0].answer)}</h2>
            </div>
          </Section>
        </Animation>

        <Animation type="fadeUp">
          <Section anchor="about" heading={en.block[1].question}>
            <div>
              <div>{en.block[1].answer}</div>
              <Animation type="fadeLeft" delay={200}>
                <div>
                  <GatsbyImage image="../../content/images/mahsa_amini.png" alt="About Image" />
                </div>
              </Animation>
            </div>
          </Section>
        </Animation>

        <Animation type="fadeUp">
          <Section anchor="request" heading={en.block[2].question}>
            <div>
              <div>
                {en.block[2].answer[0]}
                <ul>
                  <li>{en.block[2].answer[1].list[0]}</li>
                  <li>{en.block[2].answer[1].list[1]}</li>
                  <li>{en.block[2].answer[1].list[2]}</li>
                  <li>{en.block[2].answer[1].list[3]}</li>
                  <li>{en.block[2].answer[1].list[4]}</li>
                  <li>{en.block[2].answer[1].list[5]}</li>
                </ul>
                {en.block[2].answer[2]}
              </div>
            </div>
          </Section>
        </Animation>

        <Animation type="fadeUp">
          <Section anchor="chanting" heading={en.block[3].question}>
            <div>
              <ul>
                <li>{en.block[3].answer[0].list[0]}</li>
                <li>{en.block[3].answer[0].list[1]}</li>
                <li>{en.block[3].answer[0].list[2]}</li>
                <li>{en.block[3].answer[0].list[3]}</li>
              </ul>
            </div>
          </Section>
        </Animation>

        <Animation type="fadeUp">
          <Section anchor="help" heading={en.help}>
            <div>
              <a
                href="https://twitter.com/intent/tweet?text=I%20stand%20with%20the%20Iranian%20people%20and%20%23MahsaAmini%20movement.%20%23%D9%85%D9%87%D8%B3%D8%A7_%D8%A7%D9%85%DB%8C%D9%86%DB%8C%20%23OpIran%20"
                target="_blank"
                rel="noreferrer noopener"
                className="cta-button"
              >
                {en.btnText}
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
