import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

export function MenuDefault() {
  const [open, setOpen] = useState(false);

  console.log("open state: ", open);

  return (
    <div>
      <DropdownMenu.Root open={open}>
        <DropdownMenu.Trigger asChild>
          <div
            className="border border-red-500 w-[50px]"
            onClick={() => {
              console.log("clicked");
              setOpen((prev) => !prev);
            }}
          >
            <BsThreeDotsVertical className="w-[50%] h-[50%] text-[#05D397]" />
          </div>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            onFocusOutside={() => {
              console.log("on focus outside called");
            }}
            className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
            sideOffset={5}
          >
            <DropdownMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
              New Tab{" "}
              <div className="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                ⌘+T
              </div>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
              New Tab{" "}
              <div className="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                ⌘+T
              </div>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}
