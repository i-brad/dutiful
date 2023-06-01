import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  const links = ["business directory", "features", "pricing", "blog"];
  return (
    <nav className="pl-[3.58rem] pr-[2.79rem] pt-[0.89rem] flex justify-between items-center">
      <Link href="/">
        <Image
          src="/dutiful.svg"
          alt="Dutiful Logo"
          width={107}
          height={48}
          priority
        />
      </Link>
      <div className="flex items-center justify-between space-x-[5.15rem]">
        <ul className="flex items-center space-x-[2.78rem] capitalize">
          {links.map((link) => (
            <li key={link}>
              <Link
                className="text-t18 font-medium-slim text-dim_gray font-CircularStd"
                href={link.replace(/" "/g, "-")}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <span className="flex items-center justify-between space-x-[3rem]">
          <Link
            href="/auth/login"
            className="text-space_cadet font-CircularStd font-medium text-t20"
          >
            Login
          </Link>
          <Link
            href="/auth/signup"
            className="text-accent border-2 rounded-md py-[0.90rem] px-[2.89rem] border-accent font-CircularStd font-medium text-t20"
          >
            Sign up
          </Link>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
