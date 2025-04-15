import './globals.css';
import { Inter } from 'next/font/google';
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { config } from '../utils/web3';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WagmiProvider config={config}>
          <RainbowKitProvider>
            {children}
          </RainbowKitProvider>
        </WagmiProvider>
      </body>
    </html>
  );
} 