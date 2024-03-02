import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Toggle } from "../ui/toggle";
import { Badge } from "../ui/badge";
import { Heart, ThumbsDown, ThumbsUp } from "lucide-react";

export default function FilmCard() {
  return (
    <Card className="bg-card max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
      <CardHeader className="relative">
        <img
          src="/watch.png"
          alt="Movie image"
          className="w-full h-48 bg-contain bg-center"
        />
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between">
          <CardTitle className="text-xl font-semibold mb-2">
            Movie Title
          </CardTitle>
          <div className="space-x-2">
            <Badge variant="secondary">Category1</Badge>
            <Badge variant="secondary">Category2</Badge>
          </div>
        </div>
        <CardDescription className="text-muted-foreground mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </CardDescription>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 bg-muted/80">
        <Button>Watch</Button>
        <div>
          <Toggle aria-label="Toggle bold">
            <ThumbsUp />
          </Toggle>
          <Toggle aria-label="Toggle bold">
            <ThumbsDown />
          </Toggle>
          <Toggle aria-label="Toggle bold">
            <Heart fill="red" />
          </Toggle>
        </div>
      </CardFooter>
    </Card>
  );
}
