import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import BoardsList from "./[orgId]/boards/_components/BoardsList";
const page = async () => {
  return (
    <div className="flex flex-col space-y-4 text-2xl">
      Select an Organization to see the boards
    </div>
  );
};

export default page;
