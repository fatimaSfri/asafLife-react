import { useState } from 'react';
import Lottie from 'lottie-react';

const Icon = ({ animationData }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
     className='md:w-20 max-md:w-14 flex items-center justify-center'
    >
      <Lottie
        animationData={animationData}
        loop={isHovered} 
        play={true}  
      />
    </div>
  );
};

export default Icon;