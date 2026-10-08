import type {Metadata} from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://saurabh-bhatia-portfolio.pages.dev'),
  title: 'Saurabh Bhatia — Technical Program Manager | Ex-Amazon & Google | Cloud Infrastructure & Applied AI Integrations | Sydney',
  description:
    'Sydney-based Senior Technical Program Manager (Australian Permanent Resident) with 11+ years across Amazon and Google — release governance and program leadership. Open to senior TPM roles.',
  keywords: [
    'Senior Technical Program Manager',
    'Technical Program Manager Sydney',
    'Release Management',
    'Program Delivery',
    'Agile Delivery',
    'Sydney Technology Jobs',
  ],
  openGraph: {
    title: 'Saurabh Bhatia — Technical Program Manager | Ex-Amazon & Google | Cloud Infrastructure & Applied AI Integrations | Sydney',
    description:
      '11+ years of enterprise software delivery across Amazon, Google and SaaS. Sydney-based, open to senior TPM roles.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saurabh Bhatia — Technical Program Manager | Ex-Amazon & Google | Cloud Infrastructure & Applied AI Integrations | Sydney',
    description:
      '11+ years of enterprise software delivery across Amazon, Google and SaaS. Sydney-based, open to senior TPM roles.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`dark scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-black text-[#f5f5f7] antialiased selection:bg-white/20 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
