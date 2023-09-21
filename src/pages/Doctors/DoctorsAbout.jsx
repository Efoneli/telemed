import React from "react";
import { formateDate } from "../../utils/formateDate";

const DoctorsAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About of
          <span className="text-irishBlueColor font-bold text-24px] leading-9">
            Muhibur Rahman
          </span>
        </h3>
        <p className="text__para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fugiat
          sunt nesciunt illum, quisquam cupiditate fuga saepe reiciendis
          dignissimos iure.
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>

        <ul className="pt-4 md:p-5">
          <li className="flex flex-cl sm:justify-between sm:items-end md:gap-5 mb-[38px]">
            <div>
              <span className="text-irishBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("09-13-2014")} - {formateDate("12-2-2016")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PhD in surgeon
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Appollo Hospital, New york.
            </p>
          </li>
          <li className="flex flex-cl sm:justify-between sm:items-end md:gap-5 mb-[38px]">
            <div>
              <span className="text-irishBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("04-14-2010")} - {formateDate("06-09-2014")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PhD in surgeon
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Appollo Hospital, New york.
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>

        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formateDate("09-13-2014")} - {formateDate("12-2-2016")}
            </span>
            <p className="text-[16px] leading-6 text-textColor font-mediumAQ">
              Sr. Surgeon
            </p>

            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Appollo Hospital, New york.
            </p>
          </li>

          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formateDate("09-13-2014")} - {formateDate("12-2-2016")}
            </span>
            <p className="text-[16px] leading-6 text-textColor font-mediumAQ">
              Sr. Surgeon
            </p>
            
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Appollo Hospital, New york.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorsAbout;
