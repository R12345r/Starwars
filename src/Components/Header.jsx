import React from "react";

const Header = () => {
  return (
    <div className="absolute top-[0px] left-[0px] bg-midnightblue-100 w-[1366px] flex flex-row items-center justify-between p-5 box-border text-sm text-white-1">
      <img
        className="relative w-[72px] h-9 object-cover"
        alt=""
        src="/image-6@2x.png"
      />
      <div className="flex flex-row items-start justify-start gap-[16px] opacity-[0]">
        <img className="relative w-16 h-8 hidden" alt="" src="/layer-1.svg" />
        <div className="rounded bg-gray box-border w-[216px] h-8 flex flex-row items-center justify-start py-1 px-2 gap-[8px] border-[1px] border-solid border-white-1">
          <div className="flex flex-row items-center justify-start gap-[4px]">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src="/layer-1.svg"
            />
            <div className="relative tracking-[0.5px] leading-[20px]">
              Search
            </div>
          </div>
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
            alt=""
            src="/layer-1.svg"
          />
        </div>
        <div className="rounded hidden flex-row items-center justify-start py-1 px-2 gap-[4px] text-grey-2">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/layer-1.svg"
          />
          <div className="relative tracking-[0.5px] leading-[20px] font-medium">
            Filter
          </div>
        </div>
        <div className="rounded hidden flex-row items-center justify-start py-1 px-2 gap-[4px] text-grey-2">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/layer-1.svg"
          />
          <div className="relative tracking-[0.5px] leading-[20px] font-medium">
            Sort
          </div>
        </div>
        <div className="rounded bg-propacity-blue hidden flex-row items-center justify-start py-1 px-2 gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/layer-1.svg"
          />
          <div className="relative tracking-[0.5px] leading-[20px] font-medium">
            New Upload
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
