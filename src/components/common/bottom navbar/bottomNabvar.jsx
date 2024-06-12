import React from 'react';
import { Star } from 'lucide-react';
import { CirclePlus } from 'lucide-react';
import { Users } from 'lucide-react';
import IconButton from '@/components/common/bottom navbar/iconButton.jsx';



function BottomNabvar(props) {
    const manuItems = [
        { Icon: Star, label: 'Favoritos', path: '/favorites' },
        { Icon: CirclePlus, label: 'Agregar', path: '/addContact' },
        { Icon: Users, label: 'Usuarios', path: '/users' },
    ]

    return (
        <div className="">
            <nav className="fixed bottom-0 w-full py-8 flex border-t border-gray-200">
                {manuItems.map((item, index) => (
                    <IconButton Icon={item.Icon} label={item.label} path={item.path} />
                ))}
            </nav>
        </div>);
}

export default BottomNabvar;