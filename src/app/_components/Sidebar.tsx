"use client";
import { useRouter, usePathname } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Activity, Building, Building2, Layout, Settings } from "lucide-react";
import orgData from "../../data/orgsData.json";

import { useEffect } from "react";
const Sidebar = () => {
  const router = useRouter();
  const pathName = usePathname();

  const routes = [
    {
      label: "Boards",
      icon: <Layout className="h-4 w-4 mr-2" />
    },
    // {
    //   label: "Activity",
    //   icon: <Activity className="h-4 w-4 mr-2" />
    // },
    {
      label: "Settings",
      icon: <Settings className="h-4 w-4 mr-2" />
    }
  ];

  const onNavgiate = (href: string) => {
    router.push(href);
  };
  return (
    <>
      <div>Workspaces</div>
      <Separator orientation="horizontal" className="my-4" />
      <Accordion type="multiple" className="space-y-2">
        {orgData.map(({ id, name, icon, href }) => (
          <div key={id}>
            <AccordionItem value={id.toString()} className="border-none">
              <AccordionTrigger
                className={cn(
                  "flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-50 transition text-start no-underline hover:no-underline"
                )}
              >
                <div className="flex items-center gap-x-2 text-lg">
                  {icon === "Building" && <Building />}
                  {icon === "Building2" && <Building2 />}
                  {name}
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-1 text-neutral-700">
                {routes.map((route) => (
                  <Button
                    key={route.label}
                    variant={"ghost"}
                    onClick={() =>
                      onNavgiate(href + "/" + route.label.toLowerCase())
                    }
                    className={cn(
                      "w-full font-normal justify-start pl-10 mb-1 hover:bg-neutral-700 hover:text-white",
                      pathName === href + "/" + route.label &&
                        "bg-neutral-900 text-white"
                    )}
                  >
                    {route.icon}
                    {route.label}
                  </Button>
                ))}
              </AccordionContent>
            </AccordionItem>
          </div>
        ))}
      </Accordion>
    </>
  );
};

export default Sidebar;
