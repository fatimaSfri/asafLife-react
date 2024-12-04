import React, { useState } from 'react';

const HoverImage = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="relative w-64 h-64 overflow-hidden" 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <img 
                src="your-image-url.jpg" 
                alt="Sample" 
                className="w-full h-full object-cover"
            />
            <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 transition-transform duration-300 ${isHovered ? 'translate-x-0' : '-translate-x-full'} bg-white p-2`}>
                Element Left
            </div>
            <div className={`absolute right-0 top-1/2 transform -translate-y-1/2 transition-transform duration-300 ${isHovered ? 'translate-x-0' : 'translate-x-full'} bg-white p-2`}>
                Element Right
            </div>
        </div>
    );
};

export default HoverImage;