import { useLogout } from "@api/authentication";
import { AuthState } from "@atoms/authenticationState";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiLoaderAlt } from "react-icons/bi";
import { useRecoilValue } from "recoil";

function Navbar() {
  const { isLoggedIn } = useRecoilValue(AuthState);
  const links = ["business directory", "features", "pricing", "blog"];
  const { isLoading, mutate } = useLogout();
  return (
    <nav className="pl-[3.58rem] pr-[2.79rem] sticky top-0 bg-white z-10 pt-[0.89rem] flex justify-between items-center">
      <Link href="/">
        <Image
          src="/dutiful.svg"
          alt="Dutiful Logo"
          width={100}
          height={45}
          priority
        />
      </Link>
      <div className="flex items-center justify-between space-x-[5.15rem]">
        <ul className="flex items-center space-x-[2.78rem] capitalize">
          {links.map((link) => (
            <li key={link}>
              <Link
                className="text-t18 font-medium-slim text-dim_gray font-CircularStd"
                href={link.replace(/ /g, "-")}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
        {isLoggedIn ? (
          <button
            className="text-accent border-2 min-w-[9.67rem] grid place-items-center rounded-md py-[0.85rem] px-[2.5rem] border-accent font-CircularStd font-medium text-t20"
            type="button"
            disabled={isLoading}
            onClick={() => mutate()}
          >
            {isLoading ? (
              <BiLoaderAlt className="animate-spin w-5 h-5" />
            ) : (
              "Log out"
            )}
          </button>
        ) : (
          <span className="flex items-center justify-between space-x-[3rem]">
            <Link
              href="/auth/login"
              className="text-space_cadet font-CircularStd font-medium text-t20"
            >
              Login
            </Link>
            <Link
              href="/auth/signup"
              className="text-accent border-2 rounded-md py-[0.85rem] px-[2.5rem] border-accent font-CircularStd font-medium text-t20"
            >
              Sign up
            </Link>
          </span>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
