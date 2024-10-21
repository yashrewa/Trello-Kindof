import { revalidatePath } from "next/cache";


export async function createList(formData: FormData) {
  "use server";
  const title = formData.get("title") as string;
  const boardId = formData.get("boardId") as string;

  const board = await db.board.findUnique({
    where: { id: boardId }
  });

  const lastList = await db.list.findFirst({
    where: { id: boardId },
    orderBy: { order: "desc" },
    select: { order: true }
  });

  const newOrder = lastList ? lastList.order + 1 : 1;

  await db.list.create({
    data: { title, boardId, order: newOrder }
  });
  revalidatePath("/");
}
