import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

export default async function Home() {
  const session = await auth();
  console.log(session);
  return (
    <div>
      <h1>Hello world</h1>
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type="submit">Log Out</Button>
      </form>
    </div>
  );
}
