import React from "react";

type Props = {};

const Alert = (props: Props) => {
  return (
    <div className="py-6 flex items-center justify-center">
      <div className="flex w-[538px] justify-between space-x-4 rounded-t-2xl border-4 border-black bg-[#f7cc66]  p-4">
        <div className="flex flex-col items-center justify-center space-y-2">
          {" "}
          <div className="rounded-full bg-[#D3B160] p-1">
            <div className="rounded-full bg-[#FEE8A0] p-1">
              <img src="/chat.png" alt="chat" />
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <p className="font-[georgia] text-[22px] font-semibold text-black">
            Anupam
          </p>
          <div className="space-y-2">
            <p className="text-base text-[#FFF9EA]">
              Vedic, Vastu, Face reading
            </p>
            <p className="text-xs text-[#FFF9EA]">English, Hindi, Punjabi</p>
            <p className="text-xs text-[#FFF9EA]">Experience: 3 years</p>
          </div>
        </div>
        <div className="flex items-end justify-end">
          <button className=" bg-black rounded-md py-1 px-5 text-base font-semibold text-white">
            Calling
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
