import ChatAvatar from "../utilities/ChatAvatar";
function ChatContacts({src, status,name}) {
    return (
        <div className="flex sticky  items-center pl-5 py-4 pr-3 hover:bg-gray-400 cursor-pointer rounded-xl ">
            <ChatAvatar src={src} status={status} />
            <div className="ml-3">
                <h5 className="mt-0 mb-3px pr-2 text-sm text-black truncate">{name}</h5>            
            </div>
            
        </div>
    )
}

export default ChatContacts
