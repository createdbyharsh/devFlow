import React from "react";
import { Button } from "@/components/ui/button";

const SocialAuthForm = () => {
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className="background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 px-4 py-3.5">
        Log in with Github
      </Button>
      <Button className="background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 px-4 py-3.5">
        Log in with Google
      </Button>
    </div>
  );
};

export default SocialAuthForm;
