import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Docs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="card shadow-lg p-8 border border-blue-900">
          <h1 className="text-4xl font-bold text-white mb-8 drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]">Documentation</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
            <p className="text-gray-600 mb-4">
              This Web3 application allows you to interact with a custom ERC20 token on the blockchain.
              Connect your wallet to get started.
            </p>
            <div className="flex justify-center mb-4">
              <ConnectButton />
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>View your token balance</li>
              <li>Mint new tokens (owner only)</li>
              <li>Burn your tokens</li>
              <li>View transaction history</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Smart Contract</h2>
            <p className="text-gray-600 mb-4">
              The MyToken contract is an ERC20 token with the following features:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Standard ERC20 functionality</li>
              <li>Minting capability (owner only)</li>
              <li>Burn functionality</li>
              <li>Initial supply of 1,000,000 tokens</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Frontend</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Next.js</li>
                  <li>React</li>
                  <li>Tailwind CSS</li>
                  <li>RainbowKit</li>
                  <li>wagmi</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Smart Contracts</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Solidity</li>
                  <li>Hardhat</li>
                  <li>OpenZeppelin</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Development</h2>
            <p className="text-gray-600 mb-4">
              To run this project locally:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>
{`# Install dependencies
npm install

# Start local blockchain
npx hardhat node

# Deploy contracts
npx hardhat run scripts/deploy.ts --network localhost

# Start development server
npm run dev`}
              </code>
            </pre>
          </section>
        </div>
      </div>
    </div>
  );
} 