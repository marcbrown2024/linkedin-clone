"use client";

// react components
import React, { useEffect, useState } from "react";

// components
import SignInForm from "@/components/login/SignInForm";
import Section1 from "@/components/login/Section1";
import Footer from "@/components/login/Footer";

// icons
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
        <Section1 />
        {/* 
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
        <Footer />
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
      </main>
    </>
  );
};

export default Page;
