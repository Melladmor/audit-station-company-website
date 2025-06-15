"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";

import TextInput from "@/components/Inputs/Inputs/TextInput";
import TextArea from "@/components/Inputs/Inputs/TextArea";
import Phone from "@/components/Inputs/Inputs/Phone";
import Button from "@/components/ui/Buttons/Button";

const createFormSchema = (t: ReturnType<typeof useTranslations>) => {
  return z.object({
    firstname: z
      .string()
      .min(1, { message: t("validations.firstname_required") }),
    lastname: z
      .string()
      .min(1, { message: t("validations.lastname_required") }),
    email: z.string().email({ message: t("validations.email_invalid") }),
    phone: z
      .string()
      .min(5, { message: t("validations.phone_required") })
      .refine(
        (phone) => {
          const phoneWithoutCountryCode = phone.replace(/^\+\d{1,3}/, "");
          return phoneWithoutCountryCode.length >= 7;
        },
        { message: t("validations.phone_invalid_length") }
      ),
    companyName: z
      .string()
      .min(1, { message: t("validations.company_required") }),
    message: z.string().min(1, { message: t("validations.message_required") }),
  });
};

type FormSchemaType = z.infer<ReturnType<typeof createFormSchema>>;

const CallBackForm = () => {
  const t = useTranslations();
  const formSchema = createFormSchema(t);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormSchemaType) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="bg-[#D8F0C4] xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-full xs:w-full  absolute top-[5%] ltr:left-0 rtl:right-0 ltr:xl:rounded-[0px_150px_0px_150px] ltr:lg:rounded-[150px_0px_150px_0px] rtl:md:rounded-[100px_0px_100px_0px] rtl:xl:rounded-[150px_0px_150px_0px] rtl:lg:rounded-[0px_150px_0px_150px] ltr:md:rounded-[0px_100px_0px_100px] sm:rounded-lg xs:rounded-lg xl:p-[50px] lg:p-[50px] md:p-[30px] sm:p-[20px] xs:p-[20px]">
      <div className="flex justify-center items-center w-full mb-[16px]">
        <h2 className="xl:text-[32px] lg:text-[28px] md:text-[26px] sm:text-[20px] xs:text-[20px] text-black font-[500]">
          {t("getintouch")}
        </h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <TextInput
          type="text"
          icon="/icons/inputicons/user.svg"
          label={t("firstname")}
          required
          name="firstname"
          placeholder={t("firstname")}
          register={register("firstname")}
          error={errors.firstname?.message}
        />
        <TextInput
          type="text"
          icon="/icons/inputicons/user.svg"
          label={t("lastname")}
          required
          name="lastname"
          placeholder={t("lastname")}
          register={register("lastname")}
          error={errors.lastname?.message}
        />
        <TextInput
          type="email"
          icon="/icons/inputicons/email.svg"
          label={t("email")}
          required
          name="email"
          placeholder={t("email")}
          register={register("email")}
          error={errors.email?.message}
        />
        <Phone
          name="phone"
          icon="/icons/inputicons/phone.svg"
          label={t("phonenumber")}
          required
          register={register("phone")}
          error={errors.phone?.message}
        />
        <TextInput
          type="text"
          icon="/icons/inputicons/company.svg"
          label={t("companyname")}
          required
          name="companyName"
          placeholder={t("companyname")}
          register={register("companyName")}
          error={errors.companyName?.message}
        />
        <TextArea
          label={t("yourmessage")}
          required
          name="message"
          placeholder={t("yourmessage")}
          register={register("message")}
          error={errors.message?.message}
        />
        <div className="flex justify-end items-center-end w-full">
          <Button
            title={t("submit")}
            className="btn_size !bg-black !text-white hover:!bg-secondary"
          />
        </div>
      </form>
    </div>
  );
};

export default CallBackForm;
