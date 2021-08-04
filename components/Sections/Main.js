import Email from "../../pages/Email";
import Chat from "../../pages/Chat";
/* import RichTextEditor from "../utilities/RichTextEditor";
import Callendar from "../../pages/Callendar"; */
import Ecommerce from "../../pages/Ecommerce";
import Staff from "../../pages/Staff";
import Customer from "../../pages/Customer";
import Supplier from "../../pages/Supplier";
import Product from "../../pages/Product";
import ViewProduct from "../utilities/ViewProduct";
import React from "react";
import { Router, Switch, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';


function Main() {
    const history = createMemoryHistory();
    return (
        <div className="container justify-between">
            
        <Router history={history}>
            <Switch>
                    
                    {/* <Route exact path='/text-editor' component={RichTextEditor} /> */}
                    <Route exact path='/chat'>
                        <Chat/>
                    </Route>
                    {/* <Route exact path='/calendar' component={Callendar} /> */}
                    <Route  path='/ecommerce'>
                        <Ecommerce/>
                    </Route>
                    <Route exact path='/staff'>
                        <Staff/>
                    </Route>
                    <Route exact path='/customer'>
                        <Customer/>
                    </Route>
                    <Route exact path='/supplier'>
                        <Supplier/>
                    </Route>
                    <Route exact path='/product'>
                        <Product/>
                    </Route>
                    <Route exact path='/view-product'>
                        <ViewProduct/>
                    </Route>
                    <Route  path='/'>
                        <Email/>
                    </Route>
            </Switch>
        </Router>
            
                
        </div>
    )
}

export default Main
