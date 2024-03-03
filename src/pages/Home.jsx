import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";

import { Badge } from "../components/ui/badge";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "../components/ui/collapsible";
import { Button } from "../components/ui/button";

import TextXL from "../components/typhography/textXL";
import TextLG from "../components/typhography/textLG";
import TextMD from "../components/typhography/textMD";
import Par from "../components/typhography/par";

import CardCarousel from "../components/cardCarousel";
import HoverCard from "../components/hoverCard";

export default function Home() {
  const [categoryOpen, setCategoryOpen] = useState(true);
  const [category2Open, setCategory2Open] = useState(false);
  // category onclick animation
  const categoryVariant = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };

  return (
    <>
      {/* HEADING */}
      <motion.div
        className="px-4 mt-20 h-[40vh] overflow-hidden w-[100vw] text-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <Badge className="px-4 py-2 mb-10">
          {" "}
          <TextMD>Over ... + videos</TextMD>
        </Badge>
        <TextXL className="text-4xl md:text-6xl">Videoteca Visori 360º</TextXL>
        <Par className="px-10 text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quia
          veniam nesciunt, aspernatur labore aliquam ipsam illum quisquam.
        </Par>
      </motion.div>
      {/* CATEGORIES */}
      <motion.div
        className={`px-0 ${categoryOpen ? "pb-10" : "pb-0"} border-b-2 bg-secondary/80 mt-20`}
      >
        <Collapsible open={categoryOpen} onOpenChange={setCategoryOpen}>
          <div className="flex items-center space-x-4 w-[85%] h-16 m-auto">
            <TextLG>Category1</TextLG>
            <CollapsibleTrigger asChild>
              <Button variant="ghost">
                <motion.div
                  animate={categoryOpen ? "closed" : "open"}
                  variants={categoryVariant}
                >
                  <ChevronDown />
                </motion.div>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent>
            <CardCarousel>
              <HoverCard link="https://i.ytimg.com/vi/hEdzv7D4CbQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCggPxA9ggUsMAhXCfGRl8ahmV4pQ" />
              <HoverCard link="https://i.ytimg.com/vi/FPiZ7z6lU54/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAEv9B2SreeOLvmVUGmI9OjI1Uolg" />
              <HoverCard link="https://i.ytimg.com/vi/ZvZ7da8JBUk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCj25_c-1-g7JawtfmEXRADWpCQNQ" />
              <HoverCard link="https://i.ytimg.com/vi/sPyAQQklc1s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArrvFaLETjv_3WSloUwMlA8S0wjw" />
              <HoverCard link="https://i.ytimg.com/vi/kQzjlHYeTCg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCbIX6BhKxgK_KUwpxU4r9FgULwYg" />
              <HoverCard link="https://i.ytimg.com/vi/rG4jSz_2HDY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDONZCaBDWm3ANo79TBSLbGICHYSA" />
            </CardCarousel>
          </CollapsibleContent>
        </Collapsible>
      </motion.div>
      <motion.div
        className={`px-0 ${category2Open ? "pb-10" : "pb-0"} border-b-2 bg-secondary/80`}
      >
        <Collapsible open={category2Open} onOpenChange={setCategory2Open}>
          <div className="flex items-center space-x-4 w-[85%] h-16 m-auto">
            <TextLG>Category2</TextLG>
            <CollapsibleTrigger asChild>
              <Button variant="ghost">
                <motion.div
                  animate={category2Open ? "closed" : "open"}
                  variants={categoryVariant}
                >
                  <ChevronDown />
                </motion.div>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent>
            <CardCarousel>
              <HoverCard link="https://i.ytimg.com/vi/rG4jSz_2HDY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDONZCaBDWm3ANo79TBSLbGICHYSA" />
              <HoverCard link="https://i.ytimg.com/vi/kQzjlHYeTCg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCbIX6BhKxgK_KUwpxU4r9FgULwYg" />
              <HoverCard link="https://i.ytimg.com/vi/FPiZ7z6lU54/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAEv9B2SreeOLvmVUGmI9OjI1Uolg" />
              <HoverCard link="https://i.ytimg.com/vi/hEdzv7D4CbQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCggPxA9ggUsMAhXCfGRl8ahmV4pQ" />
              <HoverCard link="https://i.ytimg.com/vi/sPyAQQklc1s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArrvFaLETjv_3WSloUwMlA8S0wjw" />
              <HoverCard link="https://i.ytimg.com/vi/ZvZ7da8JBUk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCj25_c-1-g7JawtfmEXRADWpCQNQ" />
            </CardCarousel>
          </CollapsibleContent>
        </Collapsible>
      </motion.div>
    </>
  );
}
