import React, {useState, useEffect, useCallback} from 'react';
import { Grid, Card, Radio,RadioGroup,FormControlLabel, Switch,Checkbox,FormControl,FormLabel,FormGroup} from '@material-ui/core';
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Slider from '@material-ui/core/Slider';
import { Rating } from '@material-ui/lab'

function EcommerceSidebar() {
    const [sliderValue, setSliderValue]= useState([0,100])
    const handleChange = (e,newSliderValue)=>{
        setSliderValue(newSliderValue)
    }
    function valuetext(sliderValue) {
        return `$ ${sliderValue}`
    }
    return (
        <div classname=" flex-col ">
            <div className="flex flex-grow items-center mb-3 bg-white rounded-xl border-xl focus-within:shadow-md " >
                <Button
                    color="blue"
                    buttonType="outline"
                    rounded={true}
                    iconOnly={true}
                    ripple={"dark"}
                    className=" md:inline-flex h-15 w-10 border-0"
                >
                    <Icon name="search" size="2xl" color="blue"/>
                </Button>
                <input type="text" placeholder="Search here ..." className="bg-transparent outline-none"/>
            </div>
            <Card className="px-6 py-4 mb-6">
                
                <FormControl component="fieldset" className={""}>
                <FormLabel component="card-details"><h5 className="card-title"><b>Price</b></h5></FormLabel>
                <RadioGroup
                    aria-label="Price"
                    name="Price1"
                    className={""}
                    /* value={value}
                    onChange={handleChange} */
                >
                    <FormControlLabel
                        value="<$10"
                        control={<Radio />}
                        label="<$10"
                    />
                    <FormControlLabel
                        value="$10-$100"
                        control={<Radio />}
                        label="$10-$100"
                    />
                    <FormControlLabel
                        value="$100-$500"
                        control={<Radio />}
                        label="$100-$500"
                    />
                    <FormControlLabel
                        value=">$500"
                        control={<Radio />}
                        label=">$500"
                    />
                    <FormControlLabel
                        value="all"
                        control={<Radio />}
                        label="All"
                    />
                </RadioGroup>
            </FormControl>
            </Card>
            <Card className="px-6 py-4 mb-6">
                <div className="flex  items-center justify-between">
                    <h5 className="card-title"><b>Slider</b></h5>
                    <p>Ksh(0 - {sliderValue})</p>
                </div>
                
                <Slider
                value={sliderValue}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
                className="py-3"
            />
            </Card>
            <Card className="px-6 py-4 mb-6">
            <FormControl component="fieldset" className={""}>
                <FormLabel component="card-title"><b>Categories</b></FormLabel>
                <FormGroup>
                    <div className="flex items-center justify-between">
                        <FormControlLabel
                            control={
                                <Checkbox
                                /*  checked={gilad}
                                    onChange={handleChange('gilad')} */
                                    value="gilad"
                                />
                            }
                            label="Audio"
                        />
                        <p className="bg-gray-300">500</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <FormControlLabel
                            control={
                                <Checkbox
                                    /* checked={jason}
                                    onChange={handleChange('jason')} */
                                    value="jason"
                                />
                            }
                            label="Fashion"
                        />
                        <p className="bg-gray-300">100</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        /* checked={antoine}
                                        onChange={handleChange('antoine')} */
                                        value="antoine"
                                    />
                                }
                                label="Cellphone"
                            />
                        
                        <p className="bg-gray-300">40</p>
                    </div>
                    <div className="flex items-center justify-between">
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        /* checked={antoine}
                                        onChange={handleChange('antoine')} */
                                        value="antoine"
                                    />
                                }
                                label="Accessories"
                            />
                        
                        <p className="bg-gray-300">200</p>
                    </div>
                    
                </FormGroup>
                
            </FormControl>
            </Card>
            <Card className="px-6 py-4 mb-6">
            <FormControl component="fieldset" className={""}>
                <FormLabel component="card-title"><b>Brands</b></FormLabel>
                <div className="flex items-center mb-3 bg-white rounded-xl border-xl focus-within:shadow-md " >
                <Button
                    color="blue"
                    buttonType="outline"
                    rounded={true}
                    iconOnly={true}
                    ripple={"dark"}
                    className=" md:inline-flex h-15 w-10 border-0"
                >
                    <Icon name="search" size="2xl" color="blue"/>
                </Button>
                <input type="text" placeholder="Search here ..." className="bg-transparent outline-none"/>
            </div>
                <FormGroup>
                    <div className="flex items-center justify-between">
                        <FormControlLabel
                            control={
                                <Checkbox
                                /*  checked={gilad}
                                    onChange={handleChange('gilad')} */
                                    value="gilad"
                                />
                            }
                            label="Microlab"
                        />
                        <p className="bg-gray-300">70</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <FormControlLabel
                            control={
                                <Checkbox
                                    /* checked={jason}
                                    onChange={handleChange('jason')} */
                                    value="jason"
                                />
                            }
                            label="Sony"
                        />
                        <p className="bg-gray-300">346</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        /* checked={antoine}
                                        onChange={handleChange('antoine')} */
                                        value="antoine"
                                    />
                                }
                                label="Beats"
                            />
                        
                        <p className="bg-gray-300">140</p>
                    </div>
                    <div className="flex items-center justify-between">
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        /* checked={antoine}
                                        onChange={handleChange('antoine')} */
                                        value="antoine"
                                    />
                                }
                                label="Iphone"
                            />
                        
                        <p className="bg-gray-300">24</p>
                    </div>
                    <div className="flex items-center justify-between">
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        /* checked={antoine}
                                        onChange={handleChange('antoine')} */
                                        value="antoine"
                                    />
                                }
                                label="Comlion"
                            />
                        
                        <p className="bg-gray-300">45</p>
                    </div>
                    
                </FormGroup>
                
            </FormControl>
            </Card>
            <Card className="px-6 py-4 mb-6">
                <h5 className="card-title"><b>Ratings</b></h5>
                <div className="flex items-center py-1 justify-between">
                    <Rating readOnly={true} value={5} />
                    <p className="bg-gray-300">50</p>
                </div>
                <div className="flex items-center py-1 justify-between">
                    <Rating readOnly={true} value={4} />
                    <p className="bg-gray-300">75</p>
                </div>
                <div className="flex items-center py-1 justify-between">
                    <Rating readOnly={true} value={3} />
                    <p className="bg-gray-300">120</p>
                </div>
                <div className="flex items-center py-1 justify-between">
                    <Rating readOnly={true} value={2} />
                    <p className="bg-gray-300">189</p>
                </div>
                <div className="flex items-center py-1 justify-between">
                    <Rating readOnly={true} value={1} />
                    <p className="bg-gray-300">250</p>
                </div>
                
            </Card>
            <Card className="flex items-center justify-between px-6 py-4 mb-6">
                <h2 className="font-bold">Free Shipping</h2>
                        <Switch
                           /*  checked={state.gilad}
                            onChange={handleChange('gilad')} */
                            value="gilad"
                            
                        />
            </Card>
            <Button className="px-6 py-4 mb-6 place-content-center ml-auto mr-auto">
                    Clear All filters
            </Button>
        </div>
    )
}

export default EcommerceSidebar
