import type { Metadata } from 'next';
import StyledComponentsRegistry from '../lib/styled-components-registry';
import { SITE_METADATA } from './site-metadata';

export const metadata: Metadata = {
  title: {
    default: SITE_METADATA.title,
    template: `%s | ${SITE_METADATA.title}`,
  },
  description: SITE_METADATA.description,
  openGraph: {
    type: 'website',
  },
  icons: [
    {
      rel: 'icon',
      url:
        process.env.NODE_ENV === 'production'
          ? '/images/favicon.png'
          : '/images/favicon.development.png',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
