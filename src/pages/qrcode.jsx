import React from 'react';
import { Animation, Page, Section, Seo } from 'gatsby-theme-portfolio-minimal';

export default function QRCode() {
  return (
    <>
      <Seo title="Gallery" useTitleTemplate noIndex />
      <Page>
        <Animation type="fadeUp">
          <div style={{ textAlign: 'center' }}>
            <Section anchor="qrcode" heading="Download our QR code">
              <img src="/images/qr_code.png" alt="QR Code" style={{ width: '60%' }} />
              <p>
                <a href="/images/qr_code.png">Download PNG version</a>
              </p>
              <p>
                <a href="/images/qr_code.svg">Download SVG version</a>
              </p>
            </Section>
          </div>
        </Animation>
      </Page>
    </>
  );
}
