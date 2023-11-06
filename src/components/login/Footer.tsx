"use client";

import React from 'react'

// components
import FooterLogo1 from "@/components/global/icons/FooterLogo1";
import FooterLogo2 from "@/components/global/icons/FooterLogo2";

// icons
import { MdKeyboardArrowDown } from "react-icons/md";
type Props = {}

const Footer = (props: Props) => {
  return (
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
  )
}

export default Footer