import Link from "next/link";

interface MoreLinksProps {
  heading: string;
  links: string[];
}

const MoreLinks = ({ heading, links }: MoreLinksProps) => {
  return (
    <span>
      <h4 className="text-white text-t22 font-medium mb-[1.33rem]">
        {heading}
      </h4>
      <ul>
        {links.map((link) => (
          <li
            key={link}
            className="block mb-[0.61rem] last-of-type:mb-0 first-letter:capitalize"
          >
            <Link
              className="text-t16 font-medium-slim text-maximum_blue_purple font-CircularStd"
              href={`/${link.replace(/ /g, "-").replace(/&/g, "")}`}
            >
              {link === "faqs" ? "FAQs" : link}
            </Link>
          </li>
        ))}
      </ul>
    </span>
  );
};

export default MoreLinks;
