import React from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

import { Copy, Triangle, Youtube } from "lucide-react";

import Par from "./typhography/par";

export default function WatchVideo() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Video Title</DialogTitle>
        <DialogDescription className="text-foreground">
          {/* VIDEO DESC */}
          <Par>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ipsam
            numquam expedita aspernatur vitae fugit quo magnam, veritatis
            voluptatem. Nam ex rem placeat quasi praesentium odit excepturi?
            Possimus, repudiandae a. Provident reiciendis perspiciatis ullam
            quaerat ipsam, odio aspernatur commodi possimus minus debitis quas
            tempore aliquam obcaecati corporis distinctio ab at non incidunt! At
            eius dolor voluptates, optio atque error maiores.
          </Par>
          <Separator className="mb-4" />
          {/* WATCH THE VIDEO BTN */}
          <div className="flex items-center justify-between gap-2 p-2 m-auto mb-0 rounded-sm bg-primary w-fit text-slate-100 ">
            <Par>Watch the video</Par>
            <Youtube />
          </div>
          <Triangle
            className="m-auto mb-1 -mt-2 rotate-180"
            fill="#dc2627"
            strokeWidth={0}
          />
          {/* QR CODE */}
          <img
            src="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg"
            className="m-auto w-[50%] border-8 rounded-sm border-primary mb-8"
          />
          {/* COPY TO CLIPBOARD*/}
          <Label htmlFor="link">
            <Par className="mb-2 text-center">
              Scan the QR code or copy to clipboard:
            </Par>
          </Label>
          <div className="w-[60%] m-auto relative">
            <Input
              readOnly
              placeholder="https://youtube.com/..."
              className="m-auto"
              id="link"
            />
            <Button
              className="absolute top-0 right-0 border border-l-0 rounded-s-none"
              variant="secondary"
            >
              <Copy />
            </Button>
          </div>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
}
