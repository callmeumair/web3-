import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { createConfig, http } from 'wagmi';
import { mainnet, sepolia, goerli } from 'wagmi/chains';
import { createClient } from 'viem';
import '@rainbow-me/rainbowkit/styles.css';

const projectId = 'YOUR_PROJECT_ID'; // Get this from https://cloud.walletconnect.com/

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