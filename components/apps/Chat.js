import React , { useState, useEffect, useCallback } from "react";
import { IconButton, Icon, Divider, TextField, Avatar } from '@material-ui/core'
import ChatAvatar from "../utilities/ChatAvatar";
import ScrollBar from 'react-perfect-scrollbar';
import ChatRecent from "../utilities/ChatRecent";
import ChatContacts from "../utilities/ChatContacts";
function Chat() {
    return (
        <div>
            
            <div className="flex-grow flex-col w-64  py-5 h-full  items-center ">
                <div className="flex sticky top-20 z-50 justify-between items-center pl-5 py-3 pr-3 bg-blue-600 rounded-sm">
                    <ChatAvatar src={'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg'} status={"online"} />
                    <div className="ml-3">
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
        </div>
    )
}

export default Chat
