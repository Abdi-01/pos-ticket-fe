import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/Dashboard';
import Navbar from './Components/Navbar';
import Sidenavbar from './Components/Sidenavbar';
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import React from 'react';
import AdminProduct from './Pages/AdminProduct';
import AddProduct from './Pages/AddProduct';
import Register from './Pages/Register';
import CashierProduct from './Pages/CashierProduct';
import Account from './Pages/Account';
import AddUser from './Pages/AddUser';
import Transaction from './Pages/Transaction';
import EditProduct from './Pages/EditProduct'

function App() {

  return (
    <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/AdminProduct" element={<AdminProduct />} />
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/EditProduct" element={<EditProduct />} />
          <Route path="/AddUser" element={<AddUser />} />
        </Routes>
    </div>
  );
}

export default App;
