import { GoPlusCircle } from "react-icons/go";
import { FC } from "react";
import { SecondaryMenuHeaderDropdown } from "./SecondaryMenuHeaderDropdown";
import { DropDownMenu } from "../../UI/DropDownMenu";

type Props = {
  type: string;
};

export const SecondaryMenuHeader: FC<Props> = ({ type }): JSX.Element => {
  console.log("group L", type);

  return (
    <div className="w-full h-[50px] flex items-center  border-b-2 border-b-[#353646]">
      <div className="w-[230px] h-full flex-grow p-2 flex justify-center items-center">
        <h4 className="truncate text-lg">Sender</h4>
      </div>
      {type.toUpperCase() === "GROUP" && (
        <div className="w-[60px] h-full flex-grow-0 flex-shrink-0  flex justify-center items-center">
          <DropDownMenu
            data={SecondaryMenuHeaderDropdown}
            MainIcon={GoPlusCircle}
          />
        </div>
      )}
    </div>
  );
};
