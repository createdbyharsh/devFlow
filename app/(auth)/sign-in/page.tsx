"use client";
import React from "react";
import AuthForm from "@/components/forms/AuthForms";
import { SignInSchema } from "@/lib/validations";

const signIn = () => {
  return (
    <AuthForm
      formType="SIGN_IN"
      schema={SignInSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
};

export default signIn;
