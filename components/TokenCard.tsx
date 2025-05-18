import React from 'react';
import { useReadContract } from 'wagmi';
import { parseEther } from 'viem';

interface TokenCardProps {
  address: `0x${string}`;
  tokenAddress: `0x${string}`;
}

const TokenCard = ({ address, tokenAddress }: TokenCardProps) => {
  const { data: balance } = useReadContract({
    address: tokenAddress,
    abi: [
      "function balanceOf(address) view returns (uint256)",
      "function name() view returns (string)",
      "function symbol() view returns (string)",
      "function decimals() view returns (uint8)"
    ],
    functionName: 'balanceOf',
    args: [address]
  });

  const { data: name } = useReadContract({
    address: tokenAddress,
    abi: ["function name() view returns (string)"],
    functionName: 'name'
  });

  const { data: symbol } = useReadContract({
    address: tokenAddress,
    abi: ["function symbol() view returns (string)"],
    functionName: 'symbol'
  });

  return (
    <div className="card card-3d p-6 mb-4 border border-blue-900 shadow-[0_0_30px_5px_rgba(59,130,246,0.3)]">
      <h3 className="text-xl font-semibold mb-2 text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]">{name || 'Loading...'}</h3>
      <div className="flex justify-between items-center">
        <span className="text-gray-400">Balance:</span>
        <span className="font-bold text-white">
          {balance ? `${balance.toString()} ${symbol || ''}` : 'Loading...'}
        </span>
      </div>
    </div>
  );
};

export default TokenCard; 