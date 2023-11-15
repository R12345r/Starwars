import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const SideBar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="absolute top-[76px] left-[0px] bg-midnightblue-200 h-[620px] flex flex-col items-start justify-start text-base text-grey-1">
      <div className="relative box-border w-56 h-[52px] hidden border-t-[1px] border-solid border-grey-stroke border-b-[1px]">
        <div className="absolute top-[14px] left-[16px] tracking-[-0.01em] leading-[24px] font-semibold">
          Settings
        </div>
      </div>
      <div className="w-[223px] h-[576px] flex flex-col items-start justify-start py-2.5 pr-3.5 pl-4 box-border gap-[10px] text-sm text-white-1">
        <div
          className="self-stretch rounded-md bg-mediumvioletred flex flex-row items-center justify-start gap-[49px]"
          onClick={toggleMenu}
        >
          <div
            className={`flex-1 rounded-md flex flex-row items-center justify-center py-2 px-3 ${
              isMenuOpen ? "bg-red-500" : ""
            }`}
          >
            <div className="flex-1 flex flex-row items-center justify-between">
              <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src="/foldersimple.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[20px] font-medium">
                  Films
                </div>
              </div>
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                alt=""
                src={isMenuOpen ? "/caretright.svg" : "/caretright1.svg"}
              />
            </div>
          </div>
          <img className="relative w-6 h-6 hidden" alt="" src="/layer-1.svg" />
        </div>
        {isMenuOpen ? (
          <>
            <div
              onClick={() => navigate("/movies")}
              className="self-stretch rounded-md bg-ghostwhite-100 flex flex-row items-center justify-start gap-[49px] border-[1px] border-solid border-black"
            >
              <div className="flex-1 rounded-md flex flex-row items-center justify-center py-2 pr-3 pl-7 ">
                <div className="flex-1 flex flex-row items-center justify-between">
                  <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/filmreel.svg"
                    />
                    <div className="flex-1 relative tracking-[0.5px] leading-[20px] font-medium">
                      Movie Name
                    </div>
                  </div>
                  <img
                    className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/caretright1.svg"
                  />
                </div>
              </div>
              <img
                className="relative w-6 h-6 hidden"
                alt=""
                src="/layer-1.svg"
              />
            </div>
            <div
              onClick={() => navigate("/films")}
              className="self-stretch rounded-md bg-ghostwhite-100 flex flex-row items-center justify-start gap-[49px] border-[1px] border-solid border-black"
            >
              <div className="flex-1 rounded-md flex flex-row items-center justify-center py-2 pr-3 pl-7 ">
                <div className="flex-1 flex flex-row items-center justify-between">
                  <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/filmreel.svg"
                    />
                    <div className="flex-1 relative tracking-[0.5px] leading-[20px] font-medium">
                      Films
                    </div>
                  </div>
                  <img
                    className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/caretright1.svg"
                  />
                </div>
              </div>
              <img
                className="relative w-6 h-6 hidden"
                alt=""
                src="/layer-1.svg"
              />
            </div>
          </>
        ) : null}

        <div className="self-stretch rounded-md bg-ghostwhite-200 flex flex-row items-center justify-start gap-[49px]">
          <div className="flex-1 rounded-md flex flex-row items-center justify-center py-2 px-3">
            <div className="flex-1 flex flex-row items-center justify-between">
              <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src="/foldersimple.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[20px] font-medium">
                  People
                </div>
              </div>
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                alt=""
                src="/caretright1.svg"
              />
            </div>
          </div>
          <img className="relative w-6 h-6 hidden" alt="" src="/layer-1.svg" />
        </div>
        <div className="self-stretch rounded-md bg-ghostwhite-200 flex flex-row items-center justify-start gap-[49px]">
          <div className="flex-1 rounded-md flex flex-row items-center justify-center py-2 px-3">
            <div className="flex-1 flex flex-row items-center justify-between">
              <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src="/foldersimple.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[20px] font-medium">
                  Planets
                </div>
              </div>
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                alt=""
                src="/caretright1.svg"
              />
            </div>
          </div>
          <img className="relative w-6 h-6 hidden" alt="" src="/layer-1.svg" />
        </div>
        <div className="self-stretch rounded-md bg-ghostwhite-200 flex flex-row items-center justify-start gap-[49px]">
          <div className="flex-1 rounded-md flex flex-row items-center justify-center py-2 px-3">
            <div className="flex-1 flex flex-row items-center justify-between">
              <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src="/foldersimple.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[20px] font-medium">
                  Species
                </div>
              </div>
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                alt=""
                src="/caretright1.svg"
              />
            </div>
          </div>
          <img className="relative w-6 h-6 hidden" alt="" src="/layer-1.svg" />
        </div>
        <div className="self-stretch rounded-md bg-ghostwhite-200 flex flex-row items-center justify-start gap-[49px]">
          <div className="flex-1 rounded-md flex flex-row items-center justify-center py-2 px-3">
            <div className="flex-1 flex flex-row items-center justify-between">
              <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src="/foldersimple.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[20px] font-medium">
                  Starships
                </div>
              </div>
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                alt=""
                src="/caretright1.svg"
              />
            </div>
          </div>
          <img className="relative w-6 h-6 hidden" alt="" src="/layer-1.svg" />
        </div>
        <div className="self-stretch rounded-md bg-ghostwhite-200 flex flex-row items-center justify-start gap-[49px]">
          <div className="flex-1 rounded-md flex flex-row items-center justify-center py-2 px-3">
            <div className="flex-1 flex flex-row items-center justify-between">
              <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src="/foldersimple.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[20px] font-medium">
                  Vehicles
                </div>
              </div>
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                alt=""
                src="/caretright1.svg"
              />
            </div>
          </div>
          <img className="relative w-6 h-6 hidden" alt="" src="/layer-1.svg" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
