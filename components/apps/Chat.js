import React , { useState, useEffect, useCallback } from "react";
import { IconButton, Divider, TextField, Avatar } from '@material-ui/core'
import ChatAvatar from "../utilities/ChatAvatar";
import ScrollBar from 'react-perfect-scrollbar';
import ChatRecent from "../utilities/ChatRecent";
import ChatContacts from "../utilities/ChatContacts";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
function Chat() {
    return (
        <div className="flex justify-evenly">
            
            <div className="flex-grow flex-col w-64  py-5 h-full  items-center ">
                <div className="flex sticky top-20 z-50 justify-evenly items-center pl-5 py-3 pr-3 bg-blue-600 rounded-sm">
                    <ChatAvatar src={'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg'} status={"online"} />
                    <div className="ml-1">
                        <h5 className="mt-0 mb-3px pr-4 text-bold text-white">Santos Dave</h5>
                        
                    </div>
                </div>
                <div className="`invisible md:visible  h-screen   overflow-y-auto  flex-nowrap overflow-hidden w-64  shadow-xl bg-white  z-10 py-4 px-6 transition-all duration-300`">
                    <div className=" flex-col items-stretch  flex-nowrap   relative ">
                        <ChatRecent  src={"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"} name={"Wycliffe Odhiambo"} time={"July 21,2021"} status={"online"}/>
                        <ChatRecent  src={"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"} name={"Beatrice Wanjiku"} time={"July 21,2021"} status={"online"}/>
                        <ChatRecent  src={"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"} name={"John Kelvin"} time={"July 21,2021"} status={"offline"}/>
                        <ChatRecent  src={"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"} name={"Wycliffe Odhiambo"} time={"July 21,2021"} status={"online"}/>
                        <ChatRecent  src={"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"} name={"Wycliffe Odhiambo"} time={"July 21,2021"} status={"offline"}/>
                        <ChatRecent  src={"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"} name={"Wycliffe Odhiambo"} time={"July 21,2021"} status={"online"}/>
                        <ChatRecent  src={"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"} name={"Wycliffe Odhiambo"} time={"July 21,2021"} status={"offline"}/>
                    </div>
                    <Divider className={"bg-gray-400"} />
                    <div className=" flex-col items-stretch min-h-full flex-nowrap  relative ">
                        <ChatContacts src={"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"} name={"Wycliffe Odhiambo"}  status={"online"}/>
                        <ChatContacts  src={"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"} name={"Wycliffe Odhiambo"}  status={"online"}/>
                        <ChatContacts src={"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"} name={"Beatrice Wanjiku"}  status={"online"}/>
                        <ChatContacts  src={"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"} name={"John Kelvin"}  status={"offline"}/>
                        <ChatContacts  src={"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"} name={"Wycliffe Odhiambo"} status={"online"}/>
                        <ChatContacts  src={"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"} name={"Wycliffe Odhiambo"}  status={"offline"}/>
                        <ChatContacts  src={"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"} name={"Wycliffe Odhiambo"} status={"online"}/>
                        <ChatContacts  src={"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"} name={"Wycliffe Odhiambo"}  status={"offline"}/>
                </div>
                </div>
                
            </div>
            
            <div className="flex-grow flex-col   py-5 h-full  items-center">
                <div className="flex sticky top-20 z-50  justify-between items-center ml-1 pl-5 py-3 pr-3 bg-blue-600 rounded-sm">
                    <ChatAvatar src={'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg'} status={"online"} />
                    <div className="ml-1">
                        <h5 className="mt-0 mb-3px pr-4 text-bold text-white">Santos Dave</h5>
                        
                    </div>
                    <div>
                        <Button
                            color="white"
                            buttonType="outline"
                            rounded={true}
                            iconOnly={true}
                            ripple={"dark"}
                            className=" md:inline-flex h-15 w-20 border-0"
                        >
                            <Icon name="more_vert" size="2xl" color="white"/>
                        </Button>
                    </div>
                </div>
                <ScrollBar className="flex-grow bg-blue-300 " id="chat-scroll">
                    <div className="flex p-5 justify-end">
                        <Avatar src={'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg'} />
                        <div className="ml-3">
                                <h5 className="mt-0 mb-1 text-sm">
                                    {"Wycliffe Odhiambo"}
                                </h5>
                                <div className={"p-2 mb-2 w-max rounded-xl whitespace-pre-wrap bg-gray-400"}>
                                {"Hi, I'm coming today'"}
                                </div>
                                <span className="text-muted text-13 font-medium">
                                1 minute ago
                                </span>
                                
                        </div>
                        

                    </div>
                    <div className="flex p-5 justify-end">
                        <Avatar src={'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg'} />
                        <div className="ml-3">
                                <h5 className="mt-0 mb-1 text-sm">
                                    {"Wycliffe Odhiambo"}
                                </h5>
                                <div className={"p-2 mb-2 w-max rounded-xl whitespace-pre-wrap bg-gray-400"}>
                                {"Hi, I'm coming today'"}
                                </div>
                                <span className="text-muted text-13 font-medium">
                                1 minute ago
                                </span>
                                
                        </div>
                        

                    </div>
                </ScrollBar>
                <div>
                    <Divider className={"bg-gray-400"} />
                    <TextField
                        placeholder="Type here ..."    
                        multiline
                        rowsMax={4}
                        fullWidth
                        InputProps={{
                            disableUnderline: true,
                            endAdornment: (
                                <div className="flex justify-center w-full">
                                    <Button
                                        color="blue"
                                        buttonType="outline"
                                        rounded={true}
                                        iconOnly={true}
                                        ripple={"dark"}
                                        className=" md:inline-flex h-15 w-10 border-0"
                                    >
                                        <Icon name="attachment" size="2xl" color="blue"/>
                                    </Button>
                                    <Button
                                        color="blue"
                                        buttonType="outline"
                                        rounded={true}
                                        iconOnly={true}
                                        ripple={"dark"}
                                        className=" md:inline-flex h-15 w-10 border-0"
                                    >
                                        <Icon name="tag_faces" size="2xl" color="blue"/>
                                    </Button>
                                    <Button
                                        color="blue"
                                        buttonType="outline"
                                        rounded={true}
                                        iconOnly={true}
                                        ripple={"dark"}
                                        className=" md:inline-flex h-15 w-10 border-0"
                                    >
                                        <Icon name="send" size="2xl" color="blue"/>
                                    </Button>
                                </div>
                            ),
                            classes: { root: 'pl-5 pr-3 py-3 ' },
                        }}
                        /* value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyUp={sendMessageOnEnter} */
                    />
            
                </div>
            </div>
        </div>
    )
}

export default Chat
