import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './App.css'
import MainLayout from "./Layout/MainLayout";
import Admin from "./Pages/Admin";
import Add from "./Pages/Add";
import Basket from "./Pages/Basket";
import Wishlist from "./Pages/Wishlist";
import Detail from "./Pages/Detail";
import Home from "./Pages/Home";
import Mainprovider from "./Context/Mainprovider";

function App() {


  return (
    <>
    <Mainprovider>
    <HelmetProvider>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="admin" element={<Admin />} />
          <Route path="add" element={<Add />} />
          <Route path="basket" element={<Basket />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="*" element={<h1>No page</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
    </Mainprovider>
    </>
  )
}

export default App
