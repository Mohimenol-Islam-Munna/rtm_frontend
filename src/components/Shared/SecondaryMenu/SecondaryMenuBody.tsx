import { FC } from "react";
import SecondaryMenuContainer from "./SecondaryMenuContainer";

type Props = {
  data: any[];
  type: string;
  refetchHandler: () => void;
};

export const SecondaryMenuBody: FC<Props> = ({
  data,
  type,
  refetchHandler,
}): JSX.Element => {
  return (
    <div className="w-full h-full overflow-y-auto">
      {data.length <= 0 ? (
        <h4 className="text-center mt-5">No Data Found</h4>
      ) : (
        <SecondaryMenuContainer
          data={data}
          type={type}
          refetchHandler={refetchHandler}
        />
      )}
    </div>
  );
};
