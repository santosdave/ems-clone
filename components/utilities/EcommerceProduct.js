import React, { useState , useEffect}  from "react";
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Icon from "@material-tailwind/react/Icon";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";
import { Rating } from '@material-ui/lab'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import Typography from '@material-ui/core/Typography'
function EcommerceProduct({id,src,title,price,rating,amount,brand,category,description}) {
    const [dialogOpen, setDialogOpen]=useState(false);
    const handleDialogToggle=()=>{
        setDialogOpen(!dialogOpen)
    }
    return (
        <div onClick={handleDialogToggle}
            className="overflow-hidden rounded-lg shadow-lg  ">
                                <div>
                                    <a href="#">
                                        <img width={250} height={100} className="object-contain h-48 " src={src} alt={title}/>
                                    </a>
                                </div>
                                <header className="leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        <a className="no-underline hover:underline text-black break-words truncate" href="#">
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
                                <Dialog
                                    onClose={handleDialogToggle}
                                    aria-labelledby="dialog-title"
                                    open={dialogOpen}
                                >
                                    <MuiDialogTitle
                                        id="dialog-title"
                                        onClose={handleDialogToggle}
                                    >
                                        <div className="flex items-center justify-between leading-none">
                                                <header className="leading-tight p-2 md:p-4">
                                                    <h1 className="text-lg">
                                                        <a className="no-underline hover:underline text-black break-words truncate" href="#">
                                                            {title}
                                                        </a>
                                                    </h1>
                                                </header>
                                                <div>
                                                    <Button
                                                        color="blue"
                                                        buttonType="outline"
                                                        rounded={true}
                                                        iconOnly={true}
                                                        ripple={"dark"}
                                                        className=" md:inline-flex h-15 w-10 border-0"
                                                    >
                                                        <Icon name="close" size="3xl"/>
                                                    </Button>
                                                </div>
                                        </div>

                                    </MuiDialogTitle>
                                    <MuiDialogContent dividers>
                                        <div className="flex-col  items-center justify-between">
                                            <div className="container mx-auto ">
                                                <a href="#">
                                                    <img width={250} height={400} className="object-contain mx-auto h-48 " src={src} alt={title}/>
                                                </a>
                                            </div>
                                            <div className="flex-col items-center justify-between">
                                                <div className="flex-col items-center justify-between shadow-sm">
                                                    <header className="">
                                                        <h1 className="text-lg">
                                                            <a className="no-underline hover:underline text-black break-words truncate" href="#">
                                                                {title}
                                                            </a>
                                                        </h1>
                                                    </header>
                                                    <p className="flex items-center justify-start"> <h4 className="text-sm font-semibold">Brand:</h4> <p className="text-gray-800 text-xs ml-2">{brand}</p> </p>
                                                    <p className="flex items-center justify-start"> <h4 className="text-sm font-semibold">Category:</h4> <p className="text-gray-800 text-xs ml-2">{category}</p> </p>
                                                    <div className="flex items-center py-1 justify-start leading-none  ">
                                                        <Rating readOnly={true} value={rating} />
                                                        <p className="bg-gray-300 ml-4 text-sm">{amount}</p>
                                                    </div>
                                                </div>
                                                <div>
                                                        <p className="ml-2 mt-2 font-bold text-2xl py-1 shadow-sm">
                                                            Ksh {price}
                                                        </p>
                                                </div>
                                                <div className="flex-col items-center justify-between">
                                                    <h3 className="font-semibold  mt-1 text-lg">Specification</h3>
                                                    <Typography gutterBottom >
                                                        <p className="word-breaks text-sm" >{description}</p>
                                                        
                                                    </Typography>
                                                </div>
                                                <div>
                                                    <Button color="blue" className="px-6 py-4 mt-3 mb-2 place-content-center ml-auto mr-auto">
                                                        <div className="flex items-center">
                                                            <Icon name="shopping_cart" size="2xl" color="black"/>
                                                            <p className="ml-2 text-sm text-white font-semibold">
                                                            Add to cart
                                                            </p>
                                                        </div>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </MuiDialogContent>
                                </Dialog>
                        </div>
        
        

    )
}

export default EcommerceProduct
