import React, {useRef} from 'react';
import {
    Icon,
    IconButton,
    MenuItem,
    Avatar,
    Badge,
    useMediaQuery,
    Hidden,
} from '@material-ui/core';
import Button from "@material-tailwind/react/Button";
import Popover from "@material-tailwind/react/Popover";
import PopoverContainer from "@material-tailwind/react/PopoverContainer";
import PopoverBody from "@material-tailwind/react/PopoverBody";
import clsx from 'clsx';
import ShoppingCart from './ShoppingCart';
import NotificationBar from './NotificationBar';

function EcommerceTopBar() {
    const buttonRef = useRef();
    
    return (
        <div className=" flex sticky top-20 z-50 transition-all mt-6 ml-3 duration-500 ease-in-out shadow-md">
            <div className="flex-grow bg-white justify-between items-center px-2 md:px-18  rounded-xl ">
                <div className="  h-full py-3">
                    <div className="flex justify-between items-center">
                        
                        <Button
                                color="blue"
                                buttonType="outline"
                                rounded={true}
                                iconOnly={true}
                                ripple={"dark"}
                                className="visible md:invisible md:inline-flex h-15 w-10 border-0"
                            >
                                 <Icon>menu</Icon>
                            </Button>
                        <div className=" flex  absolute items-center invisible md:visible">

                            <Button
                                color="blue"
                                buttonType="outline"
                                rounded={true}
                                iconOnly={true}
                                ripple={"dark"}
                                className=" md:inline-flex h-15 w-10 border-0"
                            >
                                 <Icon>mail_outline</Icon>
                            </Button>
                            <Button
                                color="blue"
                                buttonType="outline"
                                rounded={true}
                                iconOnly={true}
                                ripple={"dark"}
                                className=" md:inline-flex h-15 w-10 border-0"
                            >
                                  <Icon>web_asset</Icon>
                            </Button>
                            <Button
                                color="blue"
                                buttonType="outline"
                                rounded={true}
                                iconOnly={true}
                                ripple={"dark"}
                                className=" md:inline-flex h-15 w-10 border-0"
                            >
                                 <Icon>star_outline</Icon>
                            </Button>
                        </div>
                        <div className="flex   items-center ">
                        <div className="flex flex-grow items-center  bg-white rounded-xl border-xl focus-within:shadow-md " >
                            <Button
                                color="blue"
                                buttonType="outline"
                                rounded={true}
                                iconOnly={true}
                                ripple={"dark"}
                                className=" md:inline-flex h-15 w-10 border-0"
                            >
                                <Icon>search</Icon>
                            </Button>
                            <input type="text" placeholder="Search here ..." className=" text-gray-500  bg-transparent outline-none"/>
                        </div>
                        
                            
                         
                        </div>
                        <div className="flex items-center ml-2">
                            <NotificationBar/>
                            <ShoppingCart />
                        </div>
                        <div className="flex flex-end items-center hover:bg-gray-200 rounded-full p-1" >
                            
                                <span className="invisible md:visible ">
                                    Hi <strong>{"Santos Dave"}</strong>
                                </span>
                                <Avatar className="  ml-2  mr-2 cursor-pointer" src='https://media-exp3.licdn.com/dms/image/C4D03AQFaYwtIZ5k53g/profile-displayphoto-shrink_800_800/0/1622195469007?e=1632355200&v=beta&t=24cvGNubyys3-JrSg5kB9FYqbRV4dOeGOH5T5MmdD-0'/>
                                
                                <Button
                                color="blue"
                                ref={buttonRef}
                                buttonType="outline"
                                rounded={true}
                                iconOnly={true}
                                ripple={"dark"}
                                className=" md:inline-flex h-15 w-10 border-0"
                            >
                                  <Icon>more_vert</Icon>
                            </Button>
                        
                        <Popover placement="bottom" ref={buttonRef}>
                        <PopoverContainer>
                            
                            <PopoverBody>
                                <div className="flex-col p-1 items-center">
                                    <div className="flex py-1 px-1 hover:bg-gray-300 items-center rounded-xl">
                                        <Icon> home </Icon>
                                        <span className="pl-4"> Home </span>
                                    </div>
                                    <div className="flex py-1 px-1 hover:bg-gray-300 items-center rounded-xl">
                                        <Icon> person </Icon>
                                        <span className="pl-4"> Profile </span>
                                    </div>
                                    <div className="flex py-1 px-1 hover:bg-gray-300 items-center rounded-xl">
                                        <Icon> settings </Icon>
                                        <span className="pl-4"> Settings </span>
                                    </div>
                                    <div className="flex py-1 px-1 hover:bg-gray-300 items-center rounded-xl">
                                        <Icon> power_settings_new </Icon>
                                        <span className="pl-4"> Logout </span>
                                    </div>
                                    
                                    
                                </div>
                            </PopoverBody>
                        </PopoverContainer>
            </Popover>
                            
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default EcommerceTopBar
