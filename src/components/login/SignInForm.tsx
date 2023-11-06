"use client";

// React components
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Components
import { useAuth } from "@/context/AuthContext";

// assets
import loginSectionPic from "@/public/assets/loginSectionPic.svg";

// icons
import { FcGoogle } from "react-icons/fc";

type Props = {};

const SignInForm = (props: Props) => {
  const { login, user } = useAuth();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showEmailNumError, setEmailNumError] = useState(false);
  const [showPasswordError1, setPasswordError1] = useState(false);
  const [showPasswordError2, setPasswordError2] = useState(false);

  const [formData, setFormData] = useState({
    logEmail: "",
    logPassword: "",
  });

  const checkForm = () => {
    if (formData.logEmail.trim() === "") {
      setEmailNumError(true);
    } else {
      if (formData.logPassword.length === 0) {
        setPasswordError1(true);
        setEmailNumError(false);
      } else if (formData.logPassword.length < 6) {
        setPasswordError1(false);
        setPasswordError2(true);
        setEmailNumError(false);
      }
    }
  };
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(formData.logEmail, formData.logPassword);
      setFormData({
        logEmail: "",
        logPassword: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);

  return (
    <section className="min-h-[360px] max-h-[772px] w-full flex items-start justify-end pt-10">
      <div className="h-auto w-[500px] xl:w-[625px] flex flex-col items-start justify-center pl-2">
        <div className="w-full flex items-start justify-center -mb-9">
          <h1 className="text-[32px] lg:text-[56px] text-[#b24020] font-extralight leading-[4.3rem]">
            Welcome to your professional community
          </h1>
        </div>
        <div className="h-[44rem] w-full flex flex-col items-center justify-center">
          <form
            onSubmit={handleLogin}
            className="h-auto w-full flex flex-col items-center justify-center gap-6"
          >
            <label
              htmlFor=""
              className="formlabel w-full flex flex-col items-start justify-center"
            >
              <span className={`${showEmailNumError ? "text-[#cf0007]" : ""}`}>
                Email or phone
              </span>

              <input
                className={`h-[3.5rem] w-[25.5rem] text-base text-[#000] font-normal rounded-[3px] bg-white border ${
                  showEmailNumError ? "border-[#cf0007]" : "border-black"
                } hover:bg-[#f5f5f5] mt-2 pl-5`}
                type="text"
                id="logEmail"
                name="logEmail"
                autoComplete="on"
                value={formData.logEmail}
                onChange={(e: any) =>
                  setFormData((formData) => ({
                    ...formData,
                    logEmail: e.target.value,
                  }))
                }
              />
              <div
                className={`h-8 w-auto flex items-end justify-start ${
                  showEmailNumError ? "flex -mb-3" : "hidden"
                } `}
              >
                <span className=" text-xs text-[#cf0007] font-normal">
                  Please enter an email address or phone number
                </span>
              </div>
            </label>
            <label
              htmlFor=""
              className={`formlabel relative w-full flex flex-col items-start justify-center -mb-3 ${
                showPasswordError1 || showPasswordError2 ? "-mt-4" : ""
              }`}
            >
              <span
                className={`${
                  showPasswordError1 || showPasswordError2
                    ? "text-[#cf0007]"
                    : ""
                }`}
              >
                Password
              </span>
              <input
                className={`h-[3.5rem] w-[25.5rem] text-base text-[#000] font-normal rounded-[3px] bg-white border ${
                  showPasswordError1 || showPasswordError2
                    ? "border-[#cf0007]"
                    : "border-black"
                } hover:bg-[#f5f5f5] mt-2 pl-5`}
                type={`${showPassword ? "text" : "password"}`}
                id="logpassword"
                name="logpassword"
                autoComplete="off"
                value={formData.logPassword}
                onChange={(e: any) =>
                  setFormData((formData) => ({
                    ...formData,
                    logPassword: e.target.value,
                  }))
                }
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                type="button"
                className="inputButton absolute top-8 right-52 h-12 w-20 flex items-center justify-center"
              >
                {!showPassword ? "Show" : "Hide"}
              </button>
              <div
                className={`h-8 w-auto flex items-end justify-start ${
                  showPasswordError1 || showPasswordError2 ? "flex" : "hidden"
                } `}
              >
                <span className=" text-xs text-[#cf0007] font-normal">
                  {(showPasswordError1 && "Please enter a password") ||
                    (showPasswordError2 &&
                      "The password you provided must have at least 6 characters")}
                </span>
              </div>
            </label>
            <div className="h-auto w-full flex flex-col items-start justify-start mt-2 xl:mt-0">
              <a
                href="https://www.linkedin.com/uas/request-password-reset?trk=homepage-basic_forgot_password"
                className="flex items-start justify-start text-[#0a66c2] font-semibold"
              >
                Forgot password?
              </a>
              <button
                type="submit"
                onClick={checkForm}
                className="h-[3.2rem] w-[25.5rem] text-white font-semibold bg-[#0a66c2] rounded-[30px] mt-[1.7rem]"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="h-[6.5rem] w-full flex items-center justify-start -my-5">
            <div className="formlabel w-[25.5rem] flex items-center justify-start gap-3">
              <hr className="h-1 w-1/2 border-slate-400" />
              or
              <hr className="h-1 w-1/2 border-slate-400" />
            </div>
          </div>
          <div className="h-auto w-full flex items-center justify-start">
            <div className="w-[25.5rem] flex flex-col items-start justify-center gap-[0.9rem]">
              <p className="w-96 loginIcons">
                By clicking Continue, you agree to LinkedIn&apos;s&nbsp;
                <a
                  href="https://www.linkedin.com/legal/user-agreement?trk=homepage-basic_google-auth-button_user-agreement"
                  className=" text-[#0a66c2] font-semibold hover:underline"
                >
                  User Agreement
                </a>
                ,&nbsp;
                <a
                  href="https://www.linkedin.com/legal/privacy-policy?trk=homepage-basic_google-auth-button_privacy-policy"
                  className=" text-[#0a66c2] font-semibold hover:underline"
                >
                  Privacy Policy
                </a>
                , and&nbsp;
                <a
                  href="https://www.linkedin.com/legal/cookie-policy?trk=homepage-basic_google-auth-button_cookie-policy"
                  className=" text-[#0a66c2] font-semibold hover:underline"
                >
                  Cookie Policy
                </a>
                .
              </p>
              <button
                type="submit"
                className="h-auto w-[25.5rem] flex items-center justify-start gap-2 px-2 py-[0.2rem] text-white font-semibold rounded-[30px] border"
              >
                <div className="w-auto flex items-center justify-start">
                  <span className="h-[1.38rem] w-[1.38rem] flex items-center justify-center  text-xs text-[#ffffffca] bg-[#0a66c2] rounded-full">
                    M
                  </span>
                </div>
                <div className="h-full w-2/4 flex flex-col items-start justify-center">
                  <h4 className="text-sm text-[#3c4043] font-semibold -mb-1">
                    Continue as Marc
                  </h4>
                  <p className="text-[0.7rem] text-[#3c4043c4]">
                    marcbrown2024@gmail.com
                  </p>
                </div>
                <div className="w-2/4 flex items-center justify-end text-2xl">
                  <FcGoogle />
                </div>
              </button>
              <a href="https://www.linkedin.com/signup">
                <button
                  type="submit"
                  className="joinNow h-[3.2rem] w-[25.5rem] text-white font-semibold rounded-[30px] border"
                >
                  New to LinkedIn? Join now
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-[47%]">
        <Image
          src={loginSectionPic}
          alt="left photo"
          className="absolute top-[5.8rem] -left-[4.3rem] h-[76.5%] mb-4"
        ></Image>
      </div>
    </section>
  );
};

export default SignInForm;
