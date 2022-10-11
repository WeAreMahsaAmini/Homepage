import React from 'react';
import { AboutSection, Animation, Page, Section, Seo } from 'gatsby-theme-portfolio-minimal';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import parseHTML from 'html-react-parser';
import { Helmet } from 'react-helmet';
import * as classes from './style.module.css';

function BlogPostTemplate(props) {
  // eslint-disable-next-line import/no-dynamic-require, react/destructuring-assignment, global-require, react/prop-types
  const lang = require(`../lang/${props.lang}.json`);
  return (
    <>
      <Seo
        title="We Are Mahsa Amini | A Voice for Women in Iran"
        description="Human rights are being violated in Iran. The Iranian government is killing, beating, and arresting protesters who are fighting for women's basic human rights. Join the movement by being our voice."
      />
      <Helmet>
        <meta property="og:image" content="https://wearemahsaamini.com/images/social_banner.png" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:width" content="630" />
        <meta property="twitter:card" content="summary_large_image" />
      </Helmet>
      <Page useSplashScreenAnimation>
        <Animation type="fadeUp" delay={400}>
          <Section anchor="hero">
            <div className={classes.Hero}>
              <div className={classes.Intro}>
                <span className={classes.ImagePrefix}>{lang.block[0].greeting}</span>

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
              <h1 className={classes.Title}>{lang.block[0].question}</h1>
              <h2 className={classes.Subtitle}>{parseHTML(lang.block[0].answer)}</h2>
            </div>
          </Section>
        </Animation>

        <Animation type="fadeUp">
          <Section anchor="about" heading={lang.block[1].question}>
            <div className={classes.About}>
              <div className={classes.Description}>{lang.block[1].answer}</div>
              <Animation type="fadeLeft" delay={200}>
                <div className={classes.ImageWrapper}>
                  <img src="/images/mahsa_amini.png" alt="About Mahsa Amini" />
                </div>
              </Animation>
            </div>
          </Section>
        </Animation>

        <Animation type="fadeUp">
          <Section anchor="request" heading={lang.block[2].question}>
            <div>
              <div>
                {lang.block[2].answer[0]}
                <ul>
                  {lang.block[2].answer[1].list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {lang.block[2].answer[2]}
              </div>
            </div>
          </Section>
        </Animation>

        <Animation type="fadeUp">
          <Section anchor="chanting" heading={lang.block[3].question}>
            <div className={classes.About}>
              <div>
                <ul>
                  {lang.block[3].answer[0].list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <Animation type="fadeLeft" delay={200}>
                <div className={classes.IranMapContainer}>

                </div>
              </Animation>
            </div>
          </Section>
        </Animation>

        <Animation type="fadeUp">
          <Section anchor="help" heading={lang.help}>
            <div>
              <a
                href="https://twitter.com/intent/tweet?text=I%20stand%20with%20the%20Iranian%20people%20and%20%23MahsaAmini%20movement.%20%23%D9%85%D9%87%D8%B3%D8%A7_%D8%A7%D9%85%DB%8C%D9%86%DB%8C%20%23OpIran%20"
                target="_blank"
                rel="noreferrer noopener"
                className="cta-button"
              >
                {lang.btnText}
              </a>
            </div>
          </Section>
        </Animation>

        <Animation type="fadeUp">
          <Section anchor="help" heading="Read it in your language">
            <ul className="languages">
              <li>
                <a href="/">English</a>
              </li>
              <li>
                <a href="/ar">عربي</a>
              </li>
              <li>
                <a href="/fr">French</a>
              </li>
              <li>
                <a href="/es">Spanish</a>
              </li>
              <li>
                <a href="/de">German</a>
              </li>
              <li>
                <a href="/nl">Dutch</a>
              </li>
              <li>
                <a href="/it">Italian</a>
              </li>
              <li>
                <a href="/kr">Korean</a>
              </li>
              <li>
                <a href="/th">Thai</a>
              </li>
              <li>
                <a href="/tr">Turkish</a>
              </li>
            </ul>
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
export default BlogPostTemplate;
