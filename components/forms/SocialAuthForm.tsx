"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const SocialAuthForm = () => {
  const handleSignIn = async (provider: "github" | "google") => {
    try {
      throw new Error("Not implemented");
    } catch (error) {
      console.log(error);
      toast(error instanceof Error ? error.message : "An Error occured");
    }
  };

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button
        className="background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 px-4 py-3.5"
        onClick={() => handleSignIn("github")}
      >
        Log in with Github
      </Button>
      <Button
        className="background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 px-4 py-3.5"
        onClick={() => handleSignIn("google")}
      >
        Log in with Google
      </Button>
    </div>
  );
};

export default SocialAuthForm;
