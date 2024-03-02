import React from "react";

import SidebarCard from "./sidebarCard";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

import { HomeIcon, ThumbsUp, User, Videotape } from "lucide-react";

import TextLG from "./typhography/textLG";

export default function Sidebar({ open, children }) {
  return (
    <ul
      className={`${open ? `flex` : `hidden`} flex-col justify-between absolute top-0 w-[100vw] lg:w-[30vw] border h-dvh bg-background pb-72 pt-2`}
    >
      {/* TOP LOGO */}
      <li>
        <div className="flex items-center justify-between">
          <SidebarCard>
            <Videotape className="text-primary" />
            <TextLG className="pb-0 text-2xl text-foreground">
              Videoteca Visori 360º
            </TextLG>
          </SidebarCard>
          {children}
        </div>
        <Separator className="mx-auto w-[96%]" />
      </li>
      {/* SIDEBAR NAV */}
      <li className="ps-10">
        <SidebarCard>
          <HomeIcon />
          <Button variant="link">
            <TextLG className="pb-0 text-foreground">Home</TextLG>
          </Button>
        </SidebarCard>
      </li>
      <li className="ps-10">
        <SidebarCard>
          <User />
          <Button variant="link">
            <TextLG className="pb-0 text-foreground">Account</TextLG>
          </Button>
        </SidebarCard>
      </li>
      <li className="ps-10">
        <SidebarCard>
          <ThumbsUp />
          <Button variant="link">
            <TextLG className="pb-0 text-foreground">Favourites</TextLG>
          </Button>
        </SidebarCard>
      </li>
    </ul>
  );
}
