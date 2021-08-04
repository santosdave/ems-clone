import React from 'react';
import EcommerceTopBar from "../components/utilities/EcommerceTopBar";
import EcommerceSidebar from "../components/utilities/EcommerceSidebar";
import EcommerceMainSection from '../components/utilities/EcommerceMainSection';
function Ecommerce() {
    return (
        <div className="flex flex-col  ">
            <div>
                <EcommerceTopBar/>
            </div>
             
            <div className="flex p-3 justify-between">
                <EcommerceSidebar/>
                <EcommerceMainSection/>
            </div>
        </div>
    )
}

export default Ecommerce
