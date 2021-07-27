import React, {useRef} from 'react';
import {
    Icon,
    IconButton,
    MenuItem,
    Avatar,
    useMediaQuery,
    Hidden,
} from '@material-ui/core';
import Button from "@material-tailwind/react/Button";
import Popover from "@material-tailwind/react/Popover";
import PopoverContainer from "@material-tailwind/react/PopoverContainer";
import PopoverBody from "@material-tailwind/react/PopoverBody";
import clsx from 'clsx';
function EcommerceTopBar() {
    const buttonRef = useRef();
    return (
        <div className=" flex sticky top-20 z-50 transition-all mt-6 ml-3 duration-500 ease-in-out shadow-md">
            <div className="flex-grow bg-white justify-between items-center px-16 md:px-18  rounded-xl ">
                <div className="  h-full py-3">
                    <div className="flex justify-between items-center">
                        <IconButton
                            /* onClick={handleSidebarToggle} */
                            className="visible md:invisible"
                        >
                            <Icon>menu</Icon>
                        </IconButton>
                        <div className="invisible md:visible">
                            <IconButton>
                                <Icon>mail_outline</Icon>
                            </IconButton>

                            <IconButton>
                                <Icon>web_asset</Icon>
                            </IconButton>

                            <IconButton>
                                <Icon>star_outline</Icon>
                            </IconButton>
                        </div>
                        <div className="flex items-center">
                            <div>
                                <IconButton>
                                    <Icon>search</Icon>
                                </IconButton>
                                <input type="text" placeholder="Search here..." autofocus/>
                            </div>
                            <IconButton>
                                <div className="">
                                <Icon>notificationsIcon</Icon>
                                
                                </div>
                            </IconButton>
                            <IconButton>
                                <Icon>shopping_cartIcon</Icon>
                            </IconButton>
                            
                        </div>
                        <div className="flex items-center hover:bg-gray-200 rounded-full p-1" >
                            
                                <span>
                                    Hi <strong>{"Santos Dave"}</strong>
                                </span>
                                <Avatar className=" invisible md:visible ml-2  mr-2 cursor-pointer" src='https://media-exp3.licdn.com/dms/image/C4D03AQFaYwtIZ5k53g/profile-displayphoto-shrink_800_800/0/1622195469007?e=1632355200&v=beta&t=24cvGNubyys3-JrSg5kB9FYqbRV4dOeGOH5T5MmdD-0'/>
                                <IconButton ref={buttonRef}>
                                    <Icon>more_vert</Icon>
                                </IconButton>
                        
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
