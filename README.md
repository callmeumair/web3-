# Web3 Project

A comprehensive Web3 project exploring blockchain technologies and decentralized applications.

## Features

- Ethereum, Polygon, and Arbitrum support
- ERC20 token implementation
- Wallet connection (MetaMask, WalletConnect, Coinbase Wallet)
- Modern UI with Tailwind CSS
- Smart contract development with Hardhat
- IPFS integration for file storage

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MetaMask or other Web3 wallet
- Alchemy/Infura account
- WalletConnect Project ID

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd web3-project
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
ETHEREUM_RPC_URL=your-ethereum-rpc-url
POLYGON_RPC_URL=your-polygon-rpc-url
ARBITRUM_RPC_URL=your-arbitrum-rpc-url
ETHERSCAN_API_KEY=your-etherscan-api-key
POLYGONSCAN_API_KEY=your-polygonscan-api-key
ARBISCAN_API_KEY=your-arbiscan-api-key
PRIVATE_KEY=your-private-key
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your-walletconnect-project-id
```

4. Compile and deploy the smart contract:
```bash
npx hardhat compile
npx hardhat deploy --network <network-name>
```

5. Start the development server:
```bash
npm run dev
```

## Project Structure

```
web3-project/
├── contracts/              # Smart contracts
├── pages/                  # Next.js pages
├── public/                 # Static files
├── styles/                 # CSS styles
├── hardhat.config.ts       # Hardhat configuration
├── next.config.js          # Next.js configuration
├── package.json            # Project dependencies
├── tailwind.config.js      # Tailwind CSS configuration
└── README.md               # Project documentation
```

## Technologies Used

- **Blockchain**: Ethereum, Polygon, Arbitrum
- **Smart Contracts**: Solidity, Hardhat, OpenZeppelin
- **Frontend**: React.js, Next.js, Tailwind CSS
- **Web3**: wagmi, RainbowKit, Ethers.js
- **Storage**: IPFS, Pinata
- **APIs**: The Graph, Alchemy/Infura

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 