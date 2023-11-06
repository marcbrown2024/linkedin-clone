// react components
import React from "react";

type Props = {};

const GetAppSvg = (props: Props) => {
  return (
    <a
      href="ms-windows-store://pdp/?ProductId=9WZDNCRFJ4Q7&mode=mini&cid=guest_nav_upsell&trk=guest_homepage-basic_guest_nav_menu_windows"
      className="group h-full w-auto flex flex-col items-center justify-center"
    >
      <div className="h-full w-[41%] flex items-center justify-center text-[#000000a3] group-hover:text-[#000]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 22"
          fill="currentColor"
        >
          <path d="M21 17V8c0-1.66-1.34-3-3-3H6C4.34 5 3 6.34 3 8v9H1v1c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-1h-2zM11 6h2v1h-2V6zm8 11h-5c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1H5V9c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v8z"></path>
        </svg>
      </div>
      <span className="loginIcons h-full group-hover:text-[#000000e2]">Get the app</span>
    </a>
  );
};

export default GetAppSvg;
