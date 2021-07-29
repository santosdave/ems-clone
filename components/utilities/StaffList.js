import React, {useState, useEffect, useCallback}from 'react'
import {
    
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    
    TablePagination,
} from '@material-ui/core';
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
const staffList = [
    {
        id: 'bhu54886668888jkjkgnu',
        src: 'https://m.media-amazon.com/images/I/',
        phoneNumber:"0787654321",
        name: 'Wycliffe Odhiambo',
        email: 'Santosdave@gmail.com',
        streetAddress: 'ruiru',
        postCode: '0 0232',
        designation: "IT Technician",
        department: 'ICT',
        city: 'Kiambu',
        country: 'Kenya',
        
    },
    {
        id: 'bhu54886668888jff5gnu',
        src: 'https://m.media-amazon.com/images/I/',
        phoneNumber:"0787654321",
        name: 'Beatrice Wanjiku',
        email: 'Beatrice@gmail.com',
        streetAddress: 'kitengela',
        postCode: '0 0232',
        designation: "Product manager",
        department: 'Marketing',
        city: 'Kitengela',
        country: 'Kenya',
    },
    {
        id: 'bhu548865yh8888jkjkgnu',
        src: 'https://m.media-amazon.com/images/I/',
        phoneNumber:"0787654321",
        name: 'Brian Wafula',
        email: 'Brian@gmail.com',
        streetAddress: 'rongai',
        postCode: '0 0232',
        designation: "IT Technician",
        department: 'ICT',
        city: 'Rongai',
        country: 'Kenya',
    },
    {
        id: 'bhu5488666887ujijkjkgnu',
        src: 'https://m.media-amazon.com/images/I/',
        phoneNumber:"0787654321",
        name: 'Beatrice  Adera',
        email: 'Adera@gmail.com',
        streetAddress: 'westlands',
        postCode: '0 0232',
        designation: "Project manager",
        department: 'ICT',
        city: 'Nairobi',
        country: 'Kenya',
    },
    {
        id: 'bhu54ert668888jkjkgnu',
        src: 'https://m.media-amazon.com/images/I/',
        phoneNumber:"0787654321",
        name: 'Amadi Allela',
        email: 'Amadi@gmail.com',
        streetAddress: 'kijabe',
        postCode: '0 0232',
        designation: "IT Manager",
        department: 'ICT',
        city: 'Nairobi',
        country: 'Kenya',
    },
    {
        id: 'bhu548866688886gtgkgnu',
        src: 'https://m.media-amazon.com/images/I/',
        phoneNumber:"0787654321",
        name: 'Wycliffe Odhiambo',
        email: 'Santosdave@gmail.com',
        streetAddress: 'ruiru',
        postCode: '0 0232',
        designation: "IT Technician",
        department: 'ICT',
        city: 'Kiambu',
        country: 'Kenya',
    },
    {
        id: 'bhujuy8886668888jkjkgnu',
        src: 'https://m.media-amazon.com/images/I/',
        phoneNumber:"0787654321",
        name: 'Wycliffe Odhiambo',
        email: 'Santosdave@gmail.com',
        streetAddress: 'ruiru',
        postCode: '0 0232',
        designation: "IT Technician",
        department: 'ICT',
        city: 'Kiambu',
        country: 'Kenya',
    },
    {
        id: 'bhu54jiik6668888jkjkgnu',
        src: 'https://m.media-amazon.com/images/I/',
        phoneNumber:"0787654321",
        name: 'Wycliffe Odhiambo',
        email: 'Santosdave@gmail.com',
        streetAddress: 'ruiru',
        postCode: '0 0232',
        designation: "IT Technician",
        department: 'ICT',
        city: 'Kiambu',
        country: 'Kenya',
    },
    {
        id: 'bhu54y6yy668888jkjkgnu',
        src: 'https://m.media-amazon.com/images/I/',
        phoneNumber:"0787654321",
        name: 'Wycliffe Odhiambo',
        email: 'Santosdave@gmail.com',
        streetAddress: 'ruiru',
        postCode: '0 0232',
        designation: "IT Technician",
        department: 'ICT',
        city: 'Kiambu',
        country: 'Kenya',
    },
]
function StaffList() {
    const[rowsPerPage, setRowsPerPage]= useState(5);
    const [page , setPage] = useState(0)
    const handleChangePage=(e,newPage) => {
        setPage(newPage)
    }
    const handleChangeRowsPerPage=(e)=>{
        setRowsPerPage(+e.target.value)
        setPage(0)
    }
    return (
        <div className=" flex-grow w-full bg-white overflow-auto">
            <Table className="whitespace-pre">
                <TableHead>
                    <TableRow>
                        <TableCell className="px-0">Name</TableCell>
                        <TableCell className="px-0 ">Designation</TableCell>
                        <TableCell className="px-0">Department</TableCell>
                        <TableCell className="px-0">Address</TableCell>
                        <TableCell className="px-0">City</TableCell>
                        <TableCell className="px-0">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {staffList.slice(page *rowsPerPage, page * rowsPerPage + rowsPerPage).
                    map((staff)=>(
                        <TableRow key={staff.id} >
                                <TableCell
                                    className="px-0"
                                    align="left"
                                >   
                                    <div className="flex items-center">
                                       <img src="https://media-exp3.licdn.com/dms/image/C4D03AQFaYwtIZ5k53g/profile-displayphoto-shrink_800_800/0/1622195469007?e=1632355200&v=beta&t=24cvGNubyys3-JrSg5kB9FYqbRV4dOeGOH5T5MmdD-0" height="40" width="40" alt="" className="object-contain rounded-full"/> 
                                       <div className=" ml-1 flex-col item-center ">
                                           <p className="text-sm font-semibold break-all ...">{staff.name}</p>
                                           <p className="bg-gray-300 text-xs break-all ...">{staff.email}</p>
                                           <p className="bg-gray-300 text-xs break-all ...">{staff.phoneNumber}</p>
                                       </div>
                                    </div>
                                    
                                </TableCell>
                                <TableCell
                                    className="px-0 capitalize"
                                    align="left"
                                >
                                    {staff.designation}
                                </TableCell>
                                <TableCell
                                    className="px-0 capitalize"
                                    align="left"
                                >
                                   {staff.department}
                                </TableCell>
                                <TableCell className="px-0 capitalize">
                                   {staff.streetAddress}
                                </TableCell>
                                <TableCell className="px-0 capitalize">
                                   {staff.city}
                                </TableCell>
                                <TableCell className="px-0">
                                    <div className="flex items-center justify-between">
                                            <Button
                                            color="gray"
                                            buttonType="outline"
                                            rounded={true}
                                            iconOnly={true}
                                            ripple={"dark"}
                                            className="sm:hidden md:inline-flex h-10 w-10 border-0"
                                            >
                                                <Icon name="edit"  color="blue" size="2xl"/>
                                        </Button>
                                        <Button
                                            color="gray"
                                            buttonType="outline"
                                            rounded={true}
                                            iconOnly={true}
                                            ripple={"dark"}
                                            className="sm:hidden md:inline-flex h-10 w-10 border-0"
                                            >
                                                <Icon name="east"  color="blue" size="2xl"/>
                                        </Button>
                                        <Button
                                            color="gray"
                                            buttonType="outline"
                                            rounded={true}
                                            iconOnly={true}
                                            ripple={"dark"}
                                            className="sm:hidden md:inline-flex h-10 w-10 border-0"
                                            >
                                                <Icon name="close"  color="blue" size="2xl"/>
                                        </Button>
                                            
                                    </div>
                                
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
            <TablePagination
                className="px-4"
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={15}
                rowsPerPage={rowsPerPage}
                page={page}
                backIconButtonProps={{
                    'aria-label': 'Previous Page',
                }}
                nextIconButtonProps={{
                    'aria-label': 'Next Page',
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />   
        </div>
    )
}

export default StaffList
