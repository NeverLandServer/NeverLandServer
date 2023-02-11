import Head from 'next/head'
import Navbar from './/components/navbar';
import Header from './/components/header';
import Notification from './/components/notification';
import Donate from './/components/donate';
import About from './/components/about';
import Faq from './/components/faq';
import History from './/components/history';
import Members from './/components/members';
import {React, useEffect, useState } from 'react';
import Stats from './components/stats';

export default function Home() {
  return (
    <>
      <Head/>
      <Header />
      <Notification />
      <Donate />
      <About />
      <History />
      <Faq />
      <Stats />
      <Members />
    </>
  )
}
