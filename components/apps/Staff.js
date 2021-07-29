import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import StaffList from "../utilities/StaffList";
function Staff() {
    return (
        <div className="flex-grow container flex-row py-5 px-7">
            <div className="flex-col">
                
                <div className=" flex sticky top-20 z-50 w-auto bg-white py-2 px-4 justify-between items-center  shadow-md rounded-md">
                    <header>
                        <h2 className="text-2xl font-semibold">All Staff</h2>
                    </header>
                    <div className="flex items-center flex-end">
                    <Button
                    color="gray"
                    buttonType="outline"
                    rounded={true}
                    iconOnly={true}
                    ripple={"dark"}
                    className="sm:hidden md:inline-flex h-10 w-10 border-0"
                    >
                        <Icon name="search" color="blue" size="2xl"/>
                    </Button>
                    <Button
                    color="gray"
                    buttonType="outline"
                    rounded={true}
                    iconOnly={true}
                    ripple={"dark"}
                    className="sm:hidden md:inline-flex h-10 w-10 border-0"
                    >
                        <Icon name="cloud_download"  color="blue" size="2xl"/>
                    </Button>
                    <Button
                    color="gray"
                    buttonType="outline"
                    rounded={true}
                    iconOnly={true}
                    ripple={"dark"}
                    className="sm:hidden md:inline-flex h-10 w-10 border-0"
                    >
                        <Icon name="print" color="blue" size="2xl"/>
                    </Button>
                    <Button
                    color="gray"
                    buttonType="outline"
                    rounded={true}
                    iconOnly={true}
                    ripple={"dark"}
                    className="sm:hidden md:inline-flex  h-10 w-10 border-0"
                    >
                        <Icon name="view_column" color="blue" className="" size="2xl"/>
                    </Button>
                    <Button
                    color="gray"
                    buttonType="outline"
                    rounded={true}
                    iconOnly={true}
                    ripple={"dark"}
                    className="sm:hidden md:inline-flex  h-10 w-10 border-0"
                    >
                        <Icon name="filter_list" color="blue" className="" size="2xl"/>
                    </Button>
                    <Button
                    color="gray"
                    buttonType="outline"
                    rounded={true}
                    iconOnly={true}
                    ripple={"dark"}
                    className="sm:hidden md:inline-flex  h-10 w-10 border-0"
                    >
                        <Icon name="sort" color="blue" className="" size="2xl"/>
                    </Button>
                    </div>
                </div>
                <div>
                    <StaffList/>
                </div>
            </div>    
        </div>
    )
}

export default Staff
