"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3 ">
      <Link href={"/"} className="flex gap-2 flex-center">
        <Image
          src={"/assets/images/prompty97.svg"}
          alt="Prompty97 Logo"
          width={30}
          height={30}
          className="object-contained"
        />
        <p className="logo_text">Prompty97</p>
      </Link>

      {/* Mobile Navigation */}
    </nav>
  );
};

export default Nav;
