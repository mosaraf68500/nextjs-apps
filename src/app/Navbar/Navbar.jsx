import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="flex justify-center items-center gap-20">
          <Link href="/">
            {" "}
            <li>Home</li>{" "}
          </Link>
          <Link href="/Services">
            <li>Services</li>
          </Link>

          <Link href="/Contact">
            <li>Contact</li>
          </Link>
          <Link href="/About">
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
