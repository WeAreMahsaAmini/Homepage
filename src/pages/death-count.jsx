import React from 'react';
import { Animation, Page, Section, Seo } from 'gatsby-theme-portfolio-minimal';
import CountUp from 'react-countup';

// eslint-disable-next-line react/prop-types
export default function QRCode({ serverData }) {
  const { total_executions, juvenile_executions, women_executions } = serverData || {};
  return (
    <>
      <Seo title="Gallery" useTitleTemplate noIndex />
      <Page>
        <Animation type="fadeUp">
          <div style={{ textAlign: 'center' }}>
            <Section anchor="deathcount" heading="2022 Protests Death Count">
              <p className="cta-button">
                Total executions: <CountUp duration="1" end={total_executions} />
              </p>
              <p className="cta-button">
                Juvenile executions: <CountUp duration="1" end={juvenile_executions} />
              </p>
              <p className="cta-button">
                Women executions: <CountUp duration="1" end={women_executions} />
              </p>
            </Section>
          </div>
        </Animation>
      </Page>
    </>
  );
}

export async function getServerData() {
  try {
    // https://iranhr.net/en/ is protected by cloudflare, so bots cannot access
    // I am working on alternatives. In the mean time, let's hard code the values
    // I manually pulled from https://iranhr.net/en/.
    // const res = await fetch(`https://iranhr.net/en/`);

    // if (!res.ok) {
    //   throw new Error(`Response failed`);
    // }

    // const retData = await res.json();

    const retData = {
      total_executions: 435,
      juvenile_executions: 2,
      women_executions: 12,
    };

    return {
      props: await retData,
    };
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    };
  }
}
