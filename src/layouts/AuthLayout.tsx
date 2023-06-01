import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import React from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

function AuthLayout({ children }: Props) {
  return (
    <div className="bg-white min-h-screen w-screen max-w-full">
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}

export default AuthLayout;
