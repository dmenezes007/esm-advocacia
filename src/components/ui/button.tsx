import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Since I don't have cva installed, I'll just use a simpler approach or install cva.
// Actually, cva is great for variants. Let me install it quickly or just write a simple variant handler.
// I'll stick to a simple variant handler to avoid installing another package if not strictly necessary, 
// but cva is standard in shadcn-like setups. I'll just use a switch or object map for now to keep it simple.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "destructive" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const variants = {
      default: "bg-[#091f1a] text-[#ffffff] hover:bg-[#0f3028] shadow-sm",
      destructive: "bg-[#091f1a] text-[#f5af00] hover:bg-[#0f3028] shadow-sm",
      outline: "border border-[#091f1a]/25 bg-[#ffffff] hover:bg-[#f5af00]/20 hover:text-[#091f1a]",
      secondary: "bg-[#f5af00]/20 text-[#091f1a] hover:bg-[#f5af00]/35",
      ghost: "hover:bg-[#f5af00]/20 hover:text-[#091f1a]",
      link: "text-[#091f1a] underline-offset-4 hover:underline",
    };

    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    };

    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5af00] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
