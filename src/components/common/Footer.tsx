import MoreLinks from "@components/Footer/MoreLinks";
import SocialLinks from "@components/Footer/SocialLinks";
import Link from "next/link";
import React from "react";
import { AiFillApple } from "react-icons/ai";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { RiGooglePlayFill } from "react-icons/ri";
import Divider from "./Divider";

function Footer() {
  const socials = [
    {
      link: "https://facebook.com",
      icon: <FaFacebookF className="w-4 h-4 text-white" />,
    },
    {
      link: "https://instagram.com",
      icon: <FaInstagram className="w-5 h-5 text-white" />,
    },
    {
      link: "https://twitter.com",
      icon: <FaTwitter className="w-5 h-5 text-white" />,
    },
    {
      link: "https://youtube.com",
      icon: <FaYoutube className="w-5 h-5 text-white" />,
    },
    {
      link: "https://linkedin.com",
      icon: <FaLinkedin className="w-5 h-5 text-white" />,
    },
  ];

  const downloadPlatform = [
    {
      link: "https://applestore.com",
      icon: <AiFillApple className="w-5 h-5 text-white" />,
    },
    {
      link: "https://playstore.com",
      icon: <RiGooglePlayFill className="w-5 h-5 text-white" />,
    },
  ];
  return (
    <footer className="min-h-[23.06rem] bg-regalia px-[6rem] pt-[3.94rem]">
      <div className="flex items-stretch justify-between mb-[2.61rem]">
        <MoreLinks heading="Company" links={["about", "contact us", "faqs"]} />
        <MoreLinks
          heading="Quick links"
          links={["find services", "pricing & plans", "list your business"]}
        />
        <MoreLinks heading="Resources" links={["blog", "affiliate program"]} />
        <MoreLinks heading="More from Dutiful" links={["Dutiful jobs"]} />
      </div>
      <Divider />
      <div className="flex items-center justify-between my-[1.44rem]">
        <SocialLinks heading="Follow us" socials={socials} />
        <SocialLinks heading="Download the app" socials={downloadPlatform} />
      </div>
      <Divider />
      <div className="flex items-center space-x-[5.67rem] mt-[0.78rem]">
        <p className="text-white font-medium-slim text-t18 font-CircularStd">
          &copy; 2022 Dutiful&#174;
        </p>
        <ul className="flex items-center space-x-[1.78rem]">
          {["terms of service", "privacy policy", "disclaimer"].map((link) => (
            <li key={link} className="first-letter:capitalize">
              <Link
                className="text-t16 font-medium-slim text-maximum_blue_purple font-CircularStd"
                href={link.replace(" ", "-")}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
