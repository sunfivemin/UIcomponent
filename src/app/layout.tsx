import type { Metadata } from 'next';
import '../styles/tailwind.css';
import '../styles/global.css';
import Gnb from './gnb';
import ThemeToggle from '../components/ThemeToggle';

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
    <html lang="ko">
      <body>
        <Gnb />
        <ThemeToggle />
        <main>{children}</main>
      </body>
    </html>
  );
};
export default Layout;
