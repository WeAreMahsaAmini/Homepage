/* eslint-disable camelcase */
import React from 'react';
import { Animation, Page, Section, Seo } from 'gatsby-theme-portfolio-minimal';
import CountUp from 'react-countup';

// eslint-disable-next-line react/prop-types
export default function DeathCount({ serverData }) {
  // eslint-disable-next-line react/prop-types
  const { total_executions, juvenile_executions, women_executions } = serverData;

  return (
    <>
      <Seo title="Gallery" useTitleTemplate noIndex />
      <Page>
        <Animation type="fadeUp">
          <div style={{ textAlign: 'center' }}>
            <Section anchor="deathcount" heading="2022 Protests Death Count">
              <p className="cta-button">
                Total executions: <CountUp duration="5" end={total_executions} />
              </p>
              <p className="cta-button">
                Juvenile executions: <CountUp duration="5" end={juvenile_executions} />
              </p>
              <p className="cta-button">
                Women executions: <CountUp duration="5" end={women_executions} />
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
    // https://iranhr.net/en/ is protected by cloudflare, so it's difficult for bots to access.
    // Using parsehub.com, we are able to pull the data. I've configured the data to be refreshed
    // once every 24 hours at 00:00 UTC. To test parsehub API: `curl [URL] | gunzip`.
    const res = await fetch(
      `https://parsehub.com/api/v2/projects/trkXTA5GuEWn/last_ready_run/data?api_key=tOGO-QEJ79pF&format=json`
    );

    if (!res.ok) {
      throw new Error(`Response failed`);
    }

    const retData = await res.json();

    return {
      props: await retData,
    };
  } catch (error) {
    // In case of error, default to today's available data
    return {
      props: {
        total_executions: '439',
        juvenile_executions: '3',
        women_executions: '13',
      },
    };
  }
}
