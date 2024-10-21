import React from 'react';
import './App.css';
import Header from './components/widgets/Header/Header'
import MainPage from './components/pages/MainPage/MainPage'
import ProductsPage from './components/pages/Products/ProductsPage'
import OilSearchPage from './components/pages/OilSearchPage/OilSearchPage'
import ContactsPage from './components/pages/ContactsPage/ContactsPage'
import NotFoundPage from './components/pages/FoundPage/NotFoundPage'
import CatalogItemPage from './components/pages/CatalogItemPage/CatalogItemPage'
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useContext, createContext, useEffect } from 'react';
import axios from 'axios';
import { LinkContext } from './types/LinkContext'
import ReactItemPhon from './components/shared/ReactItemPhon/ReactItemPhon';

const App: React.FC = () => {
  
  const sessionStorageLinkValue: any = sessionStorage.getItem("linkActiveClass");
  const [nameLink, setNameLink] = useState <any>(sessionStorageLinkValue);

  

  return (
    <LinkContext.Provider value={{nameLink, setNameLink}}>
      <BrowserRouter>
          <Header/>
          <Routes> 
            <Route path="/" element={<MainPage/>}/>
            <Route path="Products" element={<ProductsPage/>}/>
            <Route path="OilSearch" element={<OilSearchPage/>}/>
            <Route path="Contacts" element={<ContactsPage/>}/>
            <Route path="NotFoundPage" element={<NotFoundPage/>}/>
            <Route path={`Products/${nameLink}`} element={<CatalogItemPage/>}/>
           
          </Routes>
          <ReactItemPhon/>
      </BrowserRouter>
    </LinkContext.Provider>
  );
}

export default App;
