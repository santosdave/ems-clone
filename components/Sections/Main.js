import Email from "../apps/Email";
import Chat from "../apps/Chat";
import RichTextEditor from "../utilities/RichTextEditor";
import Callendar from "../apps/Callendar";
import Ecommerce from "../apps/Ecommerce";
import Staff from "../apps/Staff";
import Customer from "../apps/Customer";
import Supplier from "../apps/Supplier";
import Product from "../apps/Product";
import ViewProduct from "../utilities/ViewProduct";
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
            {/* <Supplier/> */}
            {/* <Product/> */}
            <ViewProduct/>
        </div>
    )
}

export default Main
