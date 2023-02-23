import React from 'react';
import {Bars3Icon} from "@heroicons/react/20/solid";

export default function TopBar({
  backgroundColor = 'bg-zinc-900',
  textColor = 'text-zinc-50',
  toggleSidebarExtended = () => {},
  sidebarExtended = true,
  components = {
    left: () => {},
    middle: () => {},
    right: () => {}
  }
}) {
  return (
    <div className={`w-full lg:px-6 px-2 py-2 flex lg:justify-between drop-shadow-xl ${backgroundColor} ${textColor}`}>
      <div className={"md:w-1/3 flex flex-row"}>
        <Bars3Icon
          onClick={ () => { toggleSidebarExtended() } }
          className={`${sidebarExtended && 'rotate-180'} cursor-pointer transition-all duration-300 w-7 h-7 my-auto mx-3 `}
        />
        { components.left && components.left }
      </div>
      <div className="lg:mx-auto md:w-1/3 grow flex justify-center ">
        { components.middle && components.middle }
      </div>
      <div className="lg:flex hidden justify-end w-1/3">
        { components.right && components.right }
      </div>
    </div>
  )
}