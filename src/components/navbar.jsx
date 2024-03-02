import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextMD from "./typhography/textMD";
import { Menu, Search } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { Input } from "./ui/input";

export default function Navbar({ btn }) {
  /* SM MENU */
  const [menu, setMenu] = useState(false);

  /* UPDATE MENU STATUS ONCLICK */
  const handleMenu = () => setMenu((prev) => !prev);

  return (
    <nav className="w-full border border-border">
      {/* CONTAINER */}
      <div className="flex items-center justify-between px-4 py-2 md:px-10 max-max-w-screen-md">
        {/* LOGO */}
        <Link className="flex items-center space-x-4" to="/">
          {btn}
          <TextMD className="text-xl">Videoteca Visori 360</TextMD>
        </Link>

        {/* SEARCH BAR */}
        <div className="hidden m-auto space-x-2 md:flex w-45 md:w-60 lg:w-80">
          <Button>
            <Search />
          </Button>
          <Input type="text" placeholder="Search" />
        </div>

        {/* NAV */}
        <div className="items-center hidden space-x-2 md:flex">
          <ModeToggle />
          <Link className={buttonVariants({ variant: "outline" })} to="/log-in">
            Log In
          </Link>
          <Link
            className={("bg-primary", buttonVariants({ variant: "" }))}
            to="/sign-up"
          >
            Sign Up
          </Link>
        </div>
        {/* MOBILE */}
        <div className="flex items-center md:hidden">
          {/* THEME SWITCH FOR MOBILE */}
          <div className="md:hidden me-4">
            <ModeToggle />
          </div>
          <Button className="mobile-menu-button" onClick={handleMenu}>
            <Menu />
          </Button>
        </div>
      </div>

      {/* SM NAV */}
      <div
        className={`${menu ? `flex` : `hidden`} flex-col pb-4 mt-4 space-y-4 md:hidden`}
      >
        {/* SEARCH BAR AND LOG IN BTNS */}
        <div className="flex max-w-md px-2 m-auto space-x-2">
          {/* SEARCH BAR */}
          <Button>
            <Search />
          </Button>
          <Input type="text" placeholder="Search" />
          {/* LOGIN BTNS */}
          <Link className={buttonVariants({ variant: "outline" })} to="/log-in">
            Log In
          </Link>
          <Link
            className={("bg-primary", buttonVariants({ variant: "" }))}
            to="/sign-up"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
