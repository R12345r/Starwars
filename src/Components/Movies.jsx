import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "./Lodaer";

const Movies = () => {
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
              <div className="flex flex-row items-center justify-start text-center text-sm text-grey-2">
                <div className="relative w-[100px] h-8">
                  <img
                    className="absolute h-full w-[68%] top-[0%] right-[32%] bottom-[0%] left-[0%] rounded-tl rounded-tr-none rounded-br-none rounded-bl max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/horizontal-grouped-icon-tab.svg"
                  />
                  <div className="absolute top-[18.75%] left-[28%] tracking-[0.5px] leading-[20px] font-medium">
                    Grid
                  </div>
                  <img
                    className="absolute h-full w-[32%] top-[0%] right-[0%] bottom-[0%] left-[68%] rounded-tl-none rounded-tr rounded-br rounded-bl-none max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/horizontal-grouped-icon-tab1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-sm">
            <div className="self-stretch flex flex-col items-center justify-start pt-2.5 px-0 pb-5">
              <div className="self-stretch flex flex-col items-center justify-start gap-[20px]">
                <div className="self-stretch flex flex-wrap flex-row items-start justify-start py-0 px-5 gap-[20px]">
                  {People.map((items, index) => {
                    return (
                      <div
                        key={index}
                        className="flex-1 flex  flex-col items-start justify-start gap-[4px]"
                      >
                        <div className="self-stretch relative rounded-lg bg-white-2 h-40 bg-white" >
                        <img src = "https://picsum.photos/seed/picsum/200/300" className="h-40 rounded-lg"  style={{width:"100%"}}/>
                        </div>
                        <div className="self-stretch rounded-lg bg-ghostwhite-300 flex flex-row items-center justify-start py-3 pr-3 pl-4">
                          <div className="flex-1 flex flex-row items-center justify-between">
                            <div className="w-[200px] flex flex-row items-center justify-start gap-[12px] ">
                              <img
                                className="relative w-6 h-6 overflow-hidden shrink-0"
                                alt=""
                                src="/filmreel1.svg"
                              />
                              <div className="relative tracking-[0.5px] leading-[20px] font-medium">
                                {items.name}
                              </div>
                            </div>
                            <div className="rounded-md bg-ghostwhite-300 flex flex-row items-start justify-start p-1">
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
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Movies;
