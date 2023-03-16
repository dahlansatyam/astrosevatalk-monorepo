import React, { useState } from "react";
import { Section } from "../components/Layout";
import Assignment from "../components/Signup/Assignment";
import OtherDetail from "../components/Signup/OtherDetail";
import PersonalDetail from "../components/Signup/PersonalDetail";
import SkillDetail from "../components/Signup/SkillDetail";

type Props = {};
const details = [
  {
    title: "Personal Details",
  },
  {
    title: "Skill Details",
  },
  {
    title: "Other Details",
  },
  {
    title: "Assignment",
  },
];

function Signup({}: Props) {
  const [activeId, setActiveId] = useState(1);
  const getMainContent = (step: number, setActiveId: any) => {
    switch (step) {
      case 1:
        return <PersonalDetail setActiveId={setActiveId} />;
      case 2:
        return <SkillDetail />;
      case 3:
        return <OtherDetail />;
      case 4:
        return <Assignment />;
      // case 5:
      //   return <Verification />;
      default:
        throw new Error("Unknown Step");
    }
  };
  return (
    <div className="bg-gray-100 py-20">
      <Section>
        <div className="flex flex-col space-y-12">
          <div className="flex space-x-32 mx-auto">
            {details?.map((item, index) => (
              <div key={index} className="flex justify-start">
                <div className="lg:flex hidden flex-col justify-center items-center space-y-2">
                  <div
                    className={`w-6 h-6 rounded-full flex justify-center items-center ${
                      index <= activeId - 1 ? "bg-primary" : ""
                    }`}
                  >
                    <div
                      className={`w-4 h-4 relative rounded-full ${
                        index <= activeId - 1 ? "bg-secondary" : "bg-gray-300"
                      }`}
                    >
                      {index !== details.length - 1 && (
                        <div className="w-44 top-[6px] border-t left-5 absolute border-gray-600"></div>
                      )}
                    </div>
                  </div>
                  <p
                    className={`text-xs ${
                      index <= activeId - 1
                        ? "text-gray-900 font-semibold"
                        : "text-gray-400 font-medium"
                    }`}
                  >
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="">{getMainContent(activeId, setActiveId)}</div>
        </div>
      </Section>
    </div>
  );
}

export default Signup;
