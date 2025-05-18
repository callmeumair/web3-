import React from 'react';
import { useAccount } from 'wagmi';
import { useEffect, useState } from 'react';

interface Transaction {
  hash: string;
  from: string;
  to: string;
  value: string;
  timestamp: number;
}

const TransactionHistory = () => {
  const { address } = useAccount();
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    if (!address) return;

    // This is a placeholder for actual transaction fetching
    // In a real app, you would use ethers.js or viem to fetch transactions
    const mockTransactions: Transaction[] = [
      {
        hash: '0x123...abc',
        from: address,
        to: '0x456...def',
        value: '1.0',
        timestamp: Date.now()
      }
    ];

    setTransactions(mockTransactions);
  }, [address]);

  return (
    <div className="card p-6 border border-blue-900 shadow-[0_0_20px_2px_rgba(59,130,246,0.15)]">
      <h3 className="text-xl font-semibold mb-4 text-white drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">Recent Transactions</h3>
      {transactions.length > 0 ? (
        <div className="space-y-4">
          {transactions.map((tx, index) => (
            <div key={index} className="border-b border-gray-700 pb-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">From:</span>
                <span className="font-mono text-sm text-gray-300">{tx.from}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">To:</span>
                <span className="font-mono text-sm text-gray-300">{tx.to}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Value:</span>
                <span className="font-bold text-white">{tx.value} ETH</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No transactions found</p>
      )}
    </div>
  );
};

export default TransactionHistory; 