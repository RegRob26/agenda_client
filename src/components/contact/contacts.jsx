import React from 'react';
import { useEffect } from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { getContacts } from '@/services/contacts/contacts.js';

function Contacts(props) {
    const [contacts, setContacts] = React.useState([]);

    useEffect(() => {
        getContacts().then((response) => {
            setContacts(response);
            console.log('contacts', response);
        });
    }, [])

    return (
        <div className='md:px-20'>
            <Table className='table-auto'>
                <TableCaption >Lista de contactos.</TableCaption>
                <TableBody>
                    {contacts.map((contact) => (
                        <TableRow key={contact.contact_id} className='py-80'>
                            <TableCell className="font-medium text-center">
                                {contact.first_name}
                            </TableCell>
                            <TableCell className='font-medium'>
                                {contact.last_name}
                            </TableCell>
                            <TableCell>
                                <div className=''>
                                    {contact.phones.map((phone) => (
                                        <div key={phone.phone_id} className='m-0'>
                                            {phone.phone_number}
                                        </div>
                                    ))}
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default Contacts;