import React from "react";

export default function SidebarCard({ children }) {
  return (
    <div className="flex items-center p-4 space-x-10 flex-between">
      {children}
    </div>
  );
}
