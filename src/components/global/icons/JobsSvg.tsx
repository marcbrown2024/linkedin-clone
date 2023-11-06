// react components
import React from "react";

type Props = {};

const JobSvg = (props: Props) => {
  return (
    <a
      href="https://www.linkedin.com/jobs/search?trk=guest_homepage-basic_guest_nav_menu_jobs"
      className="group h-full w-full flex flex-col items-center justify-center"
    >
      <div className="h-full w-[32%] flex items-center justify-center text-[#000000a3] group-hover:text-[#000]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M15 4V3c0-1.7-1.3-3-3-3H8C6.3 0 5 1.3 5 3v1H0v4c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V4h-5ZM7 3c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v1H7V3Zm10 9c1.2 0 2.3-.5 3-1.4V15c0 1.7-1.3 3-3 3H3c-1.7 0-3-1.3-3-3v-4.4c.7.9 1.8 1.4 3 1.4h14Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <span className="loginIcons h-full group-hover:text-[#000000e2] -my-1">Jobs</span>
    </a>
  );
};

export default JobSvg;
