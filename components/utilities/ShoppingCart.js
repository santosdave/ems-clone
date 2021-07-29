import React, { Fragment, useState,useEffect }  from "react";
import { Icon, Badge, IconButton, Drawer, Button } from '@material-ui/core'
/* import Button from "@material-tailwind/react/Button"; */

const EcommerceDB = {
   

    category: [
        {
            title: 'audio',
            product: 321,
        },
        {
            title: 'fashion',
            product: 123,
        },
        {
            title: 'cellphone',
            product: 546,
        },
        {
            title: 'accessories',
            product: 76,
        },
    ],

    brand: [
        {
            title: 'Microlab',
            product: 32,
        },
        {
            title: 'Sony',
            product: 534,
        },
        {
            title: 'Beats',
            product: 23,
        },
        {
            title: 'Iphone',
            product: 65,
        },
        {
            title: 'Comlion',
            product: 198,
        },
    ],

    rating: [
        {
            rate: 5,
            product: 345,
        },
        {
            rate: 4,
            product: 53,
        },
        {
            rate: 3,
            product: 765,
        },
        {
            rate: 2,
            product: 32,
        },
        {
            rate: 1,
            product: 64,
        },
    ],

    cart: [
        {
            uid: 'PPFDrVGsojfZoDxeYLMdIAWxSzd2',
            list: [
                {
                    productId: '323sa680b32497dsfdsgga21rt47',
                    quantity: 1,
                    src: 'https://m.media-amazon.com/images/I/81F+gzLiCvS._AC_UY218_.jpg',
                    price: 3034.0,
                    title: 'Bass Speaker Venue 8 ',

                },
                {
                    productId: '323sa680b324976dfgga21rt47',
                    quantity: 1,
                    src: 'https://m.media-amazon.com/images/I/81ayiXd8eHL._AC_UY218_.jpg',
                    price: 12000.0,
                    amount: 100,
                    title: 'Bass Speaker',
                },
                {
                    productId: '323sa680bdf4976dfgga21rt4',
                    quantity: 1,
                    src: 'https://m.media-amazon.com/images/I/71R1nO2uW0L._AC_UY218_.jpg',
                    price: 1344.0,
                    amount: 100,
                    title: 'Bass Speaker',
                },
                {
                    productId: '333sa680bdf4976dfgga21rt4',
                    quantity: 1,
                    src: 'https://m.media-amazon.com/images/I/81UV6zskWhL._AC_UY218_.jpg',
                    price: 9878.0,
                    amount: 100,
                    title: 'Bit Bass Headphone',
                },
            ],
        },
    ],

    userList: [
        {
            id: '1',
            name: 'John Doe',
            avatar: '/assets/images/face-7.jpg',
        },
        {
            id: '323sa680b3249760ea21rt47',
            name: 'Frank Powell',
            avatar: '/assets/images/faces/13.jpg',
        },
        {
            id: '7863a6802ez0e277a0f98534',
            name: 'John Doe',
            avatar: '/assets/images/face-1.jpg',
        },
    ],
}
function ShoppingCart({container,cart,id ,title,price,quantity}) {
    const [totalCost, setTotalCost]=useState(0)
    const [panelOpen, setPanelOpen]= useState(false)
    let cartList = EcommerceDB.cart[0].list
    const handleDrawerToggle=()=>{
        setPanelOpen(!panelOpen)
    }
    useEffect(() => {
        let total = 0

        cartList.forEach((product) => {
            total += product.price * product.quantity
        })

        setTotalCost(total)
    }, [cartList])

    return (
        <Fragment>
            <IconButton onClick={handleDrawerToggle}>
                <Badge color="primary" badgeContent={cartList.length}>
                    <Icon>shopping_cart</Icon>
                </Badge>
            </IconButton>
            <div>
                <Drawer
                    width={'100px'}
                    container={container}
                    variant="temporary"
                    anchor="right"
                    open={panelOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                > 
                    <div className="flex-col  h-auto ">
                        <header className="flex items-center p-3 mb-2 pl-4 shadow-lg">
                            <Icon color="primary">shopping_cart</Icon>
                            <h5 className="ml-2 my-0 font-medium">Cart</h5>
                        </header>
                        <div className="flex-grow overflow-auto">
                        {cartList.map((product) => (
                            <div key={product.ProductId}className=" flex items-center mb-1 py-2 px-2 transition duration-300 ease bg-blue-200 hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-100 ...">
                                <div className="flex flex-col items-center mr-1">
                                    <IconButton  size="small" /* onClick={handleDrawerToggle} */>
                                            <Icon className="cursor-pointer">
                                                keyboard_arrow_up
                                            </Icon>
                                    </IconButton> 
                                    <IconButton  size="small" /* onClick={handleDrawerToggle} */>
                                            <Icon className="cursor-pointer">
                                                keyboard_arrow_down
                                            </Icon>
                                    </IconButton> 
                                </div>
                                <div className="mr-2">
                                        <img
                                            className="w-20 h-11"
                                            src={product.src}
                                            alt={product.title}
                                        />
                                </div>
                                <div className="mr-2 text-center flex-grow flex-column">
                                    <h6 className="m-0 mb-1 w-120 break-words">
                                        {product.title}
                                    </h6>
                                    <small className="text-gray-500">
                                        Ksh {product.price} x {product.quantity}
                                    </small>
                                </div>
                                <IconButton  size="small" /* onClick={handleDrawerToggle} */>
                                            <Icon className="cursor-pointer">
                                                clear
                                            </Icon>
                                </IconButton> 
                            </div>
                            ))}
                            
                        </div>
                        <Button
                            className="mt-7 w-full border-radius-0"
                            variant="contained"
                            color="primary"
                            /* onClick={handleCheckoutClick} */
                        >
                            Checkout (Ksh {totalCost.toFixed(2)})
                        </Button>
                    </div>
                    
                </Drawer>
            </div>
        </Fragment>
    )
}

export default ShoppingCart

