import React from 'react';
import { Animation, Page, Section, Seo } from 'gatsby-theme-portfolio-minimal';
import * as classes from '../templates/style.module.css';

export default function forIranPage() {
  return (
    <>
      <Seo title="We are Mahsa Amini" />
      <Page useSplashScreenAnimation>
        <Animation type="fadeUp" delay={400}>
          <Section anchor="hero">
            <div className={classes.Hero}>
              <iframe
                title="Global Protest Map"
                src="https://www.google.com/maps/d/embed?mid=1WX-p_1BVlIjywka1zsopdEQhNg1smTM&ehbc=2E312F"
                frameBorder="0"
                style={{
                  height: 'calc(100vh - 8rem)',
                  marginTop: '-2rem',
                }}
              ></iframe>
            </div>
          </Section>
        </Animation>
      </Page>
    </>
  );
}
