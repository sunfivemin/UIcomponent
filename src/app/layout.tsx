import type { Metadata } from 'next';
import '../styles/tailwind.css';
import '../styles/global.css';
import Gnb from './gnb';
import ThemeToggle from '../components/ThemeToggle';
import { themeClass } from '../styles/design-system.css';

export const metadata: Metadata = {
  title: 'UI요소모음',
  description: 'UI요소 만들기',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme && (theme === 'light' || theme === 'dark')) {
                    document.documentElement.setAttribute('data-theme', theme);
                  } else {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={themeClass} suppressHydrationWarning>
        <Gnb />
        <ThemeToggle />
        <main>{children}</main>
      </body>
    </html>
  );
};
export default Layout;
