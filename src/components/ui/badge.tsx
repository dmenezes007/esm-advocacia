import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#f5af00] focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[#091f1a] text-[#ffffff] hover:bg-[#0f3028]",
        secondary:
          "border-transparent bg-[#f5af00]/25 text-[#091f1a] hover:bg-[#f5af00]/35",
        destructive:
          "border-transparent bg-[#091f1a] text-[#f5af00] hover:bg-[#0f3028]",
        outline: "text-[#091f1a] border-[#091f1a]/25",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  className?: string;
  children?: React.ReactNode;
}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
