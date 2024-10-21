import React from "react";
import BoardsList from "./_components/BoardsList";

const compony = ({ params }) => {
  console.log(params);
  return (
    <>
      <BoardsList orgId={params.orgId} />
    </>
  );
};

export default compony;
