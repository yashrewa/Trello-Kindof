"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import React, { useState } from "react";
import Sidebar from "./Sidebar";

const MobileSidebar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <Button
        className="block md:hidden"
        onClick={() => setToggle(!toggle)}
        variant="ghost"
        size="sm"
      >
        <Menu className="size-6" />
      </Button>
      <Sheet open={toggle} onOpenChange={() => setToggle(!toggle)}>
        <SheetContent side="left">
          <Sidebar />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;
