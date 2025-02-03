import Image from 'next/image';
import React from 'react';

const Navbar = ({ category, isSelected, onSelect }) => {
    const { label, iconUrl } = category;

    return (
        <div
            className={`w-[64px] lg:w-[78.18px] p-2 flex flex-col items-center gap-1 cursor-pointer ${isSelected ?
                'text-red-500 underline underline-offset-4 decoration-2 drop-shadow-xl' :
                'text-[#142B33]'
                } rounded-lg transition-colors duration-200 ${isSelected ? 'scale-110' : 'scale-100'
                }`}
            onClick={onSelect}
        >
            <Image width={20} height={20} src={iconUrl} alt={label} />
            <h4 className='text-center text-[12px] font-medium'>
                {label}
            </h4>
        </div>
    );
};

export default Navbar;
