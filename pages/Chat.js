import React , { useState, useEffect, useCallback, useRef } from "react";
import { IconButton, Divider, TextField, Avatar } from '@material-ui/core'
import ChatAvatar from "../components/utilities/ChatAvatar";
import ScrollBar from 'react-perfect-scrollbar';
import ChatRecent from "../components/utilities/ChatRecent";
import ChatContacts from "../components/utilities/ChatContacts";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Popover from "@material-tailwind/react/Popover";
import PopoverContainer from "@material-tailwind/react/PopoverContainer";

import PopoverBody from "@material-tailwind/react/PopoverBody";
import clsx from 'clsx'
const globalMessageList = []
function Chat({ togglePopup }) {
    
    const [isAlive, setIsAlive]= useState(true);
    const [contacts, setContacts] = useState([]);
    const [message, setMessage]=useState("");
    const [messageList, setMessageList]=useState([]);
    const [chatBottomRef, setchatBottomRef] =useState("")
    const currentUserId = '7863a6802ez0e277a0f98534'
    const buttonRef = useRef();
    
    if (typeof window === 'object') {
        // Check if document is finally loaded
           document.addEventListener("DOMContentLoaded", function () {
            const NewDocument = document.querySelector('#chat-scroll');
               alert('Finished loading')
               useEffect(() => {
                setchatBottomRef(NewDocument)
            }, [])   
               
            });
        }
        const sendMessageOnEnter=(e)=>{
            if(e.key==="Enter" && !e.shiftKey){
                const tempMessage=message.trim()
                if(tempMessage==""){
                    const tempList = [...messageList];
                    const messageObject={
                        text:tempMessage,
                        contactId:currentUserId,
                    }
                    tempList.push(messageObject)
                    globalMessageList.push(messageObject)
                    if (isAlive) setMessageList(tempList)
                    dummyReply()
                }
                setMessage('')
            }
    }
    const dummyReply =async ()=>{
        setTimeout(() => {
            let tempList = [...messageList]
            let messageObject = {
                text: 'Good to hear from you. enjoy!!!',
                contactId: 'opponents contact id',
                avatar: '/assets/images/faces/13.jpg',
                name: 'Frank Powell',
            }

            tempList.push(messageObject)
            globalMessageList.push(messageObject)
            if (isAlive) setMessageList(globalMessageList)
        }, 2000)
    }
    const scrollToBottom = useCallback(() => {
        if (chatBottomRef) {
            chatBottomRef.scrollTo({
                top: chatBottomRef.scrollHeight,
                behavior: 'smooth',
            })
        }
    }, [chatBottomRef])
    useEffect(() => {
        if (isAlive) {
            setMessageList([
                {
                    contactId: '323sa680b3249760ea21rt47',
                    text:
                        'Do you ever find yourself falling into the “discount trap?”',
                    time: '2018-02-10T08:45:28.291Z',
                    id: '323sa680b3249760ea21rt47',
                    name: 'Beatrice Wanjiru',
                    avatar: 'https://media-exp3.licdn.com/dms/image/C4D03AQH_cs_uWXX_Lg/profile-displayphoto-shrink_800_800/0/1612520002696?e=1632355200&v=beta&t=G0sV93bzV328oXNbnR8r0hGznCLvhVN_cAQugtQi-qY',
                    status: 'offline',
                    mood: '',
                },
                {
                    contactId: '7863a6802ez0e277a0f98534',
                    text:
                        'Giving away your knowledge or product just to gain clients?',
                    time: '2018-02-10T08:45:28.291Z',
                    id: '7863a6802ez0e277a0f98534',
                    name: 'Santos Dave',
                    avatar: 'https://media-exp3.licdn.com/dms/image/C4D03AQFaYwtIZ5k53g/profile-displayphoto-shrink_800_800/0/1622195469007?e=1632355200&v=beta&t=24cvGNubyys3-JrSg5kB9FYqbRV4dOeGOH5T5MmdD-0',
                    status: 'online',
                    mood: '',
                },
                {
                    contactId: '323sa680b3249760ea21rt47',
                    text: 'Yes',
                    time: '2018-02-10T08:45:28.291Z',
                    id: '323sa680b3249760ea21rt47',
                    name: 'Beatrice Wanjiru',
                    avatar: 'https://media-exp3.licdn.com/dms/image/C4D03AQH_cs_uWXX_Lg/profile-displayphoto-shrink_800_800/0/1612520002696?e=1632355200&v=beta&t=G0sV93bzV328oXNbnR8r0hGznCLvhVN_cAQugtQi-qY',
                    status: 'online',
                    mood: '',
                },
                {
                    contactId: '7863a6802ez0e277a0f98534',
                    text: 'Don’t feel bad. It happens to a lot of us',
                    time: '2018-02-10T08:45:28.291Z',
                    id: '7863a6802ez0e277a0f98534',
                    name: 'Santos Dave',
                    avatar: 'https://media-exp3.licdn.com/dms/image/C4D03AQFaYwtIZ5k53g/profile-displayphoto-shrink_800_800/0/1622195469007?e=1632355200&v=beta&t=24cvGNubyys3-JrSg5kB9FYqbRV4dOeGOH5T5MmdD-0',
                    status: 'online',
                    mood: '',
                },
                {
                    contactId: '323sa680b3249760ea21rt47',
                    text:
                        'Do you ever find yourself falling into the “discount trap?”',
                    time: '2018-02-10T08:45:28.291Z',
                    id: '323sa680b3249760ea21rt47',
                    name: 'Beatrice Wanjiru',
                    avatar: 'https://media-exp3.licdn.com/dms/image/C4D03AQH_cs_uWXX_Lg/profile-displayphoto-shrink_800_800/0/1612520002696?e=1632355200&v=beta&t=G0sV93bzV328oXNbnR8r0hGznCLvhVN_cAQugtQi-qY',
                    status: 'online',
                    mood: '',
                },
                {
                    contactId: '7863a6802ez0e277a0f98534',
                    text:
                        'Giving away your knowledge or product just to gain clients?',
                    time: '2018-02-10T08:45:28.291Z',
                    id: '7863a6802ez0e277a0f98534',
                    name: 'Santos Dave',
                    avatar: 'https://media-exp3.licdn.com/dms/image/C4D03AQFaYwtIZ5k53g/profile-displayphoto-shrink_800_800/0/1622195469007?e=1632355200&v=beta&t=24cvGNubyys3-JrSg5kB9FYqbRV4dOeGOH5T5MmdD-0',
                    status: 'online',
                    mood: '',
                },
                {
                    contactId: '323sa680b3249760ea21rt47',
                    text: 'Yes',
                    time: '2018-02-10T08:45:28.291Z',
                    id: '323sa680b3249760ea21rt47',
                    name: 'Beatrice Wanjiru',
                    avatar: 'https://media-exp3.licdn.com/dms/image/C4D03AQH_cs_uWXX_Lg/profile-displayphoto-shrink_800_800/0/1612520002696?e=1632355200&v=beta&t=G0sV93bzV328oXNbnR8r0hGznCLvhVN_cAQugtQi-qY',
                    status: 'online',
                    mood: '',
                },
                {
                    contactId: '7863a6802ez0e277a0f98534',
                    text: 'Don’t feel bad. It happens to a lot of us',
                    time: '2018-02-10T08:45:28.291Z',
                    id: '7863a6802ez0e277a0f98534',
                    name: 'Santos Dave',
                    avatar: 'https://media-exp3.licdn.com/dms/image/C4D03AQFaYwtIZ5k53g/profile-displayphoto-shrink_800_800/0/1622195469007?e=1632355200&v=beta&t=24cvGNubyys3-JrSg5kB9FYqbRV4dOeGOH5T5MmdD-0',
                    status: 'online',
                    mood: '',
                },
            ])
        }
        // getChatRoomByContactId(currentUserId, "323sa680b3249760ea21rt47").then(
        //   ({ data }) => {
        //     if (isAlive) {
        //       setMessageList(data?.messageList);
        //     }
        //   }
        // );
    }, [isAlive])
    useEffect(() => {
        if (isAlive) {
            setContacts([
                {
                    contactId: '323sa680b3249760ea21rt47',
                    text:
                        'Do you ever find yourself falling into the “discount trap?”',
                    time: '2018-02-10T08:45:28.291Z',
                    id: '323sa680b3249760ea21rt47',
                    name: 'Beatrice Wanjiru',
                    avatar: 'https://media-exp3.licdn.com/dms/image/C4D03AQH_cs_uWXX_Lg/profile-displayphoto-shrink_800_800/0/1612520002696?e=1632355200&v=beta&t=G0sV93bzV328oXNbnR8r0hGznCLvhVN_cAQugtQi-qY',
                    status: 'offline',
                    mood: '',
                },
                {
                    contactId: '7863a6802ez0e277a0f98534',
                    text:
                        'Giving away your knowledge or product just to gain clients?',
                    time: '2018-02-10T08:45:28.291Z',
                    id: '7863a6802ez0e277a0f98534',
                    name: 'Santos Dave',
                    avatar: 'https://media-exp3.licdn.com/dms/image/C4D03AQFaYwtIZ5k53g/profile-displayphoto-shrink_800_800/0/1622195469007?e=1632355200&v=beta&t=24cvGNubyys3-JrSg5kB9FYqbRV4dOeGOH5T5MmdD-0',
                    status: 'online',
                    mood: '',
                },
                {
                    contactId: '323sa680b3246960ea21rt47',
                    text: 'Yes',
                    time: '2018-02-10T08:45:28.291Z',
                    id: '323sa680b3246960ea21rt47',
                    name: 'John Kelvin',
                    avatar: 'https://media-exp3.licdn.com/dms/image/C4D03AQHnS50AJUAYyw/profile-displayphoto-shrink_800_800/0/1618567787414?e=1632355200&v=beta&t=xC7mgeWvFqyK3SAn3bvpvlnLAsY8WhcKnJzRGZlFK1I',
                    status: 'online',
                    mood: '',
                },
                {
                    contactId: '7863b6802ez0e277a0f98534',
                    text: 'Don’t feel bad. It happens to a lot of us',
                    time: '2018-02-10T08:45:28.291Z',
                    id: '7863b6802ez0e277a0f98534',
                    name: 'Beatrice Adera',
                    avatar: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
                    status: 'online',
                    mood: '',
                },
                {
                    contactId: '323sa690b3249760ea21rt47',
                    text:
                        'Do you ever find yourself falling into the “discount trap?”',
                    time: '2018-02-10T08:45:28.291Z',
                    id: '323sa690b3249760ea21rt47',
                    name: 'Brian Wafula',
                    avatar: 'https://media-exp3.licdn.com/dms/image/C5603AQHwtaHytYu2kA/profile-displayphoto-shrink_200_200/0/1583736697953?e=1632355200&v=beta&t=z9isy-7RYpv8rqBE0cX9-3LIj6uQKwRvEgQfptkqYBM',
                    status: 'online',
                    mood: '',
                },
                {
                    contactId: '7863a6802ez0e287a0f98534',
                    text:
                        'Giving away your knowledge or product just to gain clients?',
                    time: '2018-02-10T08:45:28.291Z',
                    id: '7863a6802ez0e287a0f98534',
                    name: 'John Doe',
                    avatar: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
                    status: 'offline',
                    mood: '',
                },
                {
                    contactId: '123sa680b3249760ea21rt47',
                    text: 'Yes',
                    time: '2018-02-10T08:45:28.291Z',
                    id: '123sa680b3249760ea21rt47',
                    name: ' Amadi Allela',
                    avatar: 'https://media-exp3.licdn.com/dms/image/C4D03AQHCQwMJ-3JKKg/profile-displayphoto-shrink_100_100/0/1610613577966?e=1632355200&v=beta&t=XWJvyKn1XDG8XiWG9GOVuLi60Zc3DiVWciEvXsLDDhY',
                    status: 'online',
                    mood: '',
                },
                {
                    contactId: '7862a6802ez0e277a0f98534',
                    text: 'Don’t feel bad. It happens to a lot of us',
                    time: '2018-02-10T08:45:28.291Z',
                    id: '7862a6802ez0e277a0f98534',
                    name: 'Faith Rainbow',
                    avatar: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
                    status: 'offline',
                    mood: '',
                },
            ])
        }
        /* // getChatRoomByContactId(currentUserId, "323sa680b3249760ea21rt47").then(
        //   ({ data }) => {
        //     if (isAlive) {
        //       setMessageList(data?.messageList);
        //     }
        //   }
        // ); */
    }, [isAlive])
    useEffect(() => {
        scrollToBottom()
        return () => setIsAlive(false)
    }, [messageList, scrollToBottom])
    return (
        <div className="flex justify-evenly h-full">
            
            <div className="invisible md:visible  flex-grow flex-col w-64  py-5 h-full  items-center ">
            {contacts.filter(item =>item.contactId == currentUserId).map(filteredItem=>(
                <div className="flex sticky top-20 z-50 justify-evenly items-center pl-5 py-3 pr-3 bg-blue-600 rounded-sm">
                
                    <ChatAvatar src={filteredItem.avatar} status={filteredItem.status} />
                
                
                   <div className="ml-1">
                        <h5 className="mt-0 mb-3px pr-4 text-bold text-white">{filteredItem.name}</h5>
                        
                    </div>
                
                </div>
            ))}
                <div className="` h-screen   overflow-y-auto  flex-nowrap overflow-hidden w-64  shadow-xl bg-white  z-10 py-4 px-6 transition-all duration-300`">
                {contacts.map((item) => (    
                    <div className=" flex-col items-stretch  flex-nowrap   relative ">
                        {currentUserId !== item.contactId && (
                        <ChatRecent key={item.id} id={item.id} src={item.avatar} name={item.name} time={"July 21,2021"} status={item.status}/>
                        )}
                    </div>
                ))}
                    <Divider className={"bg-gray-400"} />
                {contacts.map((item) => (    
                    <div className=" flex-col items-stretch  flex-nowrap  relative ">
                        {currentUserId !== item.contactId && (
                        <ChatContacts key={item.id} id={item.id} src={item.avatar} name={item.name}  status={item.status}/>
                        )}
                        
                    </div>
                ))}
                </div>
                
            </div>
            
            <div className="flex-grow flex-col   py-5 h-full  items-center">
                <div className="flex flex-grow sticky top-20 z-50  justify-between items-center ml-1 pl-5 py-3 pr-3 bg-blue-600 rounded-sm">
                    <ChatAvatar src={'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg'} status={"online"} />
                    <div className="ml-1">
                        <h5 className="mt-0 mb-3px pr-4 text-bold text-white">Santos Dave</h5>
                        
                    </div>
                    <div>
                        <Button
                            color="white"
                            ref={buttonRef}
                            buttonType="outline"
                            rounded={true}
                            iconOnly={true}
                            ripple={"dark"}
                            className=" md:inline-flex h-15 w-20 border-0"
                        >
                            <Icon name="more_vert" size="2xl" color="white"/>
                        </Button>
                        <Popover placement="bottom" ref={buttonRef}>
                        <PopoverContainer>
                            
                            <PopoverBody>
                                <div className="flex-col p-1 items-center">
                                    <div className="flex  p-1 items-center hover:bg-gray-500 rounded-sm">
                                            <Button
                                            color="white"
                                            ref={buttonRef}
                                            buttonType="outline"
                                            rounded={true}
                                            iconOnly={true}
                                            ripple={"dark"}
                                            className=" md:inline-flex h-15 w-10 border-0"
                                            >
                                                <Icon name="account_circle" size="2xl" color="black"/>
                                            </Button>
                                            <h2 className="cursor-pointer">Contact</h2>
                                    </div>
                                    <div className="flex  p-1 items-center hover:bg-gray-500 rounded-sm">
                                            <Button
                                            color="white"
                                            ref={buttonRef}
                                            buttonType="outline"
                                            rounded={true}
                                            iconOnly={true}
                                            ripple={"dark"}
                                            className=" md:inline-flex h-15 w-10 border-0"
                                            >
                                                <Icon name="volume_mute" size="2xl" color="black"/>
                                            </Button>
                                            <h2 className="cursor-pointer">Mute</h2>
                                    </div>
                                    <div className="flex  p-1 items-center hover:bg-gray-500 rounded-sm">
                                            <Button
                                            color="white"
                                            ref={buttonRef}
                                            buttonType="outline"
                                            rounded={true}
                                            iconOnly={true}
                                            ripple={"dark"}
                                            className=" md:inline-flex h-15 w-10 border-0"
                                            >
                                            <Icon name="delete" size="2xl" color="black"/>
                                            </Button>
                                            <h2 className="cursor-pointer">Clear Chat</h2>
                                    </div>


                                </div>
                            </PopoverBody>
                        </PopoverContainer>
            </Popover>
                    </div>
                </div>
                <ScrollBar className="flex-col bg-blue-300  h-screen   overflow-y-auto  flex-nowrap overflow-hidden " id="chat-scroll">
                    
                {messageList.map((item, ind) => (
                    <div
                        className={clsx({
                            'p-5 flex flex-nowrap relative': true,
                            'justify-start': currentUserId === item.contactId,
                        })}
                        key={ind}
                    >
                        {currentUserId !== item.contactId && (
                            <Avatar src={item.avatar} />
                        )}
                        <div className="ml-3">
                            {currentUserId !== item.contactId && (
                                <h5 className="mt-0 mb-1 text-sm">
                                    {item.name}
                                </h5>
                            )}
                            <div
                                className={"p-2 mb-2 w-max rounded-xl whitespace-pre-wrap bg-gray-400"}
                            >
                                {item.text}
                            </div>
                            <span className="text-muted text-13 font-medium">
                                1 minute ago
                            </span>
                        </div>
                    </div>
                ))}
                    
                </ScrollBar>
                <Divider className={"bg-gray-400 py-1"} />
                <div className="flex-grow flex-col py-1 sticky  z-50 items-center">
                    
                
                    
                    <TextField
                            style={{}}
                            variant="outlined"   
                            
                            fullWidth
                            rowsMax={1}
                            className="flex-grow flex-row   py-5 h-full  items-center"
                            label="Type here ..."
                            InputProps={{
                                disableUnderline: false,
                                shrink: true,
                                endAdornment: (
                                    <div className="flex justify-end w-full">
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
                                
                            }}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyUp={sendMessageOnEnter}
                        />
                    
                    
            
                </div>
            </div>
        </div>
    )
}

export default Chat
