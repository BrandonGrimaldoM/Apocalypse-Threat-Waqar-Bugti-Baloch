import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Navegation() {
  return (
    <>
      <nav className="w-full h-36 flex items-center justify-between lg:pl-14 lg:pr-60 absolute z-50">
        <ul className="text-2xl font-bold flex gap-24">
          <Link href="#">
            <li>HOME</li>
          </Link>
          <Link href="#">
            <li>ABOUT</li>
          </Link>
          <Link href="#">
            <li>PRODUCT</li>
          </Link>
        </ul>
        <div className="flex gap-3 items-center">
          <input
            type="text"
            className="bg-transparent border-b border-white outline-none"
          />
          <MagnifyingGlassIcon className="text-white w-6 h-6 cursor-pointer" />
          <div className="rounded-full w-[75px] h-[75px] overflow-hidden cursor-pointer">
            <img src="/images/zombie-avatar.png" alt="zombie-avatar " />
          </div>
        </div>
      </nav>
      

    </>
  );
}
