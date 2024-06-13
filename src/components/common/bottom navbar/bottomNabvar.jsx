import React from 'react';
import { Star } from 'lucide-react';
import { CirclePlus } from 'lucide-react';
import { Users } from 'lucide-react';
import IconButton from '@/components/common/bottom navbar/iconButton.jsx';



function BottomNabvar(props) {
    const manuItems = [
        { Icon: Star, label: 'Favoritos', path: '/contacts' },
        { Icon: CirclePlus, label: 'Agregar', path: '/addContact' },
        { Icon: Users, label: 'Contactos', path: '/contacts' },
    ]

    return (
        <div className="">
            <nav className="fixed bottom-0 w-full py-8 flex border-t border-gray-200 bg-amber-50">
                {manuItems.map((item, index) => (
                    <IconButton Icon={item.Icon} label={item.label} path={item.path} />
                ))}
            </nav>
        </div>);
}

export default BottomNabvar;