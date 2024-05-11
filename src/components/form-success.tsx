import { CheckCircledIcon } from "@radix-ui/react-icons";
import React from "react";

interface FormSuccessProps {
  message?: string;
}

export function FormSuccess({ message }: FormSuccessProps) {
  if (!message) return null;
  return (
    <div className="p-4 bg-emerald-500/15 text-emerald flex gap-4 text-[14px] items-center rounded-lg">
      <CheckCircledIcon className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
}
