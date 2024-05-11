import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import React from "react";

interface FormErrorProps {
  message?: string;
}

export function FormError({ message }: FormErrorProps) {
  if (!message) return null;
  return (
    <div className="p-4 bg-destructive/15 text-destructive flex gap-4 text-[14px] items-center rounded-lg">
      <ExclamationTriangleIcon className="w-4 h-4 " />
      <p>{message}</p>
    </div>
  );
}
