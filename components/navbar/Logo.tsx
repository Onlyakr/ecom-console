// import Image from "next/image";
import Link from "next/link";
// import logo from "@/public/gaming.png";

const Logo = () => {
  return (
    <Link href="/">
      {/* <Image
        src={logo}
        alt="logo"
        width={45}
        height={45}
        className="bg-foreground rounded-full p-1"
      /> */}
      <h1 className="text-2xl font-bold">Logo</h1>
    </Link>
  );
};
export default Logo;
