import ChatAvatar from "../utilities/ChatAvatar";
function ChatRecent({src, status,name,time}) {
    return (
        <div className="flex sticky  items-center pl-5 py-4 pr-3 hover:bg-gray-300 cursor-pointer rounded-xl ">
            <ChatAvatar src={src} status={status} />
            <div className=" flex flex-col ml-3 items-center">
                <h5 className="mt-0 mb-3px pr-2 text-sm text-black truncate">{name}</h5>
                <p className="mt-0 mb-3px pr-2 text-sm text-gray-700">{time}</p>
                
            </div>
        </div>
    )
}

export default ChatRecent
