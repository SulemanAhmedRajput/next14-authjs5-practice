import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import React from "react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

export function Header({ label }: HeaderProps) {
  return (
    <div className="w-full  flex flex-col items-center justify-center gap-y-4">
      <h1 className={cn("text-3xl font-semibold", font.className)}>Auth</h1>
      <p>{label}</p>
    </div>
  );
}
