import {
  SignedOut,
  SignedIn,
  UserButton,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import { Button } from "../ui/button";

const User = () => {
  return (
    <>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <div className="space-x-5">
          <SignInButton mode="modal">
            <Button>Sign in</Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button variant="outline">Sign up</Button>
          </SignUpButton>
        </div>
      </SignedOut>
    </>
  );
};
export default User;
