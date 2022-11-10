import '../styles/global.css';

import { AppProviders } from '@/components/app/Providers.client';

export default function RootLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
``;
