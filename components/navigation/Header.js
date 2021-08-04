import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
/* import {signOut, useSession} from 'next-auth/client'; */
import {useState} from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalBody from "@material-tailwind/react/ModalBody";
import Modalfooter from "@material-tailwind/react/Modalfooter";
import Dropdown from "@material-tailwind/react/Dropdown"
import DropdownItem from "@material-tailwind/react/DropdownItem"
import DropdownLink from "@material-tailwind/react/DropdownLink"

import { createMemoryHistory } from 'history';
function Header() {
    /* const [session]=useSession(); */
    const [showModal, setShowModal]= useState(false)
    const history = createMemoryHistory();
    const modal=(
        <Modal
        size="sm"
        active={showModal}
        toggler={()=>setShowModal(false)}
        >
        <ModalBody>
            <div className="flex flex-col items-center">
                <img 
                onClick={()=>setShowModal(true)}
                loading="lazy"
                className="cursor-pointer h-12 w-12 rounded-full ml-2"
                /* src={session?.user?.image} */
                alt=""
                />
                <p className="font-semibold text-sm text-gray-700">{"Santos Dave"}</p>
                <p className="text-sm text-gray-700">{"santosdave86@gmail.com"}</p>
            </div>
            
        </ModalBody>
        <Modalfooter>
            <Button
            color="blue"
            buttonType="link"
            onClick={(e)=>setShowModal(false)}
            ripple={"dark"}
            >
            Cancel
            </Button>
            <Button
            color="blue"
            /* onClick={signOut} */
            ripple={"light"}
            >
            signOut
            </Button>
        </Modalfooter>
    </Modal>
    )
    
    return(
        <header className="sticky top-0 z-50 flex items-center   px-4 py-2 shadow-md bg-black ">
            
            <Dropdown
            color="lightBlack"
            placement="bottom-start"
            buttonText="MENU"
            buttonType="filled"
            size="lg"
            rounded={false}
            block={false}
            ripple="light"
        >
            
                <Link to="/">
                    <DropdownItem color="lightBlue" ripple="light">
                        Home
                    </DropdownItem>
                </Link>
                
                <Link to="/ecommerce">
                    <DropdownItem color="lightBlue" ripple="light">
                        Ecommerce
                    </DropdownItem>
                </Link>
           
                
        </Dropdown>
           
            <img className="cursor-pointer h-12 w-35 rounded-lg ml-2 " alt="" loading="lazy" src="https://widetechnologies.co.ke/wp/wp-content/uploads/2021/06/wtl0go4b_white.png"/>
            
            <div className="mx-5 md:mx-20 flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:shadow-md">
                <Icon name="search" size="3xl" color="gray"/>
                <input type="text" placeholder="Search" className="flex-grow px-5 text-base outline-none bg-transparent border-0"/>
            </div>
            <Button
            color="gray"
            buttonType="outline"
            rounded={true}
            iconOnly={true}
            ripple={"dark"}
            className="sm:hidden md:inline-flex h-20 w-20 border-0"
            >
                <Icon name="apps" size="3xl"/>
            </Button>
            <Button
            color="gray"
            buttonType="outline"
            rounded={true}
            iconOnly={true}
            ripple={"dark"}
            className="sm:hidden md:inline-flex h-20 w-20 border-0"
            >
                <Icon name="notifications" size="3xl"/>
            </Button>
            <img 
            onClick={()=>setShowModal(true)}
            loading="lazy"
            className="cursor-pointer h-14 w-14 rounded-full ml-2"
            src={"https://media-exp3.licdn.com/dms/image/C4D03AQFaYwtIZ5k53g/profile-displayphoto-shrink_800_800/0/1622195469007?e=1632355200&v=beta&t=24cvGNubyys3-JrSg5kB9FYqbRV4dOeGOH5T5MmdD-0"}
            alt=""
            />
            {modal}
        </header>
        )
    
}

export default Header
