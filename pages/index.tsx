import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useReadContract, useWriteContract } from 'wagmi';
import { useState } from 'react';
import { parseEther } from 'viem';

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

  const { data: balance } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: MyTokenABI,
    functionName: 'balanceOf',
    args: [address as `0x${string}`],
    enabled: Boolean(address)
  });

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
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Welcome to My Web3 App
          </h1>
          <ConnectButton />
          
          {isConnected && (
            <div className="mt-8">
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Token Balance</h2>
                <p className="text-xl mb-4">
                  {balance ? `${balance.toString()} MTK` : 'Loading...'}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Amount"
                      className="w-full px-4 py-2 border rounded-md"
                    />
                  </div>
                  <div className="flex space-x-4">
                    <button
                      onClick={handleMint}
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                      Mint
                    </button>
                    <button
                      onClick={handleBurn}
                      className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                    >
                      Burn
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 