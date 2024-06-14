import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login/login.jsx';
import Signup from '@/components/signup/signup.jsx';
import Home from '@/components/home/home.jsx';
import Layout from '@/components/common/layout/layout.jsx';
import AddContact from '@/components/contact/addContact.jsx';
import Contacts from '@/components/contact/contacts.jsx';
import Contact from '@/components/contact/contact.jsx';

function RoutesComponent(props) {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Contacts />} />
                    <Route path='addContact' element={<AddContact />} />
                    <Route path='contacts' element={<Contacts />} />
                    <Route path='contacts/:id' element={<Contact />} />
                    <Route path='contacts/update' element={<AddContact />} />
                </Route>
                <Route path="/signin" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </div>
    );
}

export default RoutesComponent;