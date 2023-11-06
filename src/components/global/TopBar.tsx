"use client";

// react components
import React from "react";
import { usePathname } from "next/navigation";

// components

// assets
import LogoSvg from "@/components/global/icons/LogoSvg";
import ArticlesSvg from "@/components/global/icons/ArticlesSvg";
import PeopleSvg from "@/components/global/./icons/PeopleSvg";
import LearningSvg from "@/components/global/./icons/LearningSvg";
import JobSvg from "@/components/global/./icons/JobsSvg";
import GetAppSvg from "@/components/global/./icons/GetAppSvg";

type Props = {};

const TopBar = (props: Props) => {
  const currentPathname = usePathname();

  if (currentPathname !== "/login") {
    return null;
  }

  return (
    <div className="h-20 w-screen flex items-center justify-center xl:pl-9 2xl:pl-0">
      <div className="h-full w-full xl:w-[85%] 2xl:w-[58.9%] flex items-center justify-between pl-3 xl:pl-0 pr-1 xl:pr-0">
        <a
          href="/login"
          className="h-[2.3rem] w-[44%] flex items-center justify-start"
        >
          <LogoSvg />
        </a>
        <div className="h-auto w-[78%] xl:w-[70%] 2xl:w-[56.5%] flex items-center justify-between">
          <div className="h-full w-[12.4%] flex flex-col items-center justify-center">
            <ArticlesSvg />
          </div>
          <div className="h-full w-[12.4%] flex flex-col items-center justify-center">
            <PeopleSvg />
          </div>
          <div className="h-full w-[12.4%] flex flex-col items-center justify-center">
            <LearningSvg />
          </div>
          <div className="h-full w-[12.4%] flex flex-col items-center justify-center">
            <JobSvg />
          </div>
          <div className="h-full w-1/6 flex flex-col items-center justify-center border-x border-slate-200">
            <GetAppSvg />
          </div>
          <div className="h-full w-auto flex items-center justify-center gap-2 ml-[0.7rem]">
            <a href="https://www.linkedin.com/signup?trk=guest_homepage-basic_nav-header-join">
              <button
                type="button"
                className="joinNow h-[3rem] w-[7rem] font-semibold rounded-3xl hover:bg-[#f5f5f5]"
              >
                Join now
              </button>
            </a>
            <a href="https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin">
              <button
                type="button"
                className=" h-[3.2rem] w-[6.4rem] text-[#0a66c2] font-semibold border-[0.1rem] border-[#1d5791] rounded-3xl hover:bg-[#0a66c2]/5"
              >
                Sign in
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
