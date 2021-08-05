import Email from "../../pages/Email";
import Chat from "../../pages/Chat";
/* import RichTextEditor from "../utilities/RichTextEditor";
import Callendar from "../../pages/Callendar"; */
import Ecommerce from "../../pages/Ecommerce";
import Staff from "../../pages/Staff";
import Customer from "../../pages/Customer";
import Supplier from "../../pages/Supplier";
import Product from "../../pages/Product";
import ViewProduct from "../utilities/ViewProduct";
import React, {useEffect} from "react";
import {useRouter} from 'next/router'

function Main() {
    const routes = [
        {
          slug: 'home',  
          label:'Email', 
          component: <Email/>
        },
        {
          slug: 'chat', 
          label:'Chat', 
          component: <Chat/>
        },
        {
            slug: 'ecommerce', 
            label:'Ecommerce', 
            component: <Ecommerce/>
        },
        {
            slug: 'staff', 
            label:'Staff', 
            component: <Staff/>
        },
        {
            slug: 'customer', 
            label:'Customer', 
            component: <Customer/>
        },
        {
            slug: 'product', 
            label:'Product', 
            component: <Product/>
        },
        {
            slug: 'product-view', 
            label:'View Product', 
            component: <ViewProduct/>
        },
        {
            slug: 'supplier', 
            label:'Supplier', 
            component: <Supplier/>
        },
      ]
    const router = useRouter()
    currentPath = router.query.route
    const findSlugMatchingCmp = ()=>routes.find((cmp) =>{
        return cmp.slug === router.query.route
    } 
  )
  useEffect(()=>{
    const foundComponent = findSlugMatchingCmp()

    if(currentPath && !foundComponent)
        router.push('/404')
  }, [router])
  const cmp = findSlugMatchingCmp().component
    
    return (
        <div className="container justify-between">
            {cmp}      
        </div>
    )
}

export default Main
