
import { ReactNode, useState } from 'react';

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: 'tilt' | 'scale' | 'glow';
}

const InteractiveCard = ({ children, className = '', hoverEffect = 'tilt' }: InteractiveCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePosition({ x, y });
  };

  const getTransform = () => {
    if (!isHovered) return 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    
    switch (hoverEffect) {
      case 'tilt':
        return `perspective(1000px) rotateX(${mousePosition.y * 10}deg) rotateY(${mousePosition.x * 10}deg) scale(1.02)`;
      case 'scale':
        return 'perspective(1000px) scale(1.05)';
      case 'glow':
        return 'perspective(1000px) scale(1.02)';
      default:
        return 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    }
  };

  const getBoxShadow = () => {
    if (!isHovered) return '0 4px 20px rgba(0, 0, 0, 0.1)';
    
    switch (hoverEffect) {
      case 'glow':
        return '0 20px 60px rgba(34, 211, 238, 0.4), 0 0 40px rgba(34, 211, 238, 0.2)';
      default:
        return '0 20px 40px rgba(0, 0, 0, 0.2)';
    }
  };

  return (
    <div
      className={`transition-all duration-300 ease-out ${className}`}
      style={{
        transform: getTransform(),
        boxShadow: getBoxShadow(),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  );
};

export default InteractiveCard;
