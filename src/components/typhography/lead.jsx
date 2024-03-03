import React from "react";
import { cn } from "@/lib/utils";
export default function Lead({ children, className }) {
  return (
    <p className={cn(className, "text-xl text-muted-foreground")}>{children}</p>
  );
}
