import './globals.css';
import { Inter } from 'next/font/google';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiConfig } from 'wagmi';
import { wagmiConfig } from '../utils/web3';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider>
            {children}
          </RainbowKitProvider>
        </WagmiConfig>
      </body>
    </html>
  );
} 