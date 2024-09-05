import React, { useState, useEffect, useContext } from 'react'
import { FaRegCopy } from "react-icons/fa";
import { MdOutlineCallReceived } from "react-icons/md";
import AddressContext from '../context/walletAddressContect';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

export default function HomePage() {
    const { account, setAccount } = useContext(AddressContext)
    const [receivedTransactions, setReceivedTransactions] = useState([]);
    const navigate = useNavigate();
    const [balance, setBalance] = useState('0');

    useEffect(() => {
        const storedAccount = localStorage.getItem('account');
        if (storedAccount) {
            setAccount(storedAccount);  // Retrieve account from local storage on page load
        } else if (!account) {
            navigate('/connect-wallet');
        }
    }, [account, setAccount, navigate]);

    useEffect(() => {
        const fetchBalance = async () => {
            if (account) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const balanceInWei = await provider.getBalance(account);
                const balanceInEth = ethers.utils.formatEther(balanceInWei);  // Convert balance from Wei to ETH
                setBalance(balanceInEth);
            }
        };
        fetchBalance();
    }, [account]);



    useEffect(() => {
        if (account) {
            const fetchTransactions = async () => {
                const apiKey = 'P7G3MXPIQ7I2P93DHKDRKIW2P2UEZ27B9P';
                const url = `https://api-sepolia.etherscan.io/api?module=account&action=txlist&address=${account}&startblock=0&endblock=99999999&sort=desc&apikey=${apiKey}`;

                try {
                    const response = await fetch(url);
                    const data = await response.json();

                    if (data.status === '1') {
                        // Filter for received transactions
                        const receivedTransactions = data.result.filter(tx => tx.to.toLowerCase() === account.toLowerCase());
                        setReceivedTransactions(receivedTransactions);
                    } else {
                        console.error('Error fetching transactions:', data.message);
                    }
                } catch (error) {
                    console.error('Fetch error:', error);
                }
            };

            fetchTransactions();
        }
    }, [account]);



    if (!account) {
        return <p>Redirecting to connect wallet page</p>;
    }
    const walletAddress = account;
    const start = walletAddress.slice(0, 6);
    const end = walletAddress.slice(-6);

    const handleReceivePaymentClick = () => {
        navigate('/new-payment');
    };
    const handleRecentTransactionClick = () => {
        navigate('/recent-transactions');
    };



    return (
        <>
            {/* {account} */}

            <div className="homepage p-2">
                <p className="greet text-3xl mt-6 ml-6 font-bold">SevenEleven Shops Pvt.</p>
                <p className="soladdress ml-6 overflow-hidden flex mt-1"> {start}....{end}
                    <FaRegCopy className='ml-2 mt-1 mr-3' />
                    BAL: <b> {balance} ETH </b>
                </p>

                {/* commands */}

                <div className="flex space-x-10 mt-10 mx-6 justify-center">

                    <div className="border-black border w-20 h-20" onClick={handleReceivePaymentClick}>
                        <img src="/images/bitcoin.png" className='scale-50' alt="" />
                        <p className="text-center mt-1">
                            Receive Payments
                        </p>
                    </div>
                    <div className="border-black border w-20 h-20" onClick={handleRecentTransactionClick}>
                        <img src="/images/transaction.png" className='scale-50' alt="" />
                        <p className="text-center mt-1">
                            Recent Payments
                        </p>
                    </div>
                    <div className="border-black border w-20 h-20">
                        <img src="/images/bitcoin.png" className='scale-50' alt="" />
                        <p className="text-center mt-1">
                            Demo
                        </p>
                    </div>

                </div>

                {/* recent transactions */}
                <div className="recent-transactions mt-20 ml-6 ">
                    <p className="font-bold text-2xl">Recent Transactions</p>
                    {receivedTransactions.length === 0 ? (
                        <p>No recent received transactions found.</p>
                    ) : (
                        receivedTransactions.map(tx => (
                            <div className="transactions mt-4 flex" key={tx.hash}>
                                <MdOutlineCallReceived size={30} className='mt-3 mr-2' />
                                <div className="transact">
                                    <p className="">{ethers.utils.formatEther(tx.value)} ETH</p>
                                    <p className="add">{tx.from.slice(0, 24)}....</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>


        </>

    )
}


