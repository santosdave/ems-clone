import React, { useState, useEffect, useCallback } from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import EcommerceProduct from './EcommerceProduct';
import Pagination from "@material-tailwind/react/Pagination";
import PaginationItem from "@material-tailwind/react/PaginationItem";
import { Rating } from '@material-ui/lab'
const options = [
    'Default',
    'Default',
    'Lowest Price',
    'Highest Price',
    
]
const productList = [
    {
        id: '323sa680b32497dsfdsgga21rt47',
        src: 'https://m.media-amazon.com/images/I/81F+gzLiCvS._AC_UY218_.jpg',
        price: 324.0,
        amount: 100,
        title: 'Bass Speaker Venue 8 ',
        category: 'audio',
        brand: 'Microlab',
        rating: 1,
        freeShipping: false,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    },
    {
        id: '323sa680b324976dfgga21rt47',
        src: 'https://m.media-amazon.com/images/I/81ayiXd8eHL._AC_UY218_.jpg',
        price: 454.0,
        amount: 100,
        title: 'Bass Speaker',
        category: 'audio',
        brand: 'Microlab',
        rating: 3,
        freeShipping: true,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    },
    {
        id: '323sa680bdf4976dfgga21rt4',
        src: 'https://m.media-amazon.com/images/I/71R1nO2uW0L._AC_UY218_.jpg',
        price: 134.0,
        amount: 100,
        title: 'Bass Speaker',
        category: 'audio',
        brand: 'Sony',
        rating: 4,
        freeShipping: true,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    },
    {
        id: '333sa680bdf4976dfgga21rt4',
        src: 'https://m.media-amazon.com/images/I/81UV6zskWhL._AC_UY218_.jpg',
        price: 987.0,
        amount: 100,
        title: 'Bit Bass Headphone',
        category: 'audio',
        brand: 'Sony',
        rating: 5,
        freeShipping: true,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    },
    {
        id: '323sa680b32497dfdfgge51rt47',
        src: 'https://m.media-amazon.com/images/I/710pP0xBtiL._AC_UY218_.jpg',
        price: 870.0,
        amount: 100,
        title: 'Sony Headphone',
        category: 'audio',
        brand: 'Sony',
        rating: 4,
        freeShipping: false,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    },
    {
        id: '243sa680b32497dfdfgga21rt47',
        src: 'https://m.media-amazon.com/images/I/71wEvOoTCvL._AC_UL320_.jpg',
        price: 23.0,
        amount: 456,
        title: 'Comlion Watch',
        category: 'fashion',
        brand: 'Comlion',
        rating: 3,
        freeShipping: true,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    },
    {
        id: '323sa680b32497dfdfgga21rt47',
        src: 'https://m.media-amazon.com/images/I/715D3lw+XZL._AC_UY218_.jpg',
        price: 454.0,
        amount: 40,
        title: 'Bass Speaker',
        category: 'audio',
        brand: 'Microlab',
        rating: 1,
        freeShipping: true,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    },
    {
        id: '323sa680b32497dfdfgga21rt47',
        src: 'https://m.media-amazon.com/images/I/61+WYAjltpL._AC_UY218_.jpg',
        price: 299.0,
        amount: 100,
        title: 'Beats Headphone',
        category: 'audio',
        brand: 'Beats',
        rating: 5,
        freeShipping: true,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    },
    {
        id: '323sd480b32497dfdfgga21rt47',
        src: 'https://m.media-amazon.com/images/I/51+Uw6N7BnL._AC_UY218_.jpg',
        price: 978.0,
        amount: 10,
        title: 'Iphone 11 Max Pro',
        category: 'cellphone',
        brand: 'Iphone',
        rating: 2,
        freeShipping: true,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    },
    {
        id: '32w5a680b32497dfdfgga21rt47',
        src: 'https://m.media-amazon.com/images/I/81-kimmO+dL._AC_UY218_.jpg',
        price: 12.0,
        amount: 30,
        title: 'IPhone 11 Max Pro Case',
        category: 'accessories',
        brand: 'Iphone',
        rating: 4,
        freeShipping: true,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    },
    {
        id: '323sa680b32497dfdfgga2p4t47',
        src: 'https://m.media-amazon.com/images/I/61VbXV86EIL._AC_UL320_.jpg',
        price: 23.0,
        amount: 100,
        title: 'Comlion watch',
        category: 'fashion',
        brand: 'Comlion',
        rating: 1,
        freeShipping: true,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    },
    {
        id: '323sa680b3p097dfdfgga21rt47',
        src: 'https://m.media-amazon.com/images/I/71d2T2xqG4L._AC_UL320_.jpg',
        price: 75.0,
        amount: 100,
        title: 'Kurren Watch',
        category: 'fashion',
        brand: 'Kurren',
        rating: 3,
        freeShipping: true,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    },
    {
        id: '322tsa680b32497dfdfgga21rt47',
        src: 'https://m.media-amazon.com/images/I/712N6vLgOLL._AC_UY218_.jpg',
        price: 978.0,
        amount: 100,
        title: 'Iphone 11 Max Pro',
        category: 'cellphone',
        brand: 'Iphone',
        rating: 5,
        freeShipping: true,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    },
]
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
                    price: 324.0,
                    title: 'Bass Speaker Venue 8 ',

                },
                {
                    productId: '323sa680b324976dfgga21rt47',
                    quantity: 1,
                    src: 'https://m.media-amazon.com/images/I/81ayiXd8eHL._AC_UY218_.jpg',
                    price: 454.0,
                    amount: 100,
                    title: 'Bass Speaker',
                },
                {
                    productId: '323sa680bdf4976dfgga21rt4',
                    quantity: 1,
                    src: 'https://m.media-amazon.com/images/I/71R1nO2uW0L._AC_UY218_.jpg',
                    price: 134.0,
                    amount: 100,
                    title: 'Bass Speaker',
                },
                {
                    productId: '333sa680bdf4976dfgga21rt4',
                    quantity: 1,
                    src: 'https://m.media-amazon.com/images/I/81UV6zskWhL._AC_UY218_.jpg',
                    price: 987.0,
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
function EcommerceMainSection() {
    const [anchorEl, setAnchorEl]=useState(null)
    const [selectedIndex, setSelectedIndex]= useState(0)
    let cartList = EcommerceDB.cart[0].list
    const handleClickListItem=(e)=>{
        setAnchorEl(e.currentTarget)
    }
    const handleMenuItemClick=(e,index)=>{
        setSelectedIndex(index)
        setAnchorEl(null)
    }
    const handleClose=()=>{
        setAnchorEl(null)
    }
    return (
        <div className="flex-col ml-6">
            <div className="flex-col flex-grow justify-between items-center">
                <div className="flex items-center justify-end">
                    <div className="bg-gray-300 rounded-xl">
                            <List component="nav" aria-label="">
                                <ListItem
                                    button
                                    
                                    aria-haspopup="true"
                                    aria-controls="lock-menu"
                                    aria-label="Prices"
                                    onClick={handleClickListItem}
                                >
                                    <ListItemText
                                        primary="Prices"
                                        secondary={options[selectedIndex]}
                                    />
                                </ListItem>
                            </List>
                            <Menu
                                id="lock-menu"
                                
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                {options.map((option, index) => (
                                <MenuItem
                                key={option}
                                disabled={index === 0}
                                selected={index === selectedIndex}
                                onClick={(e) => handleMenuItemClick(e, index)}
                                >

                                </MenuItem>
                                ))}
                            </Menu>
                    </div>
                    <div>
                        <Button
                            color="white"
                            /* active="true" */
                            buttonType="outline"
                            rounded={true}
                            iconOnly={true}
                            ripple={"dark"}
                            className="md:visible md:inline-flex h-15 w-20 border-0"
                        >
                            <Icon name="format_list_bulleted" size="2xl" color="black"/>
                        </Button>
                        
                    </div>
                    <div>
                        <Button
                            color="white"
                            /* active="true" */
                            buttonType="outline"
                            rounded={true}
                            iconOnly={true}
                            ripple={"dark"}
                            className="md:visible md:inline-flex h-15 w-20 border-0"
                        >
                            <Icon name="view_list" size="2xl" color="black"/>
                        </Button>
                    
                    </div>
                </div>
                <div className="container my-12 mx-auto px-4 md:px-12">
                    
                    <div className="grid items-center grid-flow-row auto-rows-min md:auto-rows-max grid-cols-1 grid-rows-7 md:grid-flow-row md:grid-cols-3 gap-3 -mx-1 lg:-mx-4">
                    {productList.map((product) => ( 
                         <EcommerceProduct key={product.id} id={product.id} description={product.description} src={product.src} title={product.title} price={product.price} rating={product.rating} amount={product.amount} brand={product.brand} category={product.category}/>
                      
                    ))}
                    </div>
                    
                </div>
                <footer className="container my-12 mx-auto  px-4 md:px-12">
                    <Pagination>
                        <PaginationItem href="#last" ripple="dark">
                            <Icon name="keyboard_arrow_left" />
                        </PaginationItem>
                        <PaginationItem color="lightBlue" href="#1" ripple="light">1</PaginationItem>
                        <PaginationItem href="#2" ripple="dark">2</PaginationItem>
                        <PaginationItem href="#3" ripple="dark">3</PaginationItem>
                        <PaginationItem href="#4" ripple="dark">4</PaginationItem>
                        <PaginationItem href="#5" ripple="dark">5</PaginationItem>
                        <PaginationItem href="#last" ripple="dark">
                            <Icon name="keyboard_arrow_right" />
                        </PaginationItem>
                    </Pagination>
                </footer>
            </div>
            
        </div>
    )
}


export default EcommerceMainSection
