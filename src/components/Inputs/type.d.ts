import { UseFormRegisterReturn } from "react-hook-form";

export interface InputPropsI {
  label?: string;
  type?: "text" | "passowrd" | "email" | "phone" | "textarea";
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  register?: UseFormRegisterReturn;
  error?: string;
  icon?: string;
  name: string;
}
