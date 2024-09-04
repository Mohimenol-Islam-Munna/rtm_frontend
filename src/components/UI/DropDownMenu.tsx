import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { FC, useState } from "react";
import { IconType } from "react-icons";
import { DataItemType } from "../../types/DropDownTypes";

type Props = {
  data: DataItemType[];
  MainIcon: IconType;
  ChildComponent?: any;
  width?: number;
  align?: "start" | "center" | "end";
  chatStateHandler?: (data: string) => void;
};

export const DropDownMenu: FC<Props> = ({
  data,
  align,
  width,
  MainIcon,
  ChildComponent,
  chatStateHandler,
}): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu.Root
      open={open}
      onOpenChange={() => {
        setOpen((prev) => !prev);
      }}
    >
      <DropdownMenu.Trigger asChild>
        <div className="flex items-center justify-center">
          <MainIcon size="25" className="text-[#05D397] hover:cursor-pointer" />
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align={align || "end"}
          sideOffset={15}
          alignOffset={0}
          className={`${
            width ? `w-[${width}px]` : "w-[200px]"
          } bg-[#2E2F40] rounded-xl border-2 border-[#05D397] text-white z-50 overflow-hidden`}
        >
          {ChildComponent ? (
            <>
              {open && (
                <ChildComponent
                  open={open}
                  chatStateHandler={chatStateHandler}
                />
              )}
            </>
          ) : (
            data.map(({ Icon, ...item }: DataItemType, index: number) => {
              return (
                <DropdownMenu.Item
                  key={index}
                  className={`hover:outline-none hover:bg-[#272838] first:rounded-t-md last:rounded-b-md hover:cursor-pointer p-1 px-2 ${
                    index === 0 ? "mt-0" : " mt-1"
                  }`}
                >
                  <div className="flex items-center group">
                    <div>{<Icon size="18" className="text-[#05D397]" />}</div>
                    <div className="flex-grow ml-1 group-hover:text-[#05D397]">
                      {item.name}
                    </div>
                  </div>
                </DropdownMenu.Item>
              );
            })
          )}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
