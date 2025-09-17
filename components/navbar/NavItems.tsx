import Link from "next/link";

const navItems = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Products",
    href: "/products",
  },
];

const NavItems = () => {
  return (
    <ul className="hidden sm:flex flex-1 items-center gap-5">
      {navItems.map((item) => (
        <li key={item.label}>
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};
export default NavItems;
