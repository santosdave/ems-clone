import React from 'react';
import EcommerceTopBar from "../utilities/EcommerceTopBar";
import EcommerceSidebar from "../utilities/EcommerceSidebar";
function Ecommerce() {
    return (
        <div className="flex flex-col">
            <EcommerceTopBar/> 
            <div className="p-3">
                <EcommerceSidebar/>
            </div>
        </div>
    )
}

export default Ecommerce
