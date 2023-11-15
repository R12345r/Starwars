const Details = () => {
  return (
    <div className="relative bg-midnightblue w-full h-[1004px] text-left text-[20px] text-white-1 font-h6-18px-semibold">
      <div className="absolute top-[0px] left-[0px] h-[1004px] flex flex-col items-center justify-start gap-[20px]">
        <div className="relative w-[400px] h-[62px]">
          <div className="absolute top-[0px] left-[0px] bg-midnightblue box-border w-[400px] flex flex-col items-center justify-start py-4 px-5 border-b-[1px] border-solid border-white-1">
            <div className="w-[343px] flex flex-row items-center justify-between">
              <div className="relative tracking-[0.1px] leading-[30px] font-medium">
                Movie Details
              </div>
              <img
                className="relative w-6 h-6"
                alt=""
                src="/componenticonic-close.svg"
              />
            </div>
          </div>
        </div>
        <div className="bg-midnightblue h-[814px] overflow-hidden shrink-0 flex flex-col items-start justify-start p-2.5 box-border gap-[10px] text-sm font-body-sm-14px-roboto">
          <div className="flex flex-col items-start justify-start gap-[16px]">
            <div className="w-[360px] flex flex-col items-start justify-start gap-[8px]">
              <div className="relative leading-[22px]">Image</div>
              <div className="self-stretch rounded-lg bg-black-dark-100 box-border h-[244px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-4 gap-[4px] border-[1px] border-solid border-black-dark-200">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/frame-668.svg"
                />
                <img
                  className="relative w-[400px] h-[275px] object-cover"
                  alt=""
                  src="/image-4@2x.png"
                />
              </div>
            </div>
            <div className="w-[360px] flex flex-col items-start justify-start gap-[8px]">
              <div className="relative leading-[22px]">Title</div>
              <div className="self-stretch rounded-lg bg-black-dark-100 overflow-hidden flex flex-row items-center justify-center py-2.5 px-4 gap-[4px] text-xs text-text-black font-h6-18px-semibold border-[1px] border-solid border-black-dark-200">
                <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                  Star Wars
                </div>
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/frame-668.svg"
                />
              </div>
            </div>
            <div className="w-[360px] flex flex-col items-start justify-start gap-[8px]">
              <div className="relative leading-[22px]">Opening Crawl</div>
              <div className="self-stretch rounded-lg bg-black-dark-100 box-border h-[74px] overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-4 gap-[4px] text-xs text-text-black font-h6-18px-semibold border-[1px] border-solid border-black-dark-200">
                <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                  Lorem ipsum dolor sit amet consectetur. Sit.
                </div>
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/frame-668.svg"
                />
              </div>
            </div>
            <div className="w-[360px] flex flex-col items-start justify-start gap-[8px]">
              <div className="relative leading-[22px]">Genere</div>
              <div className="self-stretch rounded-lg bg-black-dark-100 overflow-hidden flex flex-row items-center justify-center py-2.5 px-4 gap-[4px] text-xs text-text-black font-h6-18px-semibold border-[1px] border-solid border-black-dark-200">
                <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                  Super Hero
                </div>
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/frame-668.svg"
                />
              </div>
            </div>
          </div>
          <div className="hidden flex-col items-start justify-start gap-[16px] text-black-dark-700">
            <div className="w-[360px] flex flex-col items-start justify-start gap-[8px]">
              <div className="relative leading-[22px]">Unit Type</div>
              <div className="self-stretch rounded-lg bg-black-dark-100 overflow-hidden flex flex-row items-center justify-center py-2.5 px-4 gap-[4px] text-xs text-lightslategray font-h6-18px-semibold border-[1px] border-solid border-black-dark-200">
                <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                  e.g. Orchid Island
                </div>
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/frame-668.svg"
                />
              </div>
            </div>
            <div className="w-[360px] flex flex-col items-start justify-start gap-[8px]">
              <div className="relative leading-[22px]">Configuration</div>
              <div className="self-stretch rounded-lg bg-black-dark-100 overflow-hidden flex flex-row items-center justify-center py-2.5 px-4 gap-[4px] text-xs text-lightslategray font-h6-18px-semibold border-[1px] border-solid border-black-dark-200">
                <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                  Select Configuration
                </div>
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/frame-668.svg"
                />
              </div>
            </div>
            <div className="w-[360px] flex flex-col items-start justify-start gap-[8px]">
              <div className="relative leading-[22px]">BHK Type</div>
              <div className="self-stretch rounded-lg bg-black-dark-100 overflow-hidden flex flex-row items-center justify-center py-2.5 px-4 gap-[4px] text-xs text-lightslategray font-h6-18px-semibold border-[1px] border-solid border-black-dark-200">
                <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                  Select BHK Type
                </div>
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/frame-668.svg"
                />
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/frame-668.svg"
                />
              </div>
            </div>
            <div className="relative w-[360px] h-[74px]">
              <div className="absolute top-[0px] left-[0px] w-[360px] flex flex-col items-start justify-start gap-[8px]">
                <div className="relative leading-[22px]">Carpet Area</div>
                <div className="self-stretch rounded-lg bg-black-dark-100 overflow-hidden flex flex-row items-center justify-center py-3 pr-2 pl-4 gap-[4px] text-xs text-lightslategray font-h6-18px-semibold border-[1px] border-solid border-black-dark-200">
                  <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                    e.g. 1500
                  </div>
                  <div className="relative tracking-[0.1px] leading-[20px] text-black-dark-700 inline-block w-[35px] h-5 shrink-0">
                    Sq. Ft.
                  </div>
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/frame-668.svg"
                  />
                </div>
              </div>
              <div className="absolute top-[29.52px] left-[277.52px] box-border w-[0.95px] h-[44.95px] border-r-[1px] border-solid border-gainsboro" />
            </div>
            <div className="w-[360px] flex flex-col items-start justify-start gap-[8px]">
              <div className="relative leading-[22px]">Super Area</div>
              <div className="self-stretch rounded-lg bg-black-dark-100 overflow-hidden flex flex-row items-center justify-center py-3 pr-2 pl-4 gap-[4px] text-xs text-lightslategray font-h6-18px-semibold border-[1px] border-solid border-black-dark-200">
                <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                  e.g. 1500
                </div>
                <div className="relative tracking-[0.1px] leading-[20px] text-black-dark-700 inline-block w-[35px] h-5 shrink-0">
                  Sq. Ft.
                </div>
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/frame-668.svg"
                />
              </div>
            </div>
            <div className="w-[360px] flex flex-col items-start justify-start gap-[8px]">
              <div className="relative leading-[22px]">Built up Area</div>
              <div className="self-stretch rounded-lg bg-black-dark-100 overflow-hidden flex flex-row items-center justify-center py-3 pr-2 pl-4 gap-[4px] text-xs text-lightslategray font-h6-18px-semibold border-[1px] border-solid border-black-dark-200">
                <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                  e.g. 1500
                </div>
                <div className="relative tracking-[0.1px] leading-[20px] text-black-dark-700 inline-block w-[35px] h-5 shrink-0">
                  Sq. Ft.
                </div>
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/frame-668.svg"
                />
              </div>
            </div>
            <div className="w-[360px] flex flex-col items-start justify-start gap-[8px]">
              <div className="relative leading-[22px]">Facing</div>
              <div className="self-stretch rounded-lg bg-black-dark-100 overflow-hidden flex flex-row items-center justify-center py-2.5 px-4 gap-[4px] text-xs text-lightslategray font-h6-18px-semibold border-[1px] border-solid border-black-dark-200">
                <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                  e.g. North
                </div>
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/frame-668.svg"
                />
              </div>
            </div>
            <div className="w-[360px] flex flex-col items-start justify-start gap-[8px]">
              <div className="relative leading-[22px]">Price</div>
              <div className="self-stretch rounded-lg bg-black-dark-100 overflow-hidden flex flex-row items-center justify-center py-2.5 px-4 gap-[4px] text-xs text-lightslategray font-h6-18px-semibold border-[1px] border-solid border-black-dark-200">
                <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                  e.g. 10,00,000
                </div>
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/frame-668.svg"
                />
              </div>
            </div>
            <div className="w-[360px] flex flex-col items-start justify-start gap-[8px]">
              <div className="relative leading-[22px]">Parking Slots</div>
              <div className="self-stretch rounded-lg bg-black-dark-100 overflow-hidden flex flex-row items-center justify-center py-2.5 px-4 gap-[4px] text-xs text-lightslategray font-h6-18px-semibold border-[1px] border-solid border-black-dark-200">
                <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                  e.g. 1
                </div>
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/frame-668.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-midnightblue box-border w-[400px] flex flex-col items-center justify-end pt-5 px-2.5 pb-6 text-lg text-black-dark-100 font-inter border-t-[1px] border-solid border-gainsboro">
          <div className="self-stretch flex flex-row items-start justify-start">
            <div className="flex-1 rounded-lg bg-mediumvioletred flex flex-row items-center justify-center py-2.5 px-4">
              <div className="relative leading-[24px] font-semibold">Close</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
