"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const ErrorPage = ({ error }: { error: Error }) => {
  return (
    <div>
      <p>{error.message}</p>
      <Button>
        <Link href="/">Go back</Link>
      </Button>
    </div>
  );
};
export default ErrorPage;
