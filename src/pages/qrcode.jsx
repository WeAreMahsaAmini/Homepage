import React, { useState } from 'react';
import { Animation, Page, Section, Seo } from 'gatsby-theme-portfolio-minimal';

export default function QRCode() {
  const [locale, setLocale] = useState('en');
  return (
    <>
      <Seo title="Gallery" useTitleTemplate noIndex />
      <Page>
        <Animation type="fadeUp">
          <div style={{ textAlign: 'center' }}>
            <Section anchor="qrcode" heading="Download our QR code">
              <p>
                Feel free to print this QR code or use it in your signs to guide people to this
                website.
              </p>
              <div style={{ marginBottom: '10px' }}>
                <select
                  style={{ padding: '5px' }}
                  onChange={(e) => {
                    setLocale(e.currentTarget.value);
                  }}
                >
                  <option value="en">English website</option>
                  <option value="fr">French website</option>
                  <option value="it">Italian website</option>
                  <option value="nl">Dutch website</option>
                  <option value="th">Thai website</option>
                  <option value="kr">Korean website</option>
                </select>
              </div>
              <img src={`/images/qr_code_${locale}.png`} alt="QR Code" style={{ width: '60%' }} />
              <p>
                <a href={`/images/qr_code_${locale}.png`}>Download PNG version</a>
              </p>
              <p>
                <a href={`/images/qr_code_${locale}.svg`}>Download SVG version</a>
              </p>
            </Section>
          </div>
        </Animation>
      </Page>
    </>
  );
}
