import React from "react";
import { cn } from "@/lib/utils";
export default function Par({ children, className }) {
  return (
    <p className={cn(className, "leading-7 [&:not(:first-child)]:mt-6")}>
      {children}
    </p>
  );
}
