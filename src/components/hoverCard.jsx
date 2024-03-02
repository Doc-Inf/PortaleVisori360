import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Dialog, DialogTrigger } from "./ui/dialog";

import { Heart, ThumbsDown, ThumbsUp } from "lucide-react";

import Par from "./typhography/par";
import WatchVideo from "./watchVideo";

export default function HoverCard({ link }) {
  const [toggleState, setToggleState] = useState({
    like: false,
    dislike: false,
    heart: false,
  });
  const handleToggle = (str) => {
    if (str === "like") {
      if (!toggleState.like)
        setToggleState({ ...toggleState, like: true, dislike: false });
      else setToggleState({ ...toggleState, like: false, dislike: false });
    } else if (str === "dislike") {
      if (!toggleState.dislike)
        setToggleState({ ...toggleState, like: false, dislike: true });
      else setToggleState({ ...toggleState, like: false, dislike: false });
    } else {
      if (!toggleState.heart) setToggleState({ ...toggleState, heart: true });
      else setToggleState({ ...toggleState, heart: false });
    }
  };
  return (
    <Dialog>
      <Card className="relative border group bg-card">
        {/* HOVER BG / FALLBACK */}
        <div className="w-full rounded-lg bg-gradient-to-r from-red-900 via-red-500 to-orange-500 p-[0px]">
          {/* IMG */}
          <CardHeader className="relative p-0">
            <img
              src={link}
              alt="Movie image"
              className="w-[360px] 
            h-[203px] object-cover bg-center rounded-lg group-hover:opacity-50"
            />
          </CardHeader>
          {/* HIDDEN STUFF, DESCRIPTION, WATCH AND LIKE STATE */}
          <div className="absolute bottom-0 w-full transition-all duration-300 rounded-lg opacity-0 group-hover:opacity-100 bg-muted/80">
            <CardContent className="p-4 rounded-t-lg bg-muted/80">
              {/* QUICK DESCR */}
              <CardDescription className="mb-4 text-justify text-muted-foreground">
                <Par>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur esse, accusantium non aliquid id eum culpa itaque
                  quaerat tempora.
                </Par>
              </CardDescription>
              {/* WATCH AND LIKE */}
              <div className="flex items-center justify-between">
                <DialogTrigger>
                  <Button>Watch</Button>
                </DialogTrigger>
                <div className="flex space-x-4">
                  <ThumbsUp
                    onClick={() => handleToggle("like")}
                    fill={!toggleState.like ? "transparent" : "white"}
                  />
                  <ThumbsDown
                    onClick={() => handleToggle("dislike")}
                    fill={!toggleState.dislike ? "transparent" : "white"}
                  />
                  <Heart
                    onClick={() => handleToggle("heart")}
                    fill={!toggleState.heart ? "transparent" : "red"}
                  />
                </div>
              </div>
            </CardContent>

            {/* ALWAYS SHOWN */}
          </div>
          <CardFooter className="flex flex-wrap items-center justify-between p-4 rounded-b-lg bg-muted border-t-slate-200">
            <CardTitle className="text-xl font-semibold whitespace-nowrap">
              Video Title
            </CardTitle>
            <div className="flex justify-between">
              <div className="space-x-2">
                <Badge variant="primary" className="border border-destructive">
                  Category1
                </Badge>
                <Badge variant="primary" className="border border-destructive">
                  Category2
                </Badge>
              </div>
            </div>
          </CardFooter>
        </div>
      </Card>
      <WatchVideo />
    </Dialog>
  );
}
