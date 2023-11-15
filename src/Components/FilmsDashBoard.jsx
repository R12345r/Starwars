import Films from "./Films";
import Header from "./Header";
import SideBar from "./SideBar";
import React, { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
const FilmsDashBoard = () => {
  const [open, setOpen] = useState(true);
  const handleShow = () => setOpen(true);
  const cancelButtonRef = useRef(null);
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"></Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <div className="relative [background:linear-gradient(#03123d,_#03123d),_linear-gradient(251.62deg,_#071047,_#fa1c8d)] w-full h-[696px] overflow-hidden text-left text-xs text-darkslateblue font-heading-semi-bold">
        {/* Header code Here */}

        <Header />
        {/* sidebar code here */}
        <SideBar />
        {/* Welcome page */}

        <Films />
      </div>
    </>
  );
};

export default FilmsDashBoard;
