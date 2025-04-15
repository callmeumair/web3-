'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useContractRead, useContractWrite } from 'wagmi';
import { useState } from 'react';
import { wagmiConfig } from '../utils/web3';

// Replace with your deployed contract address
const TOKEN_CONTRACT_ADDRESS = 'YOUR_CONTRACT_ADDRESS';

export default function Home() {
  const { address, isConnected } = useAccount();
  const [amount, setAmount] = useState('');

  const { data: balance } = useContractRead({
    address: TOKEN_CONTRACT_ADDRESS,
    abi: [
      {
        inputs: [{ name: 'account', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
    ],
    functionName: 'balanceOf',
    args: [address],
    enabled: !!address,
  });

  const { write: transfer } = useContractWrite({
    address: TOKEN_CONTRACT_ADDRESS,
    abi: [
      {
        inputs: [
          { name: 'to', type: 'address' },
          { name: 'amount', type: 'uint256' },
        ],
        name: 'transfer',
        outputs: [{ name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
    functionName: 'transfer',
  });

  const handleTransfer = () => {
    if (!amount || !address) return;
    transfer({
      args: [address, BigInt(amount)],
    });
  };

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Web3 Token App</h1>
          <ConnectButton />
        </div>

        {isConnected && (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Your Token Balance</h2>
            <p className="text-2xl mb-4">
              {balance ? balance.toString() : '0'} SIMPLE
            </p>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Transfer Tokens</h3>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount to transfer"
                className="w-full p-2 border rounded"
              />
              <button
                onClick={handleTransfer}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Transfer
              </button>
            </div>
          </div>
        )}

        {!isConnected && (
          <div className="text-center py-8">
            <p className="text-xl">Connect your wallet to get started</p>
          </div>
        )}
      </div>
    </main>
  );
} 