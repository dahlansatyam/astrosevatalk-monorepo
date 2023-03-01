import React from "react";
import { Section } from "../Layout";
import { StarIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { Input, Textarea, Form, Select } from "../forms";

type Props = {};

const CallintakeForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  return (
    <div className="py-8">
      <Section>
        <div className="flex justify-between gap-4">
          <div className="flex flex-col items-center  space-y-6">
            <div>
              <p className="text-center text-[32px] font-bold">
                More Astrologer
              </p>
            </div>
            <div>
              <div className=" flex h-[129px] w-[254px]  justify-evenly gap-2 rounded-lg border-4 border-[#F2CB6E] bg-black p-1">
                <div className="flex flex-col items-center justify-center space-y-1">
                  {" "}
                  <div className="rounded-full bg-[#D3B160] p-1">
                    <div className="rounded-full bg-[#FEE8A0] p-1">
                      <img
                        className="h-[54px] w-[54px]"
                        src="/chat.png"
                        alt="chat"
                      />
                    </div>
                  </div>
                  <div className="flex">
                    <StarIcon className="h-2 w-2 text-[#CDB06F]" />
                    <StarIcon className="h-2 w-2 text-[#CDB06F]" />
                    <StarIcon className="h-2 w-2 text-[#CDB06F]" />
                    <StarIcon className="h-2 w-2 text-[#CDB06F]" />
                    <StarIcon className="h-2 w-2 text-[#CDB06F]" />
                  </div>
                  <p className="text-center text-xs font-medium  text-white">
                    2090 orders
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="font-[georgia] text-[18px] font-semibold text-[#C6A65A]">
                    Anupam
                  </p>
                  <div className="space-y-1 ">
                    <p className=" text-xs text-[#FFF9EA]">
                      Vedic, Vastu, Face reading
                    </p>
                    <p className="text-xs text-[#FFF9EA]">
                      English, Hindi, Punjabi
                    </p>
                    <p className="text-xs text-[#FFF9EA]">
                      Experience: 3 years
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-xs font-semibold text-[#CDB06F]">Free</p>
                    <button className="rounded-lg bg-gradient-to-b from-[#EED387] to-[#F9B800] py-1 px-2 text-xs font-semibold text-white">
                      Call
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div>
              <p className=" text-center text-[22px] font-bold">
                Call Intake Form
              </p>
            </div>

            <div>
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

          <div>
            <div className="flex flex-col items-center justify-between space-y-10">
              <div className="flex flex-col items-center justify-center space-y-2">
                {" "}
                <div className="rounded-full bg-[#D3B160] p-1">
                  <div className="rounded-full bg-[#FEE8A0] p-1">
                    <img
                      className="h-[219px] w-[202px]"
                      src="/chat.png"
                      alt="chat"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-6 text-black">
                <p className="font-[georgia] text-[32px] font-semibold text-black">
                  Anupam
                </p>
                <div className="space-y-3 text-center text-[22px]">
                  <p className=" ">Vedic, Vastu, Face reading</p>
                  <p className="">English, Hindi, Punjabi</p>
                  <p className=" ">Experience: 3 years</p>
                </div>
              </div>
              <div className="flex items-end justify-end">
                <button className=" rounded-md bg-black py-2 px-5 text-[22px] font-semibold text-white">
                  Rate Your Experince
                </button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default CallintakeForm;
