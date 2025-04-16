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
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Recent Transactions</h3>
      {transactions.length > 0 ? (
        <div className="space-y-4">
          {transactions.map((tx, index) => (
            <div key={index} className="border-b pb-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">From:</span>
                <span className="font-mono text-sm">{tx.from}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">To:</span>
                <span className="font-mono text-sm">{tx.to}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Value:</span>
                <span className="font-bold">{tx.value} ETH</span>
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