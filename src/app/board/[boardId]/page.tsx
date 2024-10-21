import ListContainer from "./_components/List-container";

interface BoardIDPageProps {
  params: {
    boardId: string;
  };
}
const BoardPage = async ({ params }: BoardIDPageProps) => {
  // const lists = await db.list.findMany({
  //   where: { boardId: params.boardId },
  //   include: {
  //     cards: {
  //       orderBy: {
  //         order: "asc"
  //       }
  //     }
  //   },
  //   orderBy: {
  //     order: "asc"
  //   }
  // });

  return (
    <div className="p-4 h-full overflow-x-auto">
      <ListContainer boardId={params.boardId} />
    </div>
  );
};

export default BoardPage;
