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

export default function SignUp() {
  return (
    <div>
      <Card className="absolute top-1/2 -translate-y-1/2 space-y-2 left-1/2 -translate-x-1/2 w-[60%]">
        <CardHeader className="space-y-3">
          <CardTitle className="m-auto">Sign-up</CardTitle>
          <CardDescription className="text-center">
            Welcome, type your credentials here to sign up in this site
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
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
          <div className="space-y-1">
            <Label htmlFor="c-password">Confirm password</Label>
            <Input
              type="password"
              id="c-password"
              placeholder="Confirm your password"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Sign up</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
