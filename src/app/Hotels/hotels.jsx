"use client";
import React, { useEffect, useState, useRef } from "react";
import Hotel from "../Hotel/hotel";
import Image from "next/image";
import arrowLeft from "../assets/Line-left.png";
import arrowRight from "../assets/Line-right.png";

const Hotels = () => {
    const [hotels, setHotels] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const scrollRef = useRef(null);

    useEffect(() => {
        const getApi = async () => {
            try {
                const res = await fetch(
                    "https://ghuddy.link/api/v1/open/get/rental-property/es-deals-hotels?checkinDate=2025-02-02&checkoutDate=2025-02-04&requestId=123"
                );
                const data = await res.json();
                setHotels(data.esHotelCardList || []);
            } catch (error) {
                console.error("Error fetching hotels:", error);
            }
        };
        getApi();
    }, []);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    const indexOfLastHotel = currentPage * itemsPerPage;
    const indexOfFirstHotel = indexOfLastHotel - itemsPerPage;
    const currentHotels = hotels.slice(indexOfFirstHotel, indexOfLastHotel);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const totalPages = Math.ceil(hotels.length / itemsPerPage);

    return (
        <div className="container px-4 lg:px-0 mx-auto">
            <h3 className="text-[24px] font-medium text-[#142B33] mb-8">Top Hotels</h3>

            <div className="flex justify-between items-center">
                <button onClick={scrollLeft} className="transition">
                    <Image src={arrowLeft} width={29} height={29} alt="left-arrow" />
                </button>
                <button onClick={scrollRight} className="transition">
                    <Image src={arrowRight} width={29} height={29} alt="right-arrow" />
                </button>
            </div>

            <div className="relative">
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-6 scrollbar-hide scroll-smooth py-4 relative"
                >
                    {currentHotels.length > 0 ? (
                        currentHotels.map((hotel, index) => (
                            <div key={index} className="overflow-visible">
                                <Hotel hotel={hotel} />
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No hotels available</p>
                    )}
                </div>
            </div>

            <div className="flex justify-center pt-6 relative overflow-visible">
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-red-500 text-[#142B33] rounded-full text-sm lg:text-base mr-2 shadow-md hover:shadow-lg transition-all"
                >
                    Previous
                </button>
                <span className="self-center text-sm lg:text-base text-[#142B33]">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-red-500 text-[#142B33] rounded-full text-sm lg:text-base ml-2 shadow-md hover:shadow-lg transition-all"
                >
                    Next
                </button>
            </div>

        </div>
    );
};

export default Hotels;
