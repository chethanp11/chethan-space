import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site';

export const runtime = 'edge';

export function GET() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', background: '#123047', color: '#fffdf8', padding: 72, flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ fontSize: 24, letterSpacing: 4, textTransform: 'uppercase', color: '#f4efe7' }}>Technology · Leadership · AI · Systems</div>
      <div>
        <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -4 }}>{siteConfig.author}</div>
        <div style={{ marginTop: 20, fontSize: 38, lineHeight: 1.2, color: '#e6dccf', maxWidth: 930 }}>{siteConfig.description}</div>
      </div>
      <div style={{ fontSize: 26, color: '#d8b18f' }}>chethan.space</div>
    </div>,
    { width: 1200, height: 630 }
  );
}
