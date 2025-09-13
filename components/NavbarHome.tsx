import Image from "next/image";
import Link from "next/link";
import LogoWhite from "public/images/logo_white.svg";
import type { itemsInterface } from "utils/Interface";

const items: itemsInterface[] = [
  {
    path: "#home",
    name: "Home",
  },
  {
    path: "#services",
    name: "services",
  },
  {
    path: "#teams",
    name: "our teams",
  },
  {
    path: "#works",
    name: "works",
  },
  {
    path: "#journals",
    name: "journals",
  },
  {
    path: "#footer",
    name: "contact use",
  },
  {
    path: "#about",
    name: "about",
  },
];

function NavbarHome() {
  return (
    <div className="navbar__bg-home absolute left-0 top-0 z-10 flex w-full items-center justify-between text-nowrap px-8 py-8">
      <Link href="/">
        <Image src={LogoWhite} alt="logo white" height={60} />
      </Link>
      <div className="flex gap-0 uppercase xl:gap-4">
        {items.map((item: itemsInterface, index: number) => {
          return (
            <Link
              key={index}
              href={item.path}
              className="bg-transparent px-4 py-2 hover:border-b xl:px-6 xl:py-4"
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default NavbarHome;
