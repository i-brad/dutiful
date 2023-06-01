import React from "react";

interface SocialLinksProps {
  heading: string;
  socials: { link: string; icon: JSX.Element }[];
}

function SocialLinks({ heading, socials }: SocialLinksProps) {
  return (
    <span className="flex items-center space-x-[1.78rem]">
      <h5 className="text-t18 font-medium text-white">{heading}</h5>
      <ul className="flex items-center space-x-[1.33rem]">
        {socials.map(({ icon, link }) => (
          <li key={link} className="block">
            <a
              href={link}
              target="_blank"
              className="text-t16 block font-medium-slim text-maximum_blue_purple font-CircularStd"
              rel="noopener noreferrer"
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </span>
  );
}

export default SocialLinks;
