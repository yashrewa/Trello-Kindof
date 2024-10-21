import { Toaster } from "@/components/ui/toaster";
import Sidebar from "../_components/Sidebar";

const OrgLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="pt-20 md:pt-20 px-4 mx-auto">
      <div className="flex gap-x-7">
        <div className="w-64 shrink-0 hidden md:block">
          <Sidebar />
        </div>
        {children}
        <Toaster />
      </div>
    </main>
  );
};

export default OrgLayout;
