import React, { Fragment, useState , useEffect}  from "react";
import { Icon, Badge, Card, IconButton, Drawer, Button } from '@material-ui/core'
const NotificationDB = {
    list: [
        {
            id: "77545hj4bjbjfbrjbrbyj7r8",
            heading: 'Message',
            icon: {
                name: 'chat',
                color: 'primary',
            },
            timestamp: 1570702802573,
            title: 'New message from Devid',
            subtitle: 'Hello, Any progress...',
            path: 'chat',
        },
        {
            id: "77545hj4bjbjfr6rjbrbgjr8",
            heading: 'Alert',
            icon: {
                name: 'notifications',
                color: 'error',
            },
            timestamp: 1570702702573,
            title: 'Server overloaded',
            subtitle: 'Traffice reached 2M',
            path: 'page-layouts/user-profile',
        },
        {
            id: "77545hj4bjbjfbrjbrbgjr8",
            heading: 'Message',
            icon: {
                name: 'chat',
                color: 'primary',
            },
            timestamp: 1570502502573,
            title: 'New message from Goustove',
            subtitle: 'Hello, send me details',
            path: 'chat',
        },
    ],
}

function NotificationBar({container}) {
    let notificationList=NotificationDB.list
    const [panelOpen, setPanelOpen]= useState(false)
    const handleDrawerToggle = () => {
        setPanelOpen(!panelOpen)
    }
    return (
        <Fragment>
            <IconButton onClick={handleDrawerToggle}>
                <Badge color="primary" badgeContent={notificationList.length}>
                    <Icon>notificationsIcon</Icon>
                </Badge>
            </IconButton>
            <div>
                <Drawer
                    width={'100px'}
                    container={container}
                    variant="temporary"
                    anchor={'right'}
                    open={panelOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                >
                    <div className="flex-col  h-auto ">
                        <header className="flex items-center p-3 mb-2 pl-4 shadow-lg">
                            <Icon color="primary">notificationsIcon</Icon>
                            <h5 className="ml-2 my-0 font-medium">Notifications</h5>
                        </header>
                        <div className="relative">
                            <Card className="px-6 py-4 mb-6 mx-4" elevation={3}>
                                <div className="flex items-center justify-between p-2 bg-gray-200">

                                </div>
                            </Card>

                        </div>
                    </div>

                </Drawer>
            </div>
        </Fragment>
    )
}

export default NotificationBar
