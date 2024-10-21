import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="pt-40 pb-20 bg-slate-100">
      <div className="flex items-center justify-center flex-col ">
        <div className="flex items-center justify-center flex-col">
          <div className="text-3xl md:text-6xl font-pooppins font-robotoMono text-center text-neutral-800 mb-6 font-medium">
            Kind of trello to oraganise your stuff
          </div>
          <div className="text-3xl md:text-6xl bg-gradient-to-l from-purple-800 to-cyan-700 text-white px-4 p-2 rounded-md pb-4 w-fit font-medium">
            KindOf Trello
          </div>
          <div className="text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl  text-center mx-auto font-poppins ">
            A simple and clean interface to manage your tasks and boards. Feel
            free to play around with it
          </div>
          <Button className="mt-6 font-semibold" size="lg" asChild>
            <Link href="/org">Move to Playground</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
