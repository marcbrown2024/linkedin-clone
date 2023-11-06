// react components
import React from "react";

type Props = {};

const PeopleSvg = (props: Props) => {
  return (
    <a
      href="https://www.linkedin.com/pub/dir/+/+?trk=guest_homepage-basic_guest_nav_menu_people"
      className="group h-full w-full flex flex-col items-center justify-center"
    >
      <div className="h-full w-[32%] flex items-center justify-center text-[#000000a3] group-hover:text-[#000]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="M9 14v6H0v-6c0-1.7 1.3-3 3-3h3c1.7 0 3 1.3 3 3Zm5.5-3c1.9 0 3.5-1.6 3.5-3.5S16.4 4 14.5 4 11 5.6 11 7.5s1.6 3.5 3.5 3.5Zm1 2h-2c-1.4 0-2.5 1.1-2.5 2.5V20h7v-4.5c0-1.4-1.1-2.5-2.5-2.5ZM4.5 0C2 0 0 2 0 4.5S2 9 4.5 9 9 7 9 4.5 7 0 4.5 0Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <span className="loginIcons h-full group-hover:text-[#000000e2]">People</span>
    </a>
  );
};

export default PeopleSvg;
