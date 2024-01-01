
import MeetingsStore from '../../stores/MeetingsStore';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import ServicesTabs from '../servicesTabs/ServicesTabs';
import './Costumer.css'
import * as React from 'react';
import { useState ,useEffect} from 'react';
import GlobalStore from '../../stores/GlobalStore';


export default function Costumer() {
  useEffect(() => {
    localStorage.removeItem("isLogin");
    GlobalStore.setIsLogin(false);
  })

  return (
    <>
      <Header />
      <ServicesTabs></ServicesTabs>


      <Footer></Footer>
    </>
  );
}