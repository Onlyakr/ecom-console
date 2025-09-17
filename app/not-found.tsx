import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Button>
        <Link href="/">Go back</Link>
      </Button>
    </div>
  );
};
export default NotFoundPage;
