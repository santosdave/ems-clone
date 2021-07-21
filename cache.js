import React , { useState, useEffect, useCallback } from "react";
import { IconButton, Icon, Divider, TextField, Avatar } from '@material-ui/core'
import ChatAvatar from "../utilities/ChatAvatar";
import ScrollBar from 'react-perfect-scrollbar';
import clsx from 'clsx'
// for previewing bot message
const globalMessageList = []

function Chat({ togglePopup }) {
   
    const [chatBottomRef, setchatBottomRef] =useState("")
    
    const [isAlive, setIsAlive] =useState(true);
    const [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
    const currentUserId = '7863a6802ez0e277a0f98534'
    if (typeof window === 'object') {
        // Check if document is finally loaded
           document.addEventListener("DOMContentLoaded", function () {
                const chatBottomRef = document.querySelector('#chat-scroll')
               alert('Finished loading')
               useEffect(() => {
                setchatBottomRef(chatBottomRef)
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
                    name: 'Frank Powell',
                    avatar: '/assets/images/faces/13.jpg',
                    status: 'online',
                    mood: '',
                },
                {
                    contactId: '7863a6802ez0e277a0f98534',
                    text:
                        'Giving away your knowledge or product just to gain clients?',
                    time: '2018-02-10T08:45:28.291Z',
                    id: '7863a6802ez0e277a0f98534',
                    name: 'John Doe',
                    avatar: '/assets/images/face-1.jpg',
                    status: 'online',
                    mood: '',
                },
                {
                    contactId: '323sa680b3249760ea21rt47',
                    text: 'Yes',
                    time: '2018-02-10T08:45:28.291Z',
                    id: '323sa680b3249760ea21rt47',
                    name: 'Frank Powell',
                    avatar: '/assets/images/faces/13.jpg',
                    status: 'online',
                    mood: '',
                },
                {
                    contactId: '7863a6802ez0e277a0f98534',
                    text: 'Don’t feel bad. It happens to a lot of us',
                    time: '2018-02-10T08:45:28.291Z',
                    id: '7863a6802ez0e277a0f98534',
                    name: 'John Doe',
                    avatar: '/assets/images/face-1.jpg',
                    status: 'online',
                    mood: '',
                },
                {
                    contactId: '323sa680b3249760ea21rt47',
                    text:
                        'Do you ever find yourself falling into the “discount trap?”',
                    time: '2018-02-10T08:45:28.291Z',
                    id: '323sa680b3249760ea21rt47',
                    name: 'Frank Powell',
                    avatar: '/assets/images/faces/13.jpg',
                    status: 'online',
                    mood: '',
                },
                {
                    contactId: '7863a6802ez0e277a0f98534',
                    text:
                        'Giving away your knowledge or product just to gain clients?',
                    time: '2018-02-10T08:45:28.291Z',
                    id: '7863a6802ez0e277a0f98534',
                    name: 'John Doe',
                    avatar: '/assets/images/face-1.jpg',
                    status: 'online',
                    mood: '',
                },
                {
                    contactId: '323sa680b3249760ea21rt47',
                    text: 'Yes',
                    time: '2018-02-10T08:45:28.291Z',
                    id: '323sa680b3249760ea21rt47',
                    name: 'Frank Powell',
                    avatar: '/assets/images/faces/13.jpg',
                    status: 'online',
                    mood: '',
                },
                {
                    contactId: '7863a6802ez0e277a0f98534',
                    text: 'Don’t feel bad. It happens to a lot of us',
                    time: '2018-02-10T08:45:28.291Z',
                    id: '7863a6802ez0e277a0f98534',
                    name: 'John Doe',
                    avatar: '/assets/images/face-1.jpg',
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
        scrollToBottom()
        return () => setIsAlive(false)
    }, [messageList, scrollToBottom])

    return (
        <div className="flex-grow flex-col py-5 h-full">
            <div className="flex justify-between items-center pl-5 py-3 pr-3 bg-blue-600 rounded-xl">
                <div className="flex items-center">
                    <ChatAvatar src={'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg'} status={"online"} />
                    <div className="ml-3">
                        <h5 className="mt-0 mb-3px text-14">Santos Dave</h5>
                        <span className="text-muted font-medium text-green-500">Active</span>
                    </div>
                </div>
                <IconButton onClick={togglePopup}>
                    <Icon className="text-body" fontSize="small">
                        clear
                    </Icon>
                </IconButton>
                
            </div>
            <ScrollBar className="flex-grow" id="chat-scroll">
            {messageList.map((item, ind) => (
                    <div
                        className={clsx({
                            'p-5 flex': true,
                            'justify-end': currentUserId === item.contactId,
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
                     {/* example of image sent by current user*/}
                <div className="p-5 flex justify-end">
                    <div className="ml-3">
                        <div className="p-2 mb-2 flex justify-end items-center w-max bg-gray-400 rounded-sm text-sm">
                            <img
                                className="w-40"
                                src="data:image/jpeg;base64,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JzdxdW2TDuAeL2QDts5B8hOvYnkXE061daFFGSoTVRyR0KjCzKykjMpyhviBBY7yBjqr0mfPRYZTdFQkvUUKzNam4GZgVA6DMDm3FoGl4XmBWOtWvTQcQoaobf0gTMYbmRhU+N6tTbQsEXwyi/rM7RxiMxQOMwJBVui3Rtfotv8AEu195KLcCPDa9+B6xAhYfknDUSDTw9JTqMxXO4106TanumReo21zYHUDTbTYbieAAnew8++94KdHXQDrNra9Xf2wKTuD+Nxvp6Spltr58eHG2sqKaftHQA2FvGx4a8IC6bpw6jcbeeh8oAgg31tfXfa/G2ltZ7axBvwtuO34euVAd/WLnXXg2u3YOqXQL7WHcLHtsQdoHiUDwBI6rZRwN+w90urTAbVhfqF3Y72NtwdeEqCX3uewnTy2l+mbaAWgU0qN72VjfixCA9+XpeYkxMKbZSUUb2VQTfru1we/LPEJklIHq0V0+JrW+JiduNjpfwl1X4WtAnhgGcdctPKmWQMdj6VEXeoqdQLBbngAOJgXXkWpI642tV/UYdyPpOvu177vYkdqq0upzfxFTWtXVBxWmuc/zuAv9ECO7gcR93fLFHEo5shaodrUkL2PUXHQX+IiZ7D82MMurIap3vVY1NesK3QXwAmYVABYAADYDQQMJgOTmPSemEHUzBn8QvRXvDGZ1RbSVRAREQEREBERASxicOlRSjorqd1ZQwPeDpL8QNX5S5nUqikIxS4Iyt/epYi1sr9JBoNEZNpg15CxOHfVGqU+l+rfOoLEtmNOpZ0sxOis+lp0SIHIMBy8494uKomk1JC7MtypCkA2RumDY3seAMzWAxiV6eei6ul7XXrsDYg6g2I85vWMwNOsuWrTVx1Moa3aL7HumEHNGnTzHDO1HMcxWwdGawGZlbpXsANGG0DF+8P5J9Z6pl/EYDEJ8dEVF+lSbXvKOQR3KWkOniabNkz5H+hUBRv5XAPzgXwJcQTxqDrw8tYpmBJpyVTEx74lEGZ2AA4k6eJ2Ej0uWs+mHpVKx66aEp/O2VP6oGwogleZV3Yd3HymJp4DHVfjanQXquar27lyop8WkujzWpf4z1K56qj2Tu92gVCPrAwLdbnBQViinO4/YQF38UQFh4gTz3+Mq/BQFNb/ABVWCm3WETMx7iVmew+GSmoSmioo2CqFA8BpL8DADkB3/X4l2HFKY9yvmpL/ANcn4HkihR1p0lVuLWux+s5ux8TMhEBERAREQEREBERAREQEREBERAREQEREBI2LwdOquWoiuvUyhh5GSYga9U5rquuHrVKH7obOn/je4HhaQ6HNWrmY1MYSGIJ93RWmdO1i4HgBNtiBhMLzYwqEMaQqONQ9UmqwPWpcnL/DaZoCexAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP//Z"
                                alt="laptop"
                            />
                            <div className="ml-3">
                                <h6 className="mt-0 mb-1">Asus K555LA.png</h6>
                                <span className="text-muted font-medium text-13">
                                    21.5KB
                                </span>
                            </div>
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
                            <div className="flex">
                                <IconButton size="small">
                                    <Icon className="text-body">tag_faces</Icon>
                                </IconButton>
                                <IconButton size="small">
                                    <Icon className="text-body">
                                        attachment
                                    </Icon>
                                </IconButton>
                                <IconButton size="small">
                                    <Icon className="text-body">
                                        send
                                    </Icon>
                                </IconButton>
                            </div>
                        ),
                        classes: { root: 'pl-5 pr-3 py-3 text-body' },
                    }}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyUp={sendMessageOnEnter}
                />
            </div>
        </div>
        
    )
}

export default Chat
