import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { OnBoarding, EnterShopDetails, ConnectWalletPage } from './pages/OnBoarding';
import Test from './pages/Test';
import HomePage from './pages/HomePage';
import AddressContext from './context/walletAddressContect';
import { useState } from 'react';
import AddNewPayment from './pages/Payments/AddPayment';
import RecentTransactions from './pages/Payments/RecentTransactions';




function App() {

  const [account, setAccount] = useState(null);


  return (
    <>
      <AddressContext.Provider value={{ account, setAccount }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<OnBoarding />} />
            <Route path='/get-details' element={<EnterShopDetails />} />
            <Route path='/connect-wallet' element={<ConnectWalletPage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/new-payment' element={<AddNewPayment />} />
            <Route path='/learn' element={<Test />} />
            <Route path='/recent-transactions' element={<RecentTransactions />} />
          </Routes>

        </BrowserRouter>
      </AddressContext.Provider>


    </>
  )
}

export default App
