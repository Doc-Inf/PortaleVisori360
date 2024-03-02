import { cn } from "@/lib/utils";
import React from "react";

export default function TextLG({ children, className }) {
  return (
    <h2
      className={cn(
        "pb-2 text-3xl font-semibold tracking-tight scroll-m-20 first:mt-0",
        className
      )}
    >
      {children}
    </h2>
  );
}
