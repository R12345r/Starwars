const FIleDropDown = () => {
  return (
    <div className="relative rounded bg-white box-border w-full flex flex-col items-start justify-start p-2 gap-[4px] text-left text-xs text-text-black font-inter border-[1px] border-solid border-black-dark-200">
      <div className="self-stretch rounded bg-black-dark-200 flex flex-row items-center justify-start py-1 px-2 gap-[16px]">
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <img
            className="relative w-4 h-4 overflow-hidden shrink-0"
            alt=""
            src="/frame.svg"
          />
          <div className="relative tracking-[0.5px] leading-[20px] font-medium">{`View `}</div>
        </div>
        <img
          className="relative w-6 h-6 hidden"
          alt=""
          src="/componenticonic-chevron-down.svg"
        />
      </div>
      <div className="self-stretch rounded flex flex-row items-center justify-start py-1 px-2 gap-[16px]">
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <img
            className="relative w-4 h-4 overflow-hidden shrink-0"
            alt=""
            src="/frame1.svg"
          />
          <div className="relative tracking-[0.5px] leading-[20px] font-medium">
            Download
          </div>
        </div>
        <img
          className="relative w-6 h-6 hidden"
          alt=""
          src="/componenticonic-chevron-down1.svg"
        />
      </div>
      <div className="self-stretch rounded flex flex-row items-center justify-start py-1 px-2 gap-[16px]">
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <img
            className="relative w-4 h-4 overflow-hidden shrink-0"
            alt=""
            src="/frame2.svg"
          />
          <div className="relative tracking-[0.5px] leading-[20px] font-medium">
            Rename
          </div>
        </div>
        <img
          className="relative w-6 h-6 hidden"
          alt=""
          src="/componenticonic-chevron-down2.svg"
        />
      </div>
      <div className="self-stretch rounded flex flex-row items-center justify-start py-1 px-2 gap-[16px]">
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <img
            className="relative w-4 h-4 overflow-hidden shrink-0"
            alt=""
            src="/frame3.svg"
          />
          <div className="relative tracking-[0.5px] leading-[20px] font-medium">
            Share Link
          </div>
        </div>
        <img
          className="relative w-6 h-6 hidden"
          alt=""
          src="/componenticonic-chevron-down3.svg"
        />
      </div>
      <div className="self-stretch rounded flex flex-row items-center justify-start py-1 px-2 gap-[16px]">
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <img
            className="relative w-4 h-4 overflow-hidden shrink-0"
            alt=""
            src="/frame4.svg"
          />
          <div className="relative tracking-[0.5px] leading-[20px] font-medium">
            Move
          </div>
        </div>
        <img
          className="relative w-6 h-6 hidden"
          alt=""
          src="/componenticonic-chevron-down4.svg"
        />
      </div>
      <div className="self-stretch rounded flex flex-row items-center justify-start py-1 px-2 gap-[16px]">
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <img
            className="relative w-4 h-4 overflow-hidden shrink-0"
            alt=""
            src="/locksimple.svg"
          />
          <div className="relative tracking-[0.5px] leading-[20px] font-medium">
            Mark Private
          </div>
        </div>
        <img
          className="relative w-6 h-6 hidden"
          alt=""
          src="/componenticonic-chevron-down5.svg"
        />
      </div>
      <div className="self-stretch rounded flex flex-row items-center justify-start py-1 px-2 gap-[16px] text-tomato font-poppins">
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <img
            className="relative w-4 h-4 overflow-hidden shrink-0"
            alt=""
            src="/frame5.svg"
          />
          <div className="relative tracking-[0.5px] leading-[22px] font-medium">
            Delete
          </div>
        </div>
        <img
          className="relative w-6 h-6 hidden"
          alt=""
          src="/componenticonic-chevron-down6.svg"
        />
      </div>
    </div>
  );
};

export default FIleDropDown;
