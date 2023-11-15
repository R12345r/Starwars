import React from "react";

const Welcome = () => {
  return (
    <div className="absolute top-[calc(50%_-_232px)] left-[223px] w-[1143px] flex flex-col items-center justify-start text-[22px] text-darkslategray font-open-sans">
      <div className="rounded-xl bg-white-1 shadow-[0px_7px_34px_rgba(23,_23,_37,_0.25)] box-border w-[695px] flex flex-col items-start justify-start p-6 gap-[12px] border-[2px] border-solid border-gainsboro">
        <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
          <div className="self-stretch relative h-[218px]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/rectangle-6@2x.png"
            />
          </div>
          <div className="w-[301px] flex flex-col items-start justify-start">
            <b className="self-stretch relative tracking-[0.14px] leading-[24px]">
              Welcome to Star Wars Dashboard
            </b>
          </div>
        </div>
        <div className="self-stretch relative text-sm tracking-[0.14px] leading-[20px] opacity-[0.8]">
          Star Wars is an American epic space opera multimedia franchise created
          by George Lucas, which began with the eponymous 1977 film and quickly
          became a worldwide pop culture phenomenon.
        </div>
      </div>
    </div>
  );
};

export default Welcome;
