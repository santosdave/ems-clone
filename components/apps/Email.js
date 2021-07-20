import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import SingleEmail from "./SingleEmail";
function Email() {
    return (
        <div className="flex-grow flex-row py-5 ">
            <div className="flex sticky top-20 z-50 w-auto bg-blue-600 py-1 px-4 w- items-center  rounded-md ">
                        
                <input type="checkbox"/>
                <h2 className="ml-3 font-sm text-white">All</h2>
                <div className="flex ml-4">
                        <Button
                            color="white"
                            buttonType="outline"
                            rounded={true}
                            iconOnly={true}
                            ripple={"dark"}
                            className="sm:hidden md:inline-flex h-15 w-20 border-0"
                        >
                        <Icon name="delete" size="2xl" color="white"/>
                        </Button>
                        <Button
                            color="white"
                            buttonType="outline"
                            rounded={true}
                            iconOnly={true}
                            ripple={"dark"}
                            className="sm:hidden md:inline-flex h-15 w-20 border-0"
                        >
                            <Icon name="mark_email_unread" size="2xl" color="white"/>
                        </Button>
                        <Button
                            color="white"
                            buttonType="outline"
                            rounded={true}
                            iconOnly={true}
                            ripple={"dark"}
                            className="sm:hidden md:inline-flex h-15 w-20 border-0"
                        >
                            <Icon name="drafts" size="2xl" color="white"/>
                        </Button>
                        <Button
                            color="white"
                            buttonType="outline"
                            rounded={true}
                            iconOnly={true}
                            ripple={"dark"}
                            className="sm:hidden md:inline-flex h-15 w-20 border-0"
                        >
                            <Icon name="send_and_archive" size="2xl" color="white"/>
                        </Button>
                </div>
                <Button
                            color="white"
                            buttonType="outline"
                            rounded={true}
                            iconOnly={true}
                            ripple={"dark"}
                            className="md:invisible md:inline-flex h-15 w-20 border-0"
                        >
                            <Icon name="more_vert" size="2xl" color="white"/>
                        </Button>
            </div>
            <div className="flex-grow  bg-white py-1 px-4 w- items-center relative">
                <SingleEmail/>
                <SingleEmail/>
                <SingleEmail/>
                <SingleEmail/>
                <SingleEmail/>
                <SingleEmail/>
                <SingleEmail/>
                <SingleEmail/>
                <SingleEmail/>
                <SingleEmail/>
                <SingleEmail/>
            </div>
        </div>
    )
}

export default Email
