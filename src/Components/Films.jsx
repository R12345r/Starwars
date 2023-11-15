import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "./Lodaer";
const Films = () => {
  const [People, setPeople] = useState([]);
  const [Loading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    const { data } = await axios({
      method: "get",
      url: "https://swapi.dev/api/people/",
    });
    setPeople(data.results);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {Loading ? (
        <Loader />
      ) : (
        <div className="absolute top-[77px] left-[223px] w-[1143px] flex flex-col items-start justify-start text-xl text-white">
          <div className="w-[1143px] flex flex-col items-start justify-center py-3 px-5 box-border">
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="relative leading-[28px] font-semibold">Films</div>
              <div className="relative w-[100px] h-8 text-center text-sm text-black-black">
                <img
                  className="absolute h-full w-[36.36%] top-[0%] right-[63.64%] bottom-[0%] left-[0%] rounded-tl-none rounded-tr rounded-br rounded-bl-none max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/horizontal-grouped-icon-tab.svg"
                />
                <div className="absolute h-full w-[63.64%] top-[100%] right-[-63.64%] bottom-[-100%] left-[100%] rounded-tl rounded-tr-none rounded-br-none rounded-bl bg-grey-3 box-border overflow-hidden [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1px] border-solid border-grey-stroke">
                  <img
                    className="absolute top-[calc(50%_-_44px)] left-[calc(50%_-_89.82px)] w-6 h-6 overflow-hidden"
                    alt=""
                    src="/view-list.svg"
                  />
                  <div className="absolute w-[46.43%] top-[81.25%] left-[53.57%] tracking-[0.5px] leading-[20px] font-medium inline-block [transform:_rotate(180deg)] [transform-origin:0_0]">
                    List
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1143px] overflow-hidden flex flex-col items-start justify-start py-2.5 px-5 box-border text-center text-sm">
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="w-[374px] flex flex-col items-start justify-start text-left">
                <div className="self-stretch bg-slategray flex flex-col items-start justify-start text-center">
                  <div className="self-stretch rounded-tl-md rounded-tr-none rounded-br-none rounded-bl-md bg-slategray h-10 flex flex-row items-center justify-start py-0 px-4 box-border">
                    <div className="relative tracking-[0.5px] leading-[20px] font-medium">
                      Name
                    </div>
                  </div>
                </div>
                {People.map((items, index) => {
                  return (
                    <div
                      key={index}
                      className="self-stretch box-border h-[54px] flex flex-row items-center justify-start py-0 px-4 border-b-[1px] border-solid border-grey-stroke"
                    >
                      <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                          alt=""
                          src="/filmreel1.svg"
                        />
                        <div className="flex-1 relative tracking-[0.5px] leading-[20px] font-medium">
                          {items.name}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-slategray h-10 flex flex-row items-center justify-start py-0 px-4 box-border">
                  <div className="relative tracking-[0.5px] leading-[20px] font-medium">
                    Director
                  </div>
                </div>
                {People.map((items, index) => {
                  return (
                    <div
                      key={index}
                      className="self-stretch box-border h-[54px] flex flex-row items-center justify-start py-0 px-4 border-b-[1px] border-solid border-grey-stroke"
                    >
                      <div className="relative tracking-[0.5px] leading-[20px] font-medium">
                        {items.name}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-slategray h-10 flex flex-row items-center justify-start py-0 px-4 box-border">
                  <div className="relative tracking-[0.5px] leading-[20px] font-medium">
                    Release Date
                  </div>
                </div>
                {People.map((items, index) => {
                  return (
                    <div
                      key={index}
                      className="self-stretch box-border h-[54px] flex flex-row items-center justify-start py-0 px-4 border-b-[1px] border-solid border-grey-stroke"
                    >
                      <div className="relative tracking-[0.5px] leading-[20px] font-medium">
                        {items.name}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-slategray h-10 flex flex-row items-center justify-start py-0 px-4 box-border">
                  <div className="relative tracking-[0.5px] leading-[20px] font-medium">
                    Action
                  </div>
                </div>
                {People.map((items, index) => {
                  return (
                    <div
                      key={index}
                      className="self-stretch box-border h-[54px] flex flex-row items-center justify-end py-0 px-[15px] border-b-[1px] border-solid border-grey-stroke"
                    >
                      <div className="rounded-md flex flex-row items-start justify-start p-2">
                        <div className="flex flex-row items-center justify-center gap-[17.45px]">
                          <img
                            className="relative w-6 h-6"
                            alt=""
                            src="/componenticonic-more.svg"
                          />
                          <img
                            className="relative w-[17.45px] h-[17.45px] hidden"
                            alt=""
                            src="/layer-1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Films;
