import { FC } from "react";
import { SecondaryMenuItem } from "./SecondaryMenuItem";
import { SecondaryMenuUserItem } from "./SecondaryMenuUserItem";
import { SecondaryMenuGroupItem } from "./SecondaryMenuIGrouptem";

type Props = {
  data: any[];
  type: string;
  refetchHandler: () => void;
};

export const SecondaryMenuContainer: FC<Props> = ({
  data,
  type,
  refetchHandler,
}): JSX.Element => {
  return (
    <div className="w-full h-full">
      {data.map((item: any, index: number) => {
        return type.toUpperCase() === "USER" ? (
          <SecondaryMenuUserItem
            key={index}
            item={item}
            type={type}
            refetchHandler={refetchHandler}
          />
        ) : type.toUpperCase() === "GROUP" ? (
          <SecondaryMenuGroupItem
            key={index}
            item={item}
            type={type}
            refetchHandler={refetchHandler}
          />
        ) : (
          <SecondaryMenuItem
            key={index}
            item={item}
            type={type}
            refetchHandler={refetchHandler}
          />
        );
      })}
    </div>
  );
};

export default SecondaryMenuContainer;
