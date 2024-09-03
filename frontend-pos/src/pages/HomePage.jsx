import React, { useState } from 'react'
import { FaRegCopy } from "react-icons/fa";
import { MdOutlineCallReceived } from "react-icons/md";
import { ethers } from 'ethers';






export default function HomePage() {

    // const [account, setAccount] = useState(null);
    // const [balance, setBalance] = useState(null);
    // const [transactions, setTransactions] = useState([]);

    // const connectWallet = async () => {
    //     if (window.ethereum) {
    //         try {
    //             const provider = new ethers.providers.Web3Provider(window.ethereum);
    //             const accounts = await provider.send('eth_requestAccounts', []);
    //             const currentAcc = setAccount(accounts[0]);
    //         } catch (error) {
    //             console.log(error);

    //         }
    //     }
    // }

    const addresss = 'EJxYGZ9yCaSPjaRd6fMv8Cxv3wTo1CKtNo8zDNsPgzHX';

    const start = addresss.slice(0, 6);
    const end = addresss.slice(-6);

    return (

        <>

            <div className="homepage p-2">
                <p className="greet text-3xl mt-6 ml-6 font-bold">SevenEleven Shops Pvt.</p>
                <p className="soladdress ml-6 overflow-hidden flex mt-1">{start}...{end}
                    <FaRegCopy className='ml-2 mt-1 mr-3' />
                    BAL: <b> 45 ETH </b>
                </p>

                {/* commands */}

                <div className="flex space-x-10 mt-10 mx-6 justify-center">

                    <div className="border-black border w-20 h-20 ">
                        <img src="/images/bitcoin.png" className='scale-50' alt="" />
                        <p className="text-center mt-1">
                            Receive Payments
                        </p>
                    </div>
                    <div className="border-black border w-20 h-20">
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

                    <p className="font-bold text-2xl">Recent Transations</p>

                    <div className="transactions mt-4 flex">
                        <MdOutlineCallReceived size={30} className='mt-3 mr-2' />
                        <div className="transact">
                            <p className="">0.234 ETH</p>
                            <p className="add">{addresss.slice(0, 24)}....</p>
                        </div>
                    </div>
                    <div className="transactions mt-4 flex">
                        <MdOutlineCallReceived size={30} className='mt-3 mr-2' />
                        <div className="transact">
                            <p className="">0.234 ETH</p>
                            <p className="add">{addresss.slice(0, 24)}....</p>
                        </div>
                    </div>
                    <div className="transactions mt-4 flex">
                        <MdOutlineCallReceived size={30} className='mt-3 mr-2' />
                        <div className="transact">
                            <p className="">0.234 ETH</p>
                            <p className="add">{addresss.slice(0, 24)}....</p>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}


