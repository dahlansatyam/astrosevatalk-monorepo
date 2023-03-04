import React from "react";
import { Section } from "@/components/Layout";
import { useForm } from "react-hook-form";
import { Input, Textarea, Form, Select } from "@/components/forms";

type Props = {};

const GenerateKundli = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  return (
    <div className="bg-[url('/horoscope-bg.svg')] bg-cover py-8">
      <Section>
        <div className="mb-8 flex flex-col space-y-5 py-5">
          <p className="text-center text-2xl font-bold md:text-5xl">
            Free Kundly Online
          </p>
          <div className="flex flex-col text-justify">
            <p>
              Looking for your free Kundli from expert astrologers? Then you
              have come to the right place. The online free kundali available on
              Astrotalk is a 100% free and authentic free Kundli that has been
              prepared after consulting more than 50 expert astrologers on
              board. The free kundli is such that it can give you a glimpse into
              various aspects of your life such as your career, love life,
              marriage, business and much more. The online kundli prepared by
              the free Kundali software here is no less than any traditional
              Kundli and can also be used for purposes like matching making,
              kundali matching for marriage or simply making future predictions.
            </p>
            <p>
              Talking about future predictions, the kundali catered by Astrotalk
              to you is such that it considers the movement of all the planets
              in the native's life from the beginning of his or her life till as
              far as 100 years. Doing so helps you understand the reasons behind
              not only the ongoing circumstances but also what's to come for you
              in the future. So if in any way you are confused about life, the
              online kundli can be your saviour. Having said that, make sure you
              try the fre online kunldi, and let us know what you feel about it.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <div>
              <p className="text-[32px]">Saved Kundli</p>
            </div>
            <div className="h-[464px]  rounded-3xl border-2 border-[#A9A9A9]">
              <div>
                <div className="flex flex-col items-center">
                  <div>
                    <img
                      className="h-[350px]"
                      src="/kundliicons/freekundli.png"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2">
                    <p className="text-center text-[22px]">
                      Please Log in to see your saved Kundli
                    </p>
                    <button className="rounded-md bg-[#F9B800] px-2 py-1 font-bold">
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p className="text-[32px]">New Kundli</p>
            </div>
            <div className="h-[464px]  rounded-3xl border-2 border-[#A9A9A9]">
              <div className="w-full py-4 px-2">
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-col space-y-3">
                    <div className="flex flex-col gap-4 py-3 md:flex-row">
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

                    <div className="flex flex-col gap-4 py-3 md:flex-row ">
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

                    <div className="flex flex-col gap-4 py-3 md:flex-row">
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

                    <div className="flex flex-col gap-4 py-3 md:flex-row">
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
                    <div className="items-center">
                      <button
                        type="submit"
                        className="w-full rounded-xl bg-[#D3B160] py-2  px-5 font-semibold text-black"
                      >
                        Genertate the Kundli
                      </button>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default GenerateKundli;
