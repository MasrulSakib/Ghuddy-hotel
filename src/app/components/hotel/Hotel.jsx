import React from "react";
import { HeartIcon, StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import diamond from '../../assets/ion_diamond-outline.png'
import location from '../../assets/map-pin.png'
import home from '../../assets/Frame 38228.png'

const Hotel = ({ hotel }) => {
    const { thumb_image, discount_percent, property_tag, property_name, short_address, red_price, black_price, stars } = hotel;

    const handleCardClick = () => {
        console.log(`Redirecting to details of ${property_name}`);
    };

    return (
        <div className="w-[252px] lg:w-[279px]">
            <div
                onClick={handleCardClick}
                className="bg-white border border-[#DDE7EB] shadow-lg rounded-xl overflow-hidden min-h-[442px] flex-shrink-0 mb-4 cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300 transform-gpu"
            >
                <div className="relative">
                    <Image
                        src={thumb_image}
                        width={279}
                        height={205}
                        alt="Hotel"
                        className="w-full h-[205px] object-cover"
                    />
                    <div className="absolute top-2 left-0 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-r-lg flex gap-[6px]">
                        <Image className="max-h-[14px]" src={diamond} width={14} height={14} alt="diamond" />
                        -{parseInt(discount_percent)}% Off <span className="bg-white text-[#F63131] rounded-sm px-1">Deal!</span>
                    </div>
                    <div className="absolute top-2 right-2 cursor-pointer">
                        <HeartIcon className="w-6 h-6 text-red-500 hover:text-red-700" />
                    </div>
                </div>
                <div className="p-4">
                    <div className="flex justify-between items-start gap-2 mb-1">
                        <h5 className="text-[14px] lg:text-base font-semibold text-[#142B33]">{property_name}</h5>
                        <div className=" flex items-center">
                            <StarIcon className="w-5 h-5 mr-1 text-yellow-500" />
                            <strong className="mt-[2px] text-[12px] lg:text-sm text-[#142B33]">{stars.toFixed(1)}</strong>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                        <Image className="max-h-[14px]" src={location} width={14} height={14} alt={location} />
                        <p className="text-[#142B33] text-[12px] lg:text-sm">{short_address}</p>
                    </div>
                    <div className="flex items-start gap-2 mb-3">
                        <Image className="max-h-[14px]" src={home} width={14} height={14} alt={home} />
                        <p className="text-[12px] lg:text-sm text-[#142B33]">{property_tag}</p>
                    </div>
                    <div className="text-center">
                        <h5 className="text-[#142B33] font-normal text-[12px] lg:text-sm">Checkout Price:</h5>
                        <div className="flex justify-center items-center gap-1">
                            <h5 className="text-sm lg:text-base font-bold text-[#142B33]">{red_price} BDT</h5>
                            {black_price && (
                                <p className="text-[12px] lg:text-sm text-[#879FA8] text-wrap line-through">{black_price} BDT</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Hotel;
