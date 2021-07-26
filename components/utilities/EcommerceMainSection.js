import React, { useState, useEffect, useCallback } from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import EcommerceProduct from './EcommerceProduct';
import { Rating } from '@material-ui/lab'
const options = [
    'Default',
    'Default',
    'Lowest Price',
    'Highest Price',
    
]
function EcommerceMainSection() {
    const [anchorEl, setAnchorEl]=useState(null)
    const [selectedIndex, setSelectedIndex]= useState(0)
    const shipping="true"
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
                    <div className="grid grid-flow-row auto-rows-min md:auto-rows-max grid-cols-1 grid-rows-7 md:grid-flow-row md:grid-cols-3 gap-5 -mx-1 lg:-mx-4">
                        <EcommerceProduct src={"https://m.media-amazon.com/images/I/71AmKW4yuMS._AC_UL320_.jpg"} name={"Hp Laptop"} price={400} ratings={5} amount={34}/>
                        <EcommerceProduct src={"https://m.media-amazon.com/images/I/71AmKW4yuMS._AC_UL320_.jpg"} name={"Hp Laptop"} price={900} ratings={4} amount={25}/>
                        <EcommerceProduct src={"https://m.media-amazon.com/images/I/71AmKW4yuMS._AC_UL320_.jpg"} name={"Hp Laptop"} price={500} ratings={5} amount={67}/>
                        <EcommerceProduct src={"https://m.media-amazon.com/images/I/71AmKW4yuMS._AC_UL320_.jpg"} name={"Hp Laptop"} price={2500} ratings={3} amount={45}/>
                        <EcommerceProduct src={"https://m.media-amazon.com/images/I/71AmKW4yuMS._AC_UL320_.jpg"} name={"Hp Laptop"} price={1200} ratings={5} amount={29}/>
                        <EcommerceProduct src={"https://m.media-amazon.com/images/I/71AmKW4yuMS._AC_UL320_.jpg"} name={"Hp Laptop"} price={4500} ratings={4} amount={57}/>
                        <EcommerceProduct src={"https://m.media-amazon.com/images/I/71AmKW4yuMS._AC_UL320_.jpg"} name={"Hp Laptop"} price={1800} ratings={1} amount={46}/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default EcommerceMainSection
