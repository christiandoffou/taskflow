import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="">
      <Image src="/assets/logo.svg" width={230} height={48} alt="" />
    </Link>
  );
};

export default Logo;
