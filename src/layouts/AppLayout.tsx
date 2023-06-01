import { useGetUser } from "@api/authentication";
import { AuthState } from "@atoms/authenticationState";
import Footer from "@components/common/Footer";
import Navbar from "@components/common/Navbar";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";

interface Props {
  children: JSX.Element | JSX.Element[];
}

function AppLayout({ children }: Props) {
  useGetUser();
  const router = useRouter();
  const { isLoggedIn, emailVerified } = useRecoilValue(AuthState);

  useEffect(() => {
    if (isLoggedIn && router.pathname.includes("auth") && emailVerified) {
      router.push("/");
      return;
    }
  }, [isLoggedIn, router, emailVerified]);

  if (isLoggedIn && router.pathname.includes("auth") && emailVerified) {
    return <div></div>;
  }

  return (
    <div className="w-screen max-w-full min-h-screen bg-white">
      <Navbar />
      <main className="min-h-screen mb-[4.56rem]">{children}</main>
      <Footer />
    </div>
  );
}

export default AppLayout;
