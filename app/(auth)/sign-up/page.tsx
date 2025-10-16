"use client";
import React from "react";
import AuthForm from "@/components/forms/AuthForms";
import { SignUpSchema } from "@/lib/validations";

const signUp = () => {
  return (
    <AuthForm
      formType="SIGN_UP"
      schema={SignUpSchema}
      defaultValues={{ email: "", password: "", name: "", username: "" }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
};

export default signUp;
