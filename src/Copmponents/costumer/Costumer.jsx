
import MeetingsStore from '../../stores/MeetingsStore';
import Header from '../Header/Header';
import Footer from '../footer/Footer';
import ServicesTabs from '../servicesTabs/ServicesTabs';
import './Costumer.css'
import * as React from 'react';
import { useState } from 'react';


export default function Costumer() {




  return (
    <>
      <Header />
      <ServicesTabs></ServicesTabs>


<Footer></Footer>
    </>
  );
}