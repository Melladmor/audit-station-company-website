import React from "react";
import { ParamsIdT } from "../../type";

const page = async ({ params }: ParamsIdT<"serviceId">) => {
  const { serviceId } = await params;

  return <div>services {serviceId}</div>;
};

export default page;
