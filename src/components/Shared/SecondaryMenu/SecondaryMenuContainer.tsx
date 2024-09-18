import { FC } from "react";
import { SecondaryMenuItem } from "./SecondaryMenuItem";
import { SecondaryMenuUserItem } from "./SecondaryMenuUserItem";
import { SecondaryMenuGroupItem } from "./SecondaryMenuIGrouptem";

type Props = {
  data: any[];
  type: string;
};

export const SecondaryMenuContainer: FC<Props> = ({
  data,
  type,
}): JSX.Element => {
  return (
    <div className="w-full h-full">
      {data.map((item: any, index: number) => {
        return type.toUpperCase() === "USER" ? (
          <SecondaryMenuUserItem key={index} item={item} type={type} />
        ) : type.toUpperCase() === "GROUP" ? (
          <SecondaryMenuGroupItem key={index} item={item} type={type} />
        ) : (
          <SecondaryMenuItem key={index} item={item} type={type} />
        );
      })}
    </div>
  );
};

export default SecondaryMenuContainer;
