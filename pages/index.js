import Head from 'next/head'
import Navbar from './/components/navbar';
import Header from './/components/header';
import Notification from './/components/notification';
import Donate from './/components/donate';
import About from './/components/about';
import Faq from './/components/faq';
import History from './/components/history';
import Members from './/components/members';
import Snowfall from 'react-snowfall'
import {React, useEffect, useState } from 'react';

export default function Home() {

  const [snow, setSnow] = useState("")

  const getSnow = () => {
    setSnow(<Snowfall color='white' snowflakeCount={200}/>)
  }

  useEffect(() => {
    getSnow()
  }, [])

  return (
    <>
      {snow}
      <Head/>
      <Navbar />
      <Header />
      <Notification />
      <Donate />
      <About />
      <History />
      <Faq />
      <Members />
    </>
  )
}
