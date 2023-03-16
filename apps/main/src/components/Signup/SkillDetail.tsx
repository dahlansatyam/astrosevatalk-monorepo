import React from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Input, Select } from "../forms";

type Props = {};

function SkillDetail({}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="max-w-sm lg:max-w-xl mx-auto rounded-lg gap-4 bg-white p-4 grid grid-cols-2">
        <div className="col-span-2 mx-auto flex flex-col items-center justify-center">
          <div className="mt-1 flex items-center">
            <span className="inline-block h-20 w-20 overflow-hidden rounded-full bg-gray-100">
              <svg
                className="h-full w-full text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
          </div>
          <label className="block text-sm text-center mt-3 font-medium text-gray-700">
            <p>
              {" "}
              Profile pic*{" "}
              <span className="text-gray-500">(jpg, png, jpeg only)</span>
            </p>
            <p className="text-xs">(Please upload image below 5mb)</p>
          </label>
        </div>
        <div>
          <Select
            errors={errors}
            required={true}
            label=""
            id="gender"
            name="gender"
            register={register}
            options={[
              { name: "Male", value: "male" },
              { name: "Female", value: "female" },
              { name: "Other", value: "other" },
            ]}
          />
        </div>
        <div>
          <Input
            type="date"
            id="dob"
            placeholder=" "
            name="dob"
            label="DOB*"
            register={register}
          />
        </div>
        <div>
          <Select
            errors={errors}
            required={true}
            label=""
            id="primaryskills"
            name="primary skills"
            register={register}
            options={[
              { name: "Male", value: "male" },
              { name: "Female", value: "female" },
              { name: "Other", value: "other" },
            ]}
          />
        </div>
        <div>
          <Select
            errors={errors}
            required={true}
            label=""
            id="allSkills"
            name="all Skills"
            register={register}
            options={[
              { name: "Male", value: "male" },
              { name: "Female", value: "female" },
              { name: "Other", value: "other" },
            ]}
          />
        </div>
        <div>
          <Select
            errors={errors}
            required={true}
            label=""
            id="language"
            name="language"
            register={register}
            options={[
              { name: "Male", value: "male" },
              { name: "Female", value: "female" },
              { name: "Other", value: "other" },
            ]}
          />
        </div>
        <Input
          type="string"
          id="experience"
          placeholder=" "
          name="experience"
          label="Experience in years*"
          register={register}
          errors={errors}
        />
        <Input
          type="string"
          id="hours"
          placeholder=" "
          name="hours"
          label="Hours you can contribute daily?*"
          register={register}
          errors={errors}
        />
        <Input
          type="string"
          id="where"
          placeholder=" "
          name="where"
          label="Where did you hear about Astrotalk?"
          register={register}
          errors={errors}
        />
        <div className="col-span-2">
          {" "}
          <Button
            className="bg-primary text-dark px-6 my-6 py-2 w-1/2 font-bold mx-auto text-lg rounded-lg"
            btnText="Next"
          />
        </div>
      </div>
    </Form>
  );
}

export default SkillDetail;
