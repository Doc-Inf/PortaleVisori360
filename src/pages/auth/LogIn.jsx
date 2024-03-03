import React from "react";

import { Input } from "../../components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function LogIn() {
  return (
    <div>
      <Card className="absolute top-1/2 -translate-y-1/2 space-y-2 left-1/2 -translate-x-1/2 w-[60%]">
        <CardHeader>
          <CardTitle className="m-auto">Log-in</CardTitle>
          <CardDescription className="text-center">
            Welcome back, enter your credentials here to log in
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="example@gmail.com" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center gap-4 pt-4">
            <label htmlFor="remember">Remember me</label>
            <Checkbox id="remember" />
          </div>
        </CardContent>
        <CardFooter className="pb-4">
          <Button>Log in</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
