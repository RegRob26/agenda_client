import React from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import { MoveRight } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog.jsx';

function ContactInd({ _contact, open, onOpenChange }) {
    //const { state } = useLocation();
    //const contact = state.contact;
    const contact = _contact
    const contactShow = {...contact}

    delete contactShow.user_id
    delete contactShow.contact_id
    delete contactShow.image_link
    delete contactShow.is_favorite
    delete contactShow.phones
    delete contactShow.emails

    const mapLabel = {
        'Work': 'Trabajo',
    }

    console.log('contactcra', contact);
    return (
        <div className="flex justify-center items-center ">
            <Dialog className="w-[500px]" open={open} onOpenChange={onOpenChange} >
                <DialogContent>
                    <DialogHeader className="flex items-center">
                        <DialogTitle>
                            {Object.keys(contactShow).map(key => (
                                <span>
                                {contact[key].toString()} {' '}
                            </span>
                            ))}
                        </DialogTitle>
                    </DialogHeader>
                        <div>
                            <div>
                                <p>Telefonos</p>
                                <div>
                                    {Object.keys(contact.phones).map(key => (
                                        <span>
                                        {contact.phones[key].phone_number}  <MoveRight style={{display: 'inline-block'}}/> {contact.phones[key].phone_type === 'Work' ? 'Trabajo' : 'Personal'}
                                        </span>
                                    ))
                                    }

                                </div>
                            </div>
                            <div className='pt-8'>
                                <p>Emails</p>
                                {
                                    Object.keys(contact.emails).map(key => (
                                        <span>
                                  {contact.emails[key].email} <MoveRight style={{display: 'inline-block'}}/> {contact.emails[key].email_type === 'Work' ? 'Trabajo' : 'Personal'}
                              </span>
                                    ))
                                }
                            </div>
                        </div>
                    <DialogFooter className="flex justify-between">
                        <Button variant="outline">Regresar</Button>
                        <Button>Editar</Button>
                    </DialogFooter>
                </DialogContent>

            </Dialog>
        </div>
    );
}

export default ContactInd;