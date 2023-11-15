const Modal = () => {
  return (
    <div className="relative rounded-xl bg-white shadow-[0px_20px_24px_-4px_rgba(16,_24,_40,_0.08),_0px_8px_8px_-4px_rgba(16,_24,_40,_0.03)] w-full overflow-hidden flex flex-col items-center justify-start p-6 box-border gap-[32px] text-left text-[18px] text-gray-900 font-text-md-medium">
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
        <img
          className="relative rounded-[28px] w-14 h-14"
          alt=""
          src="/featured-icon.svg"
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <div className="self-stretch relative leading-[28px] font-medium">
            Caution!
          </div>
          <div className="self-stretch relative text-[14px] leading-[20px] text-gray-500">
            <span>{`Are you sure you want to Delete `}</span>
            <b>$NAME</b>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[12px] text-base text-gray-700">
        <div className="flex-1 rounded-lg flex flex-row items-start justify-start">
          <div className="flex-1 rounded-lg bg-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-2.5 px-[18px] border-[1px] border-solid border-grey-stroke">
            <div className="relative leading-[24px] font-medium">Cancel</div>
          </div>
        </div>
        <div className="flex-1 rounded-lg flex flex-row items-start justify-start text-white">
          <div className="flex-1 rounded-lg bg-tomato shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-2.5 px-[18px] border-[1px] border-solid border-tomato">
            <div className="relative leading-[24px] font-medium">Yes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
