import { FC } from "react";
import { SecondaryMenuItem } from "./SecondaryMenuItem";

type Props = {
  data: any;
};

export const SecondaryMenuContainer: FC<Props> = ({ data }): JSX.Element => {
  return (
    <div className="w-full h-full">
      {data.map((item: any, index: number) => (
        <SecondaryMenuItem key={index} item={item} />
      ))}
    </div>
  );
};

export default SecondaryMenuContainer;
