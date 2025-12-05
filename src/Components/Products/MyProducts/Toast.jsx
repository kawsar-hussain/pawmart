import React from "react";
import { toast } from "react-toastify";

const Toast = (res) => {
  console.log(res);
  res ? toast.success("Order Successfully!") : "";
  return <div></div>;
};

export default Toast;
