import Email from "../apps/Email"
import Chat from "../apps/Chat"
import RichTextEditor from "../utilities/RichTextEditor"
import Callendar from "../apps/Callendar"
import Ecommerce from "../apps/Ecommerce"
import Staff from "../apps/Staff"
import Customer from "../apps/Customer"
function Main() {
    return (
        <div className="container justify-between">
            {/* <Email/> */}
            {/* <RichTextEditor/> */}
            {/* <Chat/> */}
            {/* <Callendar/> */}
            {/* <Ecommerce/> */}
            {/* <Staff/> */}
            <Customer/>
        </div>
    )
}

export default Main
