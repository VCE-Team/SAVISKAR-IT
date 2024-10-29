import React from "react";
import { cn } from "../../lib/utils";

interface AnimatedGradientTextProps extends React.HTMLAttributes<HTMLDivElement> {}

const AnimatedGradientText: React.FC<AnimatedGradientTextProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "bg-size animate-bg-position bg-gradient-to-r from-yellow-500 from-30% via-yellow-700 via-50% to-pink-500 to-80% bg-[length:200%_auto] bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedGradientText;