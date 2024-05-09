import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: LayoutProps) {
  return (
    <div className="flex justify-center flex-col items-center min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      {children}
    </div>
  );
}
