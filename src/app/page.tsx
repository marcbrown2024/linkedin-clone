"use client";

// React components
import React from "react";
import { useRouter } from "next/navigation";

// Components
import { useAuth } from "@/context/AuthContext";

type Props = {};

const Page = (props: Props) => {
  const { logout } = useAuth();
  const router = useRouter();

  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center gap-12">
      <h1 className="text-7xl">I LOVE YOU BABY !!</h1>
      <p className=" text-lg">
        Words I say don&apos;t always come out right, and they always seem to start a
        fight. I know what I say can hurt you, and believe me, I don&apos;t mean to.
        "I&apos;m Sorry.
      </p>
      <p>HEHEHEHEHEHEHEEHEHEHEHEHEHEHEHEEHEHEHEHEHEHEHEHEEH</p>

      <button
        type="button"
        onClick={() => {
          logout(), router.push("/login");
        }}
      >
        Sign Out
      </button>
    </main>
  );
};

export default Page;
