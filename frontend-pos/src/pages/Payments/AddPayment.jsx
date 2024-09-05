import { ethers } from 'ethers';
import React, { useState, useContext } from 'react'
import { QRCode } from 'react-qrcode-logo';
import AddressContext from '../../context/walletAddressContect';

export default function AddNewPayment() {
    const { account } = useContext(AddressContext)

    const [amount, setAmount] = useState('');
    const [paymentURL, setPaymentURL] = useState('');

    const walletAddress = account;


    //generating qr

    const generatePaymentURL = () => {
        if (amount) {
            const amountInWei = ethers.utils.parseEther(amount.toString());
            const url = `ethereum:${walletAddress}?value=${amountInWei.toString()}`;
            setPaymentURL(url);
        }
    }




    return (
        <>
            <div className="payment mt-6">



                <div className="px-4">
                    <p className="text-center text-2xl font-bold">Receive Payment</p>

                    <div className="form p-4 border mt-10 mx-10 border-black">
                        <p className="text-center">Generate Payment QR</p>

                        <div className="inputs mt-10">
                            <label htmlFor="ethreq" className='mr-4'>Amount in ETH:</label>
                            <input
                                type="number"
                                className='border px-2 py-0.5 border-black rounded-sm'
                                placeholder='ex: 10'
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />

                            <div className="flex justify-center mt-10 mb-2">
                                <button
                                    className='text-center px-16 bg-blue-500 text-white font-bold py-2'
                                    onClick={generatePaymentURL}
                                >Accept Payment</button>
                            </div>


                        </div>

                    </div>
                </div>


                <div className="qrcodegent mt-10 mb-10">
                    <div className="border mx-16 border-black flex justify-center items-center">
                        {paymentURL ? (
                            <QRCode value={paymentURL} size={256} />
                        ) : (
                            <p className="text-center py-20">QR Code will appear here</p>
                        )}
                    </div>
                </div>

                <div className="instructions mt-10 text-center">
                    <p>Please make sure you are sending Sepolia ETH to this address.</p>
                    <p>Ensure your wallet is set to the Sepolia network.</p>
                </div>
            </div>


        </>
    )
}
