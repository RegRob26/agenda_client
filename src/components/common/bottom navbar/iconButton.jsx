import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

function IconButton(props) {
    const { Icon, label, path } = props;

    return (
        <div className="flex justify-center items-center w-1/3">
            <Link to={path}>
                <div className="flex flex-col items-center">
                    <Icon className='' />
                    <span className=''>{label}</span>
                </div>
            </Link>
        </div>
    );
}

export default IconButton;