import React from "react";
import { Section } from "../Layout";
import { useForm } from "react-hook-form";
import { Form, Input } from "../forms";

type Props = {};

const FormPanchang = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);
  console.log(errors);
  return (
    <div>
      <div className=" bg-[url('/chat-bg.svg')] bg-cover py-8 lg:py-[48px]">
        <Section>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col items-center justify-center gap-5  md:flex-row">
              <div className=" w-full rounded-xl">
                <Input
                  type={"string"}
                  name={"Yourcity"}
                  id="Yourcity"
                  register={register}
                  required={true}
                  label="Enter Your City"
                  placeholder={""}
                />
              </div>
              <div className=" w-[30%] items-center">
                <button
                  type="submit"
                  className="w-full  rounded-xl bg-[#D3B160] py-3  px-5 font-semibold text-black"
                >
                  Get Panchang
                </button>
              </div>
            </div>
          </Form>
        </Section>
      </div>
    </div>
  );
};

export default FormPanchang;
