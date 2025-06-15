import React from "react";
import { ParamsIdT } from "../../type";

const page = async ({ params }: ParamsIdT<"newsId">) => {
  const { newsId } = await params;
  return <div>News {newsId}</div>;
};

export default page;
