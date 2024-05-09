import React from "react";
import { CardWrapper } from "./card-wrapper";
import { Header } from "./header";

export function LoginForm() {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonHref="/auth/register"
      backButtonLabel="Don't have an account ?"
      showSocial={true}
    >
      Hello There{" "}
    </CardWrapper>
  );
}
