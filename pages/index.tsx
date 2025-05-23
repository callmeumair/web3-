import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useReadContract, useWriteContract } from 'wagmi';
import { useState } from 'react';
import { parseEther } from 'viem';
import TokenCard from '../components/TokenCard';
import TransactionHistory from '../components/TransactionHistory';
import Navigation from '../components/Navigation';

// ABI for the MyToken contract
const MyTokenABI = [
  "function balanceOf(address) view returns (uint256)",
  "function mint(address, uint256)",
  "function burn(uint256)"
] as const;

// Contract address from our deployment
const CONTRACT_ADDRESS = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

export default function Home() {
  const { address, isConnected } = useAccount();
  const [amount, setAmount] = useState('');

  const { writeContract: mint } = useWriteContract();
  const { writeContract: burn } = useWriteContract();

  const handleMint = () => {
    if (!amount || !address) return;
    mint({
      address: CONTRACT_ADDRESS,
      abi: MyTokenABI,
      functionName: 'mint',
      args: [address, parseEther(amount)]
    });
  };

  const handleBurn = () => {
    if (!amount) return;
    burn({
      address: CONTRACT_ADDRESS,
      abi: MyTokenABI,
      functionName: 'burn',
      args: [parseEther(amount)]
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-black text-white shadow-2xl" style={{boxShadow:'0 0 40px 10px rgba(59,130,246,0.3)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold mb-6 drop-shadow-[0_0_20px_rgba(59,130,246,0.7)]">
              Welcome to the Future of Token Management
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-200">
              Experience seamless token management with our Web3 application. 
              Mint, burn, and track your tokens with ease on the blockchain.
            </p>
            <div className="flex justify-center">
              <ConnectButton />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card p-6 rounded-lg shadow-lg border border-blue-900">
            <h3 className="text-xl font-semibold mb-4 text-blue-300">Token Management</h3>
            <p className="text-gray-400">
              Easily mint and burn tokens with a simple interface. 
              Perfect for testing and development.
            </p>
          </div>
          <div className="card p-6 rounded-lg shadow-lg border border-blue-900">
            <h3 className="text-xl font-semibold mb-4 text-blue-300">Real-time Balance</h3>
            <p className="text-gray-400">
              View your token balance in real-time. 
              Stay updated with your holdings.
            </p>
          </div>
          <div className="card p-6 rounded-lg shadow-lg border border-blue-900">
            <h3 className="text-xl font-semibold mb-4 text-blue-300">Transaction History</h3>
            <p className="text-gray-400">
              Track all your transactions with detailed history. 
              Never lose sight of your activity.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Section */}
      {isConnected && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">Your Token Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <TokenCard 
                address={address as `0x${string}`}
                tokenAddress={CONTRACT_ADDRESS}
              />
              
              <div className="card shadow rounded-lg p-6 border border-blue-900">
                <h2 className="text-2xl font-semibold mb-4 text-blue-200">Token Actions</h2>
                <div className="space-y-4">
                  <div>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Amount"
                      className="input-field"
                    />
                  </div>
                  <div className="flex space-x-4">
                    <button
                      onClick={handleMint}
                      className="btn-primary shadow-lg"
                    >
                      Mint
                    </button>
                    <button
                      onClick={handleBurn}
                      className="btn-secondary shadow-lg"
                    >
                      Burn
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <TransactionHistory />
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      {!isConnected && (
        <div className="bg-gradient-to-r from-blue-950 via-gray-900 to-black text-white py-16 shadow-2xl" style={{boxShadow:'0 0 40px 10px rgba(59,130,246,0.3)'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-blue-200">
              Connect your wallet to begin managing your tokens
            </p>
            <div className="flex justify-center">
              <ConnectButton />
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 