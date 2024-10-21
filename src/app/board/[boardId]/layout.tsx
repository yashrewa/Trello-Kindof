import { redirect } from "next/navigation";
import BoardNavBar from "./_components/BoardNavbar";
import { Toaster } from "@/components/ui/toaster";
const BoardIdLayout = async ({
  children,
  params
}: {
  children: React.ReactNode;
  params: { boardId: string };
}) => {
  // const boardInfo = await db.board.findUnique({
  //   where: { id: params.boardId }
  // });
  // if (!boardInfo) {
  //   redirect("/homepage");
  // }
  const boardInfo = {
    id: "afklsdfhiuaerhgkleuar",
    title: "Spring"
  };
  return (
    <div
      className="relative h-screen bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(/assets/bgImage.png)`
      }}
    >
      <BoardNavBar />
      <main className="relative pt-28 h-full">
        <h1 className="text-xl md:text-4xl  text-white text-center">
          Board: {boardInfo.title}
        </h1>
        {children}
        <Toaster/>
      </main>
    </div>
  );
};
export default BoardIdLayout;
