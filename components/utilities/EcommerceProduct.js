import React from "react";
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Icon from "@material-tailwind/react/Icon";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";
import { Rating } from '@material-ui/lab'
function EcommerceProduct({id,src,title,price,rating,amount}) {
    return (
        <div className="overflow-hidden rounded-lg shadow-lg  ">
                                <div>
                                    <a href="#">
                                        <img width={250} height={100} className="object-contain h-48 " src={src} alt={title}/>
                                    </a>
                                </div>
                                <header className="leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        <a className="no-underline hover:underline text-black truncate" href="#">
                                            {title}
                                        </a>
                                    </h1>
                                </header>
                                <div>
                                        <p className="ml-2 text-sm font-bold">
                                            Ksh {price}
                                        </p>
                                </div>
                                <div className="flex items-center py-1 justify-start leading-none p-2 md:p-4">
                                    <Rating readOnly={true} value={rating} />
                                    <p className="bg-gray-300 ml-4 text-sm">{amount}</p>
                                </div>
                                <div className="flex items-center justify-between leading-none p-2 md:p-4">
                                        <p className="ml-2 text-sm text-black font-semibold">
                                            Free Shipping
                                        </p>
                                </div>
                                <div>
                                    <Button color="blue" className="px-6 py-4 mb-6 place-content-center ml-auto mr-auto">
                                        <div className="flex items-center">
                                            <Icon name="shopping_cart" size="2xl" color="black"/>
                                            <p className="ml-2 text-sm text-white font-semibold">
                                            Add to cart
                                            </p>
                                        </div>
                                    </Button>
                                </div>
                        </div>
        
        

    )
}

export default EcommerceProduct
