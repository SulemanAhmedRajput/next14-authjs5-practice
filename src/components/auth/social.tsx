import React from "react";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export function Social() {
  return (
    <div className="flex gap-x-4 w-full ">
      <Button
        className="w-full"
        variant={"outline"}
        size={"lg"}
        onClick={() => {}}
      >
        <FcGoogle size={24} />
      </Button>
      <Button
        className="w-full"
        variant={"outline"}
        size={"lg"}
        onClick={() => {}}
      >
        <FaGithub size={24} />
      </Button>
    </div>
  );
}
