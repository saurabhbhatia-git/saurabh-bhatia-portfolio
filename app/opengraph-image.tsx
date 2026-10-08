import { ImageResponse } from 'next/og';

export const alt = 'Saurabh Bhatia — Technical Program Manager, Ex-Amazon & Google, Cloud Infrastructure & Applied AI Integrations';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#09090b',
          color: '#f5f5f7',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 88, fontWeight: 800, letterSpacing: -3 }}>Saurabh Bhatia</div>
        <div style={{ fontSize: 30, marginTop: 18, color: '#a1a1a6' }}>
          Technical Program Manager · Ex-Amazon &amp; Google · Cloud Infrastructure &amp; Applied AI Integrations
        </div>
        <div style={{ fontSize: 26, marginTop: 32, color: '#86868b' }}>
          Sydney, Australia · Open to Senior TPM Roles
        </div>
      </div>
    ),
    { ...size }
  );
}
