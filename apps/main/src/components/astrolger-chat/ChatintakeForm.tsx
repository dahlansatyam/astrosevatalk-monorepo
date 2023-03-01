import React from "react";
import { Section } from "../Layout";
import { useForm } from "react-hook-form";
import { Input, Textarea, Form, Select } from "../forms";

type Props = {};

const ChatintakeForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  return (
    <div>
      <Section>
        <div className="flex flex-col items-center gap-6">
          <div>
            <p className=" text-center text-[22px] font-bold">
              Chat Intake Form
            </p>
          </div>

          <div className="w-full py-4">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col space-y-3">
                <div className="flex gap-4 py-3">
                  <div className="w-full">
                    <Input
                      type={"string"}
                      name={"name"}
                      id="name"
                      register={register}
                      required={true}
                      label="FirstName"
                      placeholder={""}
                    />
                  </div>
                  <div className=" w-full">
                    <Input
                      type={"string"}
                      name={"lastName"}
                      id="lastName"
                      register={register}
                      required={true}
                      label="lastName*"
                      placeholder={""}
                    />
                  </div>
                </div>

                <div className="flex gap-4 py-3 ">
                  <div className="w-full">
                    <Input
                      type={"string"}
                      name={"occupation"}
                      id="occupation"
                      register={register}
                      required={true}
                      label="occupation"
                      placeholder={""}
                    />
                  </div>

                  <div className="w-full">
                    <Input
                      type={"string"}
                      name={"Gender"}
                      id="Gender"
                      register={register}
                      required={true}
                      label="Gender"
                      placeholder={""}
                    />
                  </div>
                </div>

                <div className="flex gap-4 py-3">
                  <div className="w-full">
                    <Input
                      type={"date"}
                      name={"DOB"}
                      id="DOB"
                      register={register}
                      required={true}
                      label="Date Of Birth"
                      placeholder={""}
                    />
                  </div>

                  <div className="w-full">
                    <Input
                      type={"Time"}
                      name={"TOB"}
                      id="TOB"
                      register={register}
                      required={true}
                      label="Time Of Birth"
                      placeholder={""}
                    />
                  </div>
                </div>

                <div className="flex gap-4 py-3">
                  <div className="w-full">
                    <Input
                      type={"string"}
                      name={"BirthPlace"}
                      id="BirthPlace"
                      register={register}
                      required={true}
                      label="Birth Place"
                      placeholder={""}
                    />
                  </div>

                  <div className="w-full">
                    <Input
                      type={"string"}
                      name={"marital"}
                      id="marital"
                      register={register}
                      required={true}
                      label="Marital Status"
                      placeholder={""}
                    />
                  </div>
                </div>

                <div className="">
                  <div className="w-full">
                    <Input
                      type={"string"}
                      name={"concern"}
                      id="concern"
                      register={register}
                      required={true}
                      label="Topic Of Concern"
                      placeholder={""}
                    />
                  </div>

                  {/* <div className="flex items-center justify-center">
                    <button
                      type="submit"
                      className=" rounded-2xl  bg-[#efc35e] py-2  px-5 font-semibold text-black"
                    >
                      Submit the Form
                    </button>
                  </div> */}
                </div>
                <div>
                  <button
                    type="submit"
                    className=" rounded-xl  bg-[#efc35e] py-1  px-5 font-semibold text-black"
                  >
                    start call with Anupam
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ChatintakeForm;
