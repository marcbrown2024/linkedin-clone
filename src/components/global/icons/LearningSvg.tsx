// react components
import React from "react";

type Props = {};

const LearningSvg = (props: Props) => {
  return (
    <a
      href="https://www.linkedin.com/learning/search?trk=guest_homepage-basic_guest_nav_menu_learning"
      className="group h-full w-full flex flex-col items-center justify-center"
    >
      <div className="h-full w-[45%] flex items-center justify-center text-[#000000a3] group-hover:text-[#000]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28 20"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23 3H1a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1ZM2 19h20V5H2v14Z"
            fill="currentColor"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4 9h6V7H4v2Zm0 4h6v-2H4v2Zm0 4h6v-2H4v2Zm-2 2h10V5H2v14Z"
            fill="currentColor"
            fill-opacity=".25"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14 9h6V7h-6v2Zm0 4h6v-2h-6v2Zm6 4h-6v-2h6v2Z"
            fill="currentColor"
            fill-opacity=".6"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 7.534v8.933a.28.28 0 0 0 .439.23l6.433-4.436A.307.307 0 0 0 17 12a.305.305 0 0 0-.128-.26l-6.433-4.437a.28.28 0 0 0-.439.23Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <span className="loginIcons h-full group-hover:text-[#000000e2]">Learning</span>
    </a>
  );
};

export default LearningSvg;
