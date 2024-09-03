import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { OnBoarding, EnterShopDetails, ConnectWalletPage } from './pages/OnBoarding';
import Test from './pages/Test';
import HomePage from './pages/HomePage';


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<OnBoarding />} />
          <Route path='/get-details' element={<EnterShopDetails />} />
          <Route path='/connect-wallet' element={<ConnectWalletPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/learn' element={<Test />} />
        </Routes>

      </BrowserRouter>


    </>
  )
}

export default App
