import React from "react";
import { ParamsIdT } from "../../type";

const page = async ({ params }: ParamsIdT<"customerId">) => {
  const { customerId } = await params;

  return <div>our-happy-customer {customerId}</div>;
};

export default page;
