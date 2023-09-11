import './App.css';
import React from 'react'
import NavbarComp from './Component/NavBar/Navbar';
import Login from './Component/userAgin/login';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Component/HomePage/HomePage';
import SoppingCartProvider from './Component/Context/ShoppingCartContacxt';
import AlackserMapy from './Component/HomePage/AlackserMapy';
import AllComputerData from './Component/Computer/AllComputerData';
import AllMopailData from './Component/Mopail/AllMopailData';
import AllDataAxss from './Component/Axsswoar/AllDataAxss';
import DashAllData from './Component/DashLcd/DashAllData';
import DataAllDap from './Component/Manzelya/DataAllDap';
import MatbkhAllData from './Component/Matbkh/MatbkhAllData';
import RoomAllData from './Component/Room/RoomAllData';
import DetalseApp from './Component/Detalse/DetalseApp';
import Footer from './Component/Footer/Footer';
const App = () => {

  return (
    <SoppingCartProvider className="App">
          <NavbarComp/>
        
          <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={<Login/>} />
              <Route path='/allDataCards' element={<AlackserMapy/>} />
              <Route path='/allCardComputer' element={<AllComputerData/>} />
              <Route path='/allCardMopail' element={<AllMopailData/>} />
              <Route path='/allCardAxss' element={<AllDataAxss/>} />
              <Route path='/allCardDash' element={<DashAllData/>} />
              <Route path='/allCardDap' element={<DataAllDap/>} />
              <Route path='/allCardMatbkh' element={<MatbkhAllData/>} />
              <Route path='/allCardroom' element={<RoomAllData/>} />
              <Route path='/detalseCard' element={<DetalseApp/>} />
              {/* <Route path='/shoppingCart' element={<ShoppingCart/>} /> */}
          </Routes>

          <Footer/>
     </SoppingCartProvider>
  );
}

export default App;
