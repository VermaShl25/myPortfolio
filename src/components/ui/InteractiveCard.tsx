import { ReactNode, useState, CSSProperties } from "react";

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: "tilt" | "scale" | "glow";
  style?: CSSProperties;
}

const InteractiveCard = ({
  children,
  className = "",
  hoverEffect = "tilt",
  style,
}: InteractiveCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePosition({ x, y });
  };

  const getTransform = () => {
    if (!isHovered)
      return "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";

    switch (hoverEffect) {
      case "tilt":
        return `perspective(1000px) rotateX(${
          mousePosition.y * 10
        }deg) rotateY(${mousePosition.x * 10}deg) scale(1.02)`;
      case "scale":
        return "perspective(1000px) scale(1.05)";
      case "glow":
        return "perspective(1000px) scale(1.02)";
      default:
        return "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    }
  };

  const baseStyles: CSSProperties = {
    transform: getTransform(),
    position: "relative",
    ...style,
  };

  if (hoverEffect === "glow" && isHovered) {
    baseStyles.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
    baseStyles.isolation = "isolate";
  } else {
    baseStyles.boxShadow = isHovered
      ? "0 20px 40px rgba(0, 0, 0, 0.2)"
      : "0 4px 20px rgba(0, 0, 0, 0.1)";
  }

  return (
    <div
      className={`transition-all duration-300 ease-out ${className} ${
        hoverEffect === "glow"
          ? "before:absolute before:inset-[-2px] before:rounded-[inherit] before:transition-all before:duration-300 before:z-[-1] before:opacity-0 hover:before:opacity-100 before:bg-cyan-400/30 before:blur-xl"
          : ""
      }`}
      style={baseStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  );
};

export default InteractiveCard;
