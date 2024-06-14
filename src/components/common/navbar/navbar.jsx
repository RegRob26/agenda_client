import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Menu } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.jsx';
import { User, LogOut } from 'lucide-react';


function Navbar(props) {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()
    const menus = [
        { title: 'Contactos', path: '/contacts' },
        { title: 'Agregar', path: '/addContact' },
    ];

    const handleLogOut = () => {
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "user_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.href = '/signin';
    }

    return (
        <>
            <nav className="fixed top-0 left-0 w-full py-2 bg-gradient-to-b from-white from-50% via-gray-50 to-gray-100 z-50">
                <div className="flex items-center justify-between  mx-2 md:mx-4 ">
                    <div className="flex-shrink-0 ">
                        <Link to="/" className="text-black">
                            <h1 className="text-gray-600 hover:text-gray-950 text-xl">Directorio</h1>
                        </Link>
                    </div>
                    <div className="hidden md:block flex-grow text-center">
                        <div>

                        </div>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <div className='hidden md:block flex-1 md:pb-05 md:mt-0'>
                            <ul className="flex justify-end items-center space-y-8 md:space-x-3 md:space-y-0">
                                {menus.map((menu, index) => (
                                    <li key={index} className="text-gray-600 hover:text-indigo-600">
                                        <Link to={menu.path} className={`text-gray-600 hover:text-indigo-600 ${index === menus.length - 1 ? 'mr-4' : ''}`}>
                                            {menu.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-end items-center pb-05">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem onClick={() => navigate('/profile')} >
                                        <User className="w-4 h-4 mr-2" />
                                        Perfil
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={handleLogOut}>
                                        <LogOut className="w-4 h-4 mr-2" />
                                        Cerrar sesión
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>

                            </DropdownMenuContent>
                        </DropdownMenu>

                    </div>


                </div>

            </nav>
            <div className="h-8"></div>
        </>

    );
}

export default Navbar;