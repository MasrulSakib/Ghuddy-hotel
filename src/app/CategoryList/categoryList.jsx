"use client"
import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/navbar';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const scrollRef = useRef(null);
    const isMouseDown = useRef(false);
    const startX = useRef(0);
    const scrollLeftPosition = useRef(0);

    const fetchData = async () => {
        const res = await fetch("/propertyType.json");
        const data = await res.json();
        setCategories(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleMouseDown = (e) => {
        isMouseDown.current = true;
        startX.current = e.pageX - scrollRef.current.offsetLeft;
        scrollLeftPosition.current = scrollRef.current.scrollLeft;

        document.body.style.userSelect = 'none';
    };

    const handleMouseUp = () => {
        isMouseDown.current = false;
        document.body.style.userSelect = 'auto';
    };

    const handleMouseMove = (e) => {
        if (!isMouseDown.current) return;
        e.preventDefault();

        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX.current) * 2;
        scrollRef.current.scrollLeft = scrollLeftPosition.current - walk;
    };

    return (
        <div className='container px-4 lg:px-0 mx-auto'>
            <h3 className='text-[32px] text-[#142B33] font-medium mb-[18px]'>Hotels</h3>
            <div
                ref={scrollRef}
                className='flex gap-2 lg:gap-6 overflow-x-auto scrollbar-hide scroll-smooth'
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseUp}
            >
                {
                    categories.map((category, index) => (
                        <Navbar
                            key={index}
                            category={category}
                            isSelected={selectedCategory === index}
                            onSelect={() => setSelectedCategory(index)}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default CategoryList;
