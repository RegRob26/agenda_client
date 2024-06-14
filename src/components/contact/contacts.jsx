import React, { useState } from 'react';
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
import { Link, useNavigate } from 'react-router-dom';
import { getContacts } from '@/services/contacts/contacts.js';
import { DialogTrigger } from '@radix-ui/react-dialog';
import { Contact } from 'lucide-react';
import ContactInd from '@/components/contact/contact.jsx';

function Contacts(props) {
    const [contacts, setContacts] = React.useState([]);
    const [selectedContact, setSelectedContact] = useState(null);
    const [open, setOpen] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        getContacts().then((response) => {
            setContacts(response);
            console.log('contacts', response);
        });
    }, [])

    const refreshContacts = () => {
        getContacts().then((response) => {
            setContacts(response);
            console.log('contacts', response);
        });
    }



    const handleClick = (contact) => {
        setSelectedContact(contact)
        setOpen(true)
        console.log('click', contact);
    }

    return (
        <div className='md:px-20'>
            <Table className='table-auto'>
                <TableCaption >Lista de contactos.</TableCaption>
                <TableBody>
                    {contacts.map((contact) => (
                            <TableRow key={contact.contact_id} className='py-80' onClick={() => handleClick(contact)}>
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
            {selectedContact && <ContactInd _contact={selectedContact} open={open} onOpenChange={setOpen} refresh={refreshContacts}/>}
        </div>
    );
}

export default Contacts;