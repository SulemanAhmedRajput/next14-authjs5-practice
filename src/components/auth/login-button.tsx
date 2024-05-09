"use client";

import { Chilanka } from "next/font/google";
import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  model?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({
  children,
  model = "redirect",
  asChild,
}: LoginButtonProps) => {
  const router = useRouter();
  const onClick = async () => {
    router.push("/auth/login");
  };

  if (model == "modal") {
    return <span>Todo: Implementing Model</span>;
  }

  return (
    <span className="cursor-pointer" onClick={onClick}>
      {children}
    </span>
  );
};
