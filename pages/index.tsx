import AppLayout from "@layouts/AppLayout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <AppLayout>
      <section
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      ></section>
    </AppLayout>
  );
}
