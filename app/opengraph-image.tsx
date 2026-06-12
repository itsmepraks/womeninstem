import { ImageResponse } from 'next/og';
import { SITE_DESCRIPTION, SITE_NAME } from '@/lib/constants';

export const runtime = 'edge';
export const alt = `${SITE_NAME} resource directory for women in STEM`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: '#fffaf4',
          color: '#202020',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 28,
            color: '#7c3f58',
          }}
        >
          <span>{SITE_NAME}</span>
          <span>Women in STEM</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div
            style={{
              fontSize: 82,
              lineHeight: 1,
              letterSpacing: 0,
              maxWidth: 920,
              fontWeight: 700,
            }}
          >
            Scholarships, courses, mentors, and organizations in one place
          </div>
          <div
            style={{
              fontSize: 32,
              lineHeight: 1.35,
              maxWidth: 840,
              color: '#4b4b4b',
            }}
          >
            {SITE_DESCRIPTION}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 16, fontSize: 26, color: '#7c3f58' }}>
          <span>Scholarships</span>
          <span>Courses</span>
          <span>Mentorship</span>
          <span>Community</span>
        </div>
      </div>
    ),
    size,
  );
}
