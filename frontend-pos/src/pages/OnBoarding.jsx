import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { IoMdArrowRoundBack } from "react-icons/io";
import { ethers } from 'ethers'


export function OnBoarding() {


    return (
        <>
            <div className="box my-16 ">

                <div className="on-board ">

                    <p className="text-3xl font-bold flex justify-center">Welcome To SOLPOS</p>

                    <div className="sliderimg flex justify-center">
                        <img src='/images/onboard-1.avif' className='w-[50%] mt-24' />

                    </div>

                    <div className="flex justify-center mt-16">
                        <Link to={'/get-details'} className="px-16 bg-blue-600 text-white py-2 rounded-md">Get Started</Link>

                    </div>



                </div>
            </div>

        </>
    )
}

export function EnterShopDetails() {



    return (
        <>

            <div className="icon mt-5 mx-6">
                <IoMdArrowRoundBack size={40} />
            </div>

            <div className="box my-16 ">
                <div className="on-board">

                    <p className="text-3xl font-bold flex-wrap text-center">Complete Your Onboarding</p>


                    <div className="flex justify-center">
                        <img src="/images/onboard-2.png" className='w-[50%] mt-24' alt="" />
                    </div>

                    <div className="sliderimg flex justify-center mt-10">
                        <form action="" className=' space-y-2'>

                            <div className="input-grp">

                                <label htmlFor="shopname">Shop Name: </label>
                                <input type="text" className="shopname p-1 " placeholder='Enter Your Shop Name' />

                            </div>

                            <div className="input-grp">
                                <label htmlFor="solanaaddress">Wallet Address: </label>
                                <input type="text" placeholder='Enter Your Solana Address' className="solanaaddress" />

                            </div>

                            <div className="input-grp">
                                <label htmlFor="confirmsolanaaddress">Confirm Solana Wallet: </label>
                                <input type="text" placeholder='Enter Your Solana Address' className="confirmsolanaaddress" />
                            </div>
                        </form>


                    </div>

                    <div className="flex justify-center mt-16">
                        <Link to={'/connect-wallet'} className="px-16 bg-blue-600 text-white py-2 rounded-md">Complete Setup</Link>

                    </div>
                </div>
            </div>




        </>
    )
}


export function ConnectWalletPage() {

    const [account, setAccount] = useState(null);


    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const accounts = await provider.send('eth_requestAccounts', []);
                const currentAcc = setAccount(accounts[0]);
                console.log(account);
            } catch (error) {
                console.log(error);
            }

        } else {
            alert("Download Metamask");
        }
    }



    return (
        <>

            <div className="icon mt-5 mx-6">
                <IoMdArrowRoundBack size={40} />
            </div>

            <div className="box my-16 ">



                <div className="on-board">

                    <p className="text-3xl font-bold flex-wrap text-center">Connect Wallet</p>


                    <div className="flex justify-center">
                        <img src="/images/onboard-3.png" className='w-[50%] mt-24' alt="" />
                    </div>


                    {/* We will send to homepage after checking if the user's wallet is connected successfully */}


                    <div className="flex justify-center mt-16">
                        <button onClick={connectWallet} className="px-16 bg-blue-600 text-white py-2 rounded-md">Connect Wallet</button>

                    </div>
                    <div className="flex justify-center mt-16">
                        <Link to={'/home'} className="px-16 text-black py-2 rounded-md">I am Testing</Link>
                    </div>




                </div>
            </div>




        </>
    )

}




