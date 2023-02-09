import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { XCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Button, Form, Input } from "./forms";
import { useForm } from "react-hook-form";

type Props = {
  isOpen?: boolean;
  setIsOpen: any;
};

function LoginModal({ isOpen, setIsOpen }: Props) {
  const closeModal = () => {
    setIsOpen(false);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-sm transform space-y-6 overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all lg:max-w-lg">
                  <Dialog.Title
                    as="h3"
                    className="text-dark relative bg-primary py-2 text-lg font-medium leading-6"
                  >
                    <p className="text-center">Continue with Phone</p>
                    <div className="absolute right-4 top-2">
                      <XMarkIcon
                        onClick={closeModal}
                        className="w-6 cursor-pointer font-bold text-gray-800 hover:text-gray-900"
                      />
                    </div>
                  </Dialog.Title>

                  <div className="p-4 lg:px-12 lg:pb-12">
                    <p className="mx-auto w-3/4 text-center text-[18px] font-medium">
                      You will receive a 6 digit code for verification
                    </p>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                      <div className="mt-5">
                        <Input
                          type="string"
                          id="phoneNumber"
                          placeholder=" "
                          name="phoneNumber"
                          maxLength="10"
                          label="Enter Mobile Number"
                          register={register}
                        />
                      </div>
                      <div className="space-y-2">
                        {" "}
                        <Button
                          className="text-dark mx-auto w-full rounded-lg bg-primary py-2 text-lg font-bold"
                          btnText="GET OTP -->"
                        />
                        <p className="text-center text-[13px] text-gray-500">
                          By Signing up, you agree to our{" "}
                          <span className="cursor-pointer text-blue-600 underline hover:text-blue-800">
                            Terms of Use
                          </span>{" "}
                          and{" "}
                          <span className="cursor-pointer text-blue-600 underline hover:text-blue-800">
                            Privacy Policy
                          </span>
                        </p>
                      </div>
                    </Form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default LoginModal;
