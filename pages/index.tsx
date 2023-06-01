import Group1 from "@assets/Group1.svg";
import Group2 from "@assets/Group2.svg";
import Group3 from "@assets/Group3.svg";
import Group4 from "@assets/Group4.svg";
import AppLayout from "@layouts/AppLayout";
import Image from "next/image";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <AppLayout>
      <div className="px-[3.58rem]">
        <section className="flex items-start justify-between mt-[0.83rem] pt-[3.11rem] pb-[0.83rem] h-fit">
          <div className="w-full pt-[8.5rem]">
            <h1 className="text-t36 font-Recoleta font-semibold text-dark_purple max-w-[26.17rem]">
              List and grow your business with just few clicks
            </h1>
            <p className="text-t20 font-medium-slim text-onyx max-w-[31.06rem] mt-[0.89rem]">
              Eliminate manual work and save time by listing your business or
              service on the best business directory in Nigeria.
            </p>
          </div>
          <div className="w-full">
            <Image src={Group1} alt="businesses" priority />
          </div>
        </section>
        <section className="flex items-start justify-between h-fit">
          <div className="w-full">
            <Image src={Group2} alt="businesses" />
          </div>
          <div className="w-full pt-[10.5rem]">
            <h2 className="text-t36 font-Recoleta font-semibold text-space_cadet max-w-[26.78rem] mb-[0.22rem]">
              Collect reviews and ratings from customers
            </h2>
            <p className="text-t20 font-medium-slim text-dim_gray max-w-[30.94rem]">
              Accelerate your business reputation by 90% and gain social proof
              through reviews and ratings requested from customers.
            </p>
          </div>
        </section>
        <section className="h-[50.11rem] rounded-[1.33rem] bg-baby_powder grid place-items-center mb-[7.50rem]">
          <div className="w-full">
            <Image src={Group3} alt="businesses" />
          </div>
        </section>
        <section className="flex items-start justify-between">
          <div className="w-full">
            <Image src={Group4} alt="businesses" />
          </div>
          <div className="w-full pt-[2.5rem]">
            <h2 className="text-t36 font-Recoleta font-semibold text-space_cadet max-w-[26.78rem] mb-[0.22rem]">
              Accept and sell appointments
            </h2>
            <p className="text-t20 font-medium-slim text-dim_gray max-w-[30.94rem]">
              Let customers book their own appointment or consultation. Start
              accepting payments for appointments through your booking page.
            </p>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
