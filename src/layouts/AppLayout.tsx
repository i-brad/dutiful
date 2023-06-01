import Footer from "@components/common/Footer";
import Navbar from "@components/common/Navbar";
import React from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

function AppLayout({ children }: Props) {
  return (
    <div className="w-screen max-w-full min-h-screen bg-white">
      <Navbar />
      <main className="min-h-screen mb-[4.56rem]">{children}</main>
      <Footer />
    </div>
  );
}

export default AppLayout;
