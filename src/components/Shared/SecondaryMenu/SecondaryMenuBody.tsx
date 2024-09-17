import { FC } from "react";
import SecondaryMenuContainer from "./SecondaryMenuContainer";

type Props = {
  data: any;
};

export const SecondaryMenuBody: FC<Props> = ({ data }): JSX.Element => {
  return (
    <div className="w-full h-[calc(100%-50px)] overflow-y-auto">
      <SecondaryMenuContainer data={data} />
    </div>
  );
};
