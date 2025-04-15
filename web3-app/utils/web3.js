import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { createConfig, http } from 'wagmi';
import { mainnet, sepolia, goerli } from 'wagmi/chains';
import '@rainbow-me/rainbowkit/styles.css';

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;

const { wallets } = getDefaultWallets({
  appName: 'Web3 Token App',
  projectId,
  chains: [mainnet, sepolia, goerli],
});

export const config = createConfig({
  chains: [mainnet, sepolia, goerli],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [goerli.id]: http(),
  },
  connectors: wallets.map((wallet) => wallet.connector),
}); 