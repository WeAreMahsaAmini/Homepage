import React from 'react';
import { Animation, Page, Section, Seo } from 'gatsby-theme-portfolio-minimal';
import CountUp from 'react-countup';

// eslint-disable-next-line react/prop-types
export default function DeatCount() {
  const data = {
    total_executions: 435,
    juvenile_executions: 2,
    women_executions: 12,
  };

  return (
    <>
      <Seo title="Gallery" useTitleTemplate noIndex />
      <Page>
        <Animation type="fadeUp">
          <div style={{ textAlign: 'center' }}>
            <Section anchor="deathcount" heading="2022 Protests Death Count">
              <p className="cta-button">
                Total executions: <CountUp duration="1" end={data.total_executions} />
              </p>
              <p className="cta-button">
                Juvenile executions: <CountUp duration="1" end={data.juvenile_executions} />
              </p>
              <p className="cta-button">
                Women executions: <CountUp duration="1" end={data.women_executions} />
              </p>
            </Section>
          </div>
        </Animation>
      </Page>
    </>
  );
}
