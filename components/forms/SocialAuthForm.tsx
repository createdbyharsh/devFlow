"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import ROUTES from "@/constants/routes";

const SocialAuthForm = () => {
  const handleSignIn = async (provider: "GitHub" | "Google") => {
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
        redirect: true,
      });
    } catch (error) {
      console.log(error);
      toast(error instanceof Error ? error.message : "An Error occured");
    }
  };

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button
        className="background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 px-4 py-3.5"
        onClick={() => handleSignIn("GitHub")}
      >
        Log in with Github
      </Button>
      <Button
        className="background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 px-4 py-3.5"
        onClick={() => handleSignIn("Google")}
      >
        Log in with Google
      </Button>
    </div>
  );
};

export default SocialAuthForm;
