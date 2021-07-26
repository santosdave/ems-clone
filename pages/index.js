import Head from 'next/head'
import Header from '../components/navigation/Header'
import LeftSidebar from "../components/navigation/LeftSidebar";
import MainSection from '../components/navigation/MainSection';
export default function Home() {
  return (
    <div >
      <Head>
        <title>Odoo clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header/>
      <div className="flex flex-row  justify-between bg-gray-100">
        <div>
          <LeftSidebar/>
        </div>
        <div>
          <MainSection/>
        </div>
        
        {/* <div>hello world</div> */}
        
        
        
      </div>
      
    </div>
  )
}
