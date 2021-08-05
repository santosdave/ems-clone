import {useRouter} from 'next/router'

const NavBar = ()=>{
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

  // -->
  const cmp = findSlugMatchingCmp().component

  return (
    <div>
      {cmp}
    </div>
  )
}
