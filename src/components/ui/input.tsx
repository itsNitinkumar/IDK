"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "motion/react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const radius = 100; // change this to increase the rdaius of the hover effect
    const [visible, setVisible] = React.useState(false);

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }
    return (
      <motion.div
        style={{
          background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          hsl(var(--primary)),
          transparent 80%
        )
      `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="group/input rounded-lg p-[2px] transition duration-300"
      >
        <input
          type={type}
          className={cn(
            `flex h-10 w-full rounded-md border-none bg-white px-3 py-2 text-sm text-foreground 
            transition duration-400 file:border-0 file:bg-transparent file:text-sm file:font-medium 
            placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 
            focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50
            hover:bg-secondary/5 focus:bg-secondary/10`,
            className,
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  },
);
Input.displayName = "Input";

export { Input };
