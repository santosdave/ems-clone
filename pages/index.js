import Head from 'next/head'
import Header from '../components/navigation/Header'
import LeftSidebar from "../components/navigation/LeftSidebar";
export default function Home() {
  return (
    <div >
      <Head>
        <title>Odoo clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header/>
      <LeftSidebar/>
    </div>
  )
}
