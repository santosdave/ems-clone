import Icon from '@material-tailwind/react/Icon';
import H6 from '@material-tailwind/react/Heading6';
import Link from "next/link";
function LeftSidebar() {
    return (
        <>
        
        
        <div
            className={`invisible md:visible h-screen fixed md:left-0 overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
        >
            <div className="  ">
                <a
                    href="https://material-tailwind.com?ref=mtd"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 text-center w-full inline-block"
                >
                    <H6 className="" color="gray"><Icon name="account_circle" size="3xl" color="blue" />User Profile</H6>
                </a>
            </div>
            <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
                
                <div className="flex flex-col">
                    < H6 color="gray">Main</H6>
                
                    <ul className="flex-col min-w-full flex list-none">
                        <Link  href="/home">
                            <li className="px-4 rounded-lg mb-2  hover:bg-gray-300">
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-4 text-sm font-semibold py-3"
                                    >
                                        <Icon name="email" size="2xl"  color="blue"/>
                                        Email
                                    </a>
                            </li>
                        </Link>
                            
                            {/* <Link></Link> */}
                            <li className="px-4 rounded-lg mb-2 hover:bg-gray-300 ">
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 text-sm font-semibold py-3"
                                >
                                    <Icon name="add_circle" size="2xl" color="blue" />
                                    Compose
                                </a>
                            </li>
                            {/* <Link></Link> */}
                            <li className="px-4 rounded-lg mb-2 hover:bg-gray-300 ">
                                <a
                                    href="https://demos.creative-tim.com/material-tailwind-kit-react/#/landing"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 text-sm font-semibold py-3"
                                >
                                    <Icon name="inbox" size="2xl" color="blue" />
                                    Inbox
                                </a>
                            </li>
                            {/* <Link></Link> */}
                            <li className="px-4 rounded-lg mb-2 hover:bg-gray-300 ">
                                <a
                                    href="https://demos.creative-tim.com/material-tailwind-kit-react/#/landing"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 text-sm font-semibold py-3"
                                >
                                    <Icon name="send" size="2xl" color="blue" />
                                    Sent
                                </a>
                            </li>
                        <Link href="/chat">
                            <li className="px-4 rounded-lg mb-2 hover:bg-gray-300 ">
                                    <a
                                        
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-4 text-sm font-semibold py-3"
                                    >
                                        <Icon name="forum" size="2xl" color="blue" />
                                        Group Chat
                                    </a>
                            </li>
                        </Link>
                            
                            {/* <Link></Link> */}
                            <li className="px-4 rounded-lg mb-2 hover:bg-gray-300 ">
                                <a
                                    
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 text-sm font-semibold py-3"
                                >
                                    <Icon name="today" size="2xl" color="blue" />
                                    Calendar
                                </a>
                            </li>
                    </ul>

                    < H6 color="gray">Staff</H6>
                    <ul className="flex-col min-w-full flex list-none">
                        
                    {/* <Link></Link> */}
                        <li className="px-4 rounded-lg mb-2  hover:bg-gray-300">
                            <a
                                href="https://demos.creative-tim.com/material-tailwind-kit-react/#/login"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-4 text-sm font-semibold py-3"
                            >
                                <Icon name="fingerprint" size="2xl" />
                                Staff List
                            </a>
                        </li>
                    {/* <Link></Link> */}
                        <li className="px-4 rounded-lg mb-2 hover:bg-gray-300 ">
                            <a
                                href="https://demos.creative-tim.com/material-tailwind-kit-react/#/register"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-4 text-sm font-semibold py-3"
                            >
                                <Icon name="list_alt" size="2xl" />
                                Department
                            </a>
                        </li>
                    {/* <Link></Link> */}
                        <li className="px-4 rounded-lg mb-2 hover:bg-gray-300 ">
                            <a
                                href="https://demos.creative-tim.com/material-tailwind-kit-react/#/landing"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-4 text-sm font-semibold py-3"
                            >
                                <Icon name="web" size="2xl" />
                                Leave Application
                            </a>
                        </li>
                    {/* <Link></Link> */}
                        <li className="px-4 rounded-lg mb-2 hover:bg-gray-300">
                            <a
                                href="https://demos.creative-tim.com/material-tailwind-kit-react/#/profile"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-4 text-sm font-semibold py-3"
                            >
                                <Icon name="account_circle" size="2xl" />
                                Allowance & Benefits
                            </a>
                        </li>
                    {/* <Link></Link> */}
                        <li className="px-4 rounded-lg mb-2  hover:bg-gray-300">
                            <a
                                href="https://demos.creative-tim.com/material-tailwind-kit-react/#/profile"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-4 text-sm font-semibold py-3"
                            >
                                <Icon name="account_circle" size="2xl" />
                                Pay Advice
                            </a>
                        </li>
                        <H6 color="gray">Customer</H6>
                        <div data-trigger="Customer" className="">
                    {/* <Link></Link> */}
                            <li className="px-4 rounded-lg mb-2 hover:bg-gray-300 ">
                                <a
                                    href="https://demos.creative-tim.com/material-tailwind-kit-react/#/landing"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 text-sm font-semibold py-3"
                                >
                                    <Icon name="web" size="2xl" />
                                    Customer List
                                </a>
                            </li>
                    {/* <Link></Link> */}
                            <li className="px-4 rounded-lg mb-2 hover:bg-gray-300">
                                <a
                                    href="https://demos.creative-tim.com/material-tailwind-kit-react/#/profile"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 text-sm font-semibold py-3"
                                >
                                    <Icon name="account_circle" size="2xl" />
                                    Quotation
                                </a>
                            </li>
                    {/* <Link></Link> */}
                            <li className="px-4 rounded-lg mb-2  hover:bg-gray-300">
                                <a
                                    href="https://demos.creative-tim.com/material-tailwind-kit-react/#/profile"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 text-sm font-semibold py-3"
                                >
                                    <Icon name="account_circle" size="2xl" />
                                    Purchase Order
                                </a>
                            </li>
                    {/* <Link></Link> */}
                            <li className="px-4 rounded-lg mb-2 hover:bg-gray-300">
                                <a
                                    href="https://demos.creative-tim.com/material-tailwind-kit-react/#/profile"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 text-sm font-semibold py-3"
                                >
                                    <Icon name="account_circle" size="2xl" />
                                    Delivery Order
                                </a>
                            </li>
                    {/* <Link></Link> */}
                            <li className="px-4 rounded-lg mb-2  hover:bg-gray-300">
                                <a
                                    href="https://demos.creative-tim.com/material-tailwind-kit-react/#/profile"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 text-sm font-semibold py-3"
                                >
                                    <Icon name="account_circle" size="2xl" />
                                    Invoice
                                </a>
                            </li>
                        </div>
                        <H6 color="gray">Supplier</H6>
                        <div data-trigger="Supplier" className="">
                    {/* <Link></Link> */}
                            <li className="px-4 rounded-lg mb-2 hover:bg-gray-300 ">
                                <a
                                    href="https://demos.creative-tim.com/material-tailwind-kit-react/#/landing"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 text-sm font-semibold py-3"
                                >
                                    <Icon name="web" size="2xl" />
                                    Supplier List
                                </a>
                            </li>
                            
                        </div>
                        <H6 color="gray">Accounting</H6>
                        <div data-trigger="Accounting" className="">
                    {/* <Link></Link> */}
                            <li className="px-4 rounded-lg mb-2 hover:bg-gray-300 ">
                                <a
                                    href="https://demos.creative-tim.com/material-tailwind-kit-react/#/landing"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 text-sm font-semibold py-3"
                                >
                                    <Icon name="web" size="2xl" />
                                    Dashboard
                                </a>
                            </li>
                    {/* <Link></Link> */}
                            <li className="px-4 rounded-lg mb-2 hover:bg-gray-300 ">
                                <a
                                    href="https://demos.creative-tim.com/material-tailwind-kit-react/#/landing"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 text-sm font-semibold py-3"
                                >
                                    <Icon name="web" size="2xl" />
                                    Cash Statement
                                </a>
                            </li>
                    {/* <Link></Link> */}
                            <li className="px-4 rounded-lg mb-2 hover:bg-gray-300 ">
                                <a
                                    href="https://demos.creative-tim.com/material-tailwind-kit-react/#/landing"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 text-sm font-semibold py-3"
                                >
                                    <Icon name="web" size="2xl" />
                                    Balance Sheet
                                </a>
                            </li>
                     {/* <Link></Link> */}
                            <li className="px-4 rounded-lg mb-2 hover:bg-gray-300 ">
                                <a
                                   
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 text-sm font-semibold py-3"
                                >
                                    <Icon name="web" size="2xl" />
                                    Profit Loss Statement
                                </a>
                            </li>
                            
                        </div>
                        
                    </ul>

                  
                </div>
            </div>
        </div>
    </>
    )
}

export default LeftSidebar
