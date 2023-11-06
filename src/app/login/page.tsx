"use client";

// react components
import React, { useEffect, useState } from "react";

// components
import FooterLogo1 from "@/components/global/icons/FooterLogo1";
import FooterLogo2 from "@/components/global/icons/FooterLogo2";
import SignInForm from "@/components/login/SignInForm";

// icons
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

type Props = {};

const Page = (props: Props) => {
  const [showPopUP, setPopUP] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setPopUP(true);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const togglePopUp = () => {
    setPopUP(false);
  };
  return (
    <>
      <main className="relative h-auto w-full flex flex-col items-center justify-between">
        <SignInForm />
        <div
          className={`getAppPopup fixed bottom-6 right-6 h-[11.8rem] w-[22.5rem] flex flex-col items-start justify-center gap-3 bg-[#F1F8FA] p-4 rounded-lg opacity 0 ${
            showPopUP ? "opacity-90 duration-700" : "opacity-0"
          } transition-opacity`}
        >
          <div className="w-full flex items-center justify-between pr-2">
            <span className="flex items-center justify-center gap-1 text-xs -ml-1">
              <BiLogoLinkedinSquare className="text-3xl text-[#0a66c2] -mb-1" />
              <h4>LINKEDIN</h4>
            </span>
            <button type="button" onClick={togglePopUp}>
              <AiOutlineClose />
            </button>
          </div>
          <h2 className="-mb-1">Get the new LinkedIn Windows app</h2>
          <p className="mb-1">
            Everything you love about LinkedIn - now in a desktop app designed
            for Windows users like you.
          </p>
          <button
            type="button"
            className="h-[2rem] w-[6.4rem] text-sm text-[#0a66c2] font-semibold border-[0.1rem] border-[#1d5791] rounded-3xl hover:bg-[#0a66c2]/5"
          >
            <a href="ms-windows-store://pdp/?ProductId=9WZDNCRFJ4Q7&mode=mini&cid=guest_desktop_upsell_home2">
              Get the app
            </a>
          </button>
        </div>
        {/* <section className="h-full w-full border border-orange-600">
          <div>
            <h1>Explore collaborative articles</h1>
          </div>
          <div>
            <h1>Find the right job or internship for you</h1>
          </div>
        </section>
        <section className="h-full w-full border border-orange-600">
          <h1>Post your job for millions of people to see</h1>
        </section>
        <section className="h-full w-full border border-orange-600">
          <h1>Discover the best software tools</h1>
        </section>
        <section className="h-full w-full border border-orange-600">
          <h1>Let the right people know you&apos;re open to work</h1>
        </section>
        <section className="h-full w-full border border-orange-600">
          <div>
            <h1>Connect with people who can help</h1>
          </div>
          <div>
            <h1>Learn the skills you need to succeed</h1>
          </div>
        </section>
        <section className="h-full w-full border border-orange-600">
          <h1>Who is LinkedIn for?</h1>
        </section> */}
        {/* <section className="h-full w-full border border-orange-600">
          <h1>Join your colleagues, classmates, and friends on LinkedIn.</h1>
        </section> */}
        <footer className="relative h-[80%] w-full flex flex-col items-center justify-center">
          <div className="absolute top-0 -z-50 h-[84%] w-full flex items-start justify-center bg-[#f3f2f0]"></div>
          <div className="h-auto w-[60%] flex items-start justify-center py-6">
            <div className="h-full w-[23.5%]">
              <FooterLogo1 />
            </div>
            <div className="h-full w-full flex flex-col items-start">
              <h3 className="footerH3">General</h3>
              <ul>
                <li className="footerli">Sign Up</li>
                <li className="footerli">Help Center</li>
                <li className="footerli">About</li>
                <li className="footerli">Press</li>
                <li className="footerli">Blog</li>
                <li className="footerli">Careers</li>
                <li className="footerli">Developers</li>
              </ul>
            </div>
            <div className="h-full w-full flex flex-col items-start">
              <h3 className="footerH3">Browse LinkedIn</h3>
              <ul>
                <li className="footerli">Learning</li>
                <li className="footerli">Jobs</li>
                <li className="footerli">Salary</li>
                <li className="footerli">Mobile</li>
                <li className="footerli">Services</li>
                <li className="footerli">Products</li>
                <li className="footerli">Top Companies Hub</li>
              </ul>
            </div>
            <div className="h-full w-full flex flex-col items-start">
              <h3 className="footerH3">Business Solutions</h3>
              <ul>
                <li className="footerli">Talent</li>
                <li className="footerli">Marketing</li>
                <li className="footerli">Sales</li>
                <li className="footerli">Learning</li>
              </ul>
            </div>
            <div className="h-full w-full flex flex-col items-start">
              <h3 className="footerH3">Directories</h3>
              <ul>
                <li className="footerli">Members</li>
                <li className="footerli">Jobs</li>
                <li className="footerli">Companies</li>
                <li className="footerli">Featured</li>
                <li className="footerli">Learning</li>
                <li className="footerli">Posts</li>
                <li className="footerli">Articles</li>
                <li className="footerli">Schools</li>
                <li className="footerli">News</li>
                <li className="footerli">News Letters</li>
                <li className="footerli">Services</li>
                <li className="footerli">Products</li>
                <li className="footerli">Advice</li>
                <li className="footerli">People Search</li>
              </ul>
            </div>
          </div>
          <div className="h-16 w-[60%] flex flex-col items-center justify-center">
            <ul className="h-full w-full flex items-start justify-start gap-[1.15rem]">
              <li className="-mr-5">
                <FooterLogo2 />
              </li>
              <li className="footerli2">© 2023</li>
              <li className="footerli2 cursor-pointer hover:text-[#0f69c3] hover:underline">
                About
              </li>
              <li className="footerli2 cursor-pointer hover:text-[#0f69c3] hover:underline">
                Accessibility
              </li>
              <li className="footerli2 cursor-pointer hover:text-[#0f69c3] hover:underline">
                User Agreement
              </li>
              <li className="footerli2 cursor-pointer hover:text-[#0f69c3] hover:underline">
                Privacy Policy
              </li>
              <li className="footerli2 cursor-pointer hover:text-[#0f69c3] hover:underline">
                Your California Privacy Choices
              </li>
              <li className="footerli2 cursor-pointer hover:text-[#0f69c3] hover:underline">
                Cookie Policy
              </li>
              <li className="footerli2 cursor-pointer hover:text-[#0f69c3] hover:underline">
                Copyright Policy
              </li>
              <li className="footerli2 cursor-pointer hover:text-[#0f69c3] hover:underline">
                Brand Policy
              </li>
              <li className="footerli2 cursor-pointer hover:text-[#0f69c3] hover:underline">
                Guest Controls
              </li>
            </ul>
            <ul className="h-full w-full flex items-start justify-start gap-4">
              <li className="footerli2 cursor-pointer hover:text-[#0f69c3] hover:underline">
                Community Guidelines
              </li>
              <li className="relative footerli2 flex items-center justify-center cursor-pointer hover:text-[#0f69c3]">
                Language
                <MdKeyboardArrowDown className="absolute -right-6 text-xl" />
              </li>
            </ul>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Page;
