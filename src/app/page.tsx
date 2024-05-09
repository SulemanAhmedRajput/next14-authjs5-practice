import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center flex-col items-center min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="text-white space-y-2 text-center">
        <h1 className="text-5xl font-bold  ">Auth</h1>
        <p>A simple authentication service</p>
      </div>
      <LoginButton>
        <Button size={"lg"} variant={"secondary"} className="mt-5">
          Sign In
        </Button>
      </LoginButton>
    </div>
  );
}
