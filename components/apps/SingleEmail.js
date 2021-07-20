import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
function SingleEmail() {
    return (
        <div className="flex items-center justify-between shadow-sm py-4 ">
            <div className="flex items-center">
                <input type="checkbox"/>
                <Button
                            color="white"
                            buttonType="outline"
                            rounded={true}
                            iconOnly={true}
                            ripple={"dark"}
                            className="sm:hidden md:inline-flex h-15 w-20 border-0"
                        >
                        <Icon name="grade" size="2xl" color="gray"/>
                </Button>
                <p className=" pl-2 pr-10 w-auto truncate">Santos Dave</p>
            </div>
            <div className=" flex-grow px-4">
                <h2>Welcome to my email</h2>
            </div>
            <div className="flex items-center px-4 md:ml-9">
                <p className=" pl-2 pr-1 w-auto truncate">3.5 y ago</p>
                <Button
                            color="white"
                            buttonType="outline"
                            rounded={true}
                            iconOnly={true}
                            ripple={"dark"}
                            className="sm:hidden md:inline-flex h-15 w-20 border-0"
                        >
                        <Icon name="more_vert" size="2xl" />
                </Button>
                
            </div>

        </div>
    )
}

export default SingleEmail
