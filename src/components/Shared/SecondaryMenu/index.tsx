import { FC } from "react";
import { SecondaryMenuBody } from "./SecondaryMenuBody";
import { SecondaryMenuHeader } from "./SecondaryMenuHeader";
import { ApiDataStateType } from "../../../types/ApiDataStateType";

type Props = {
  type: string;
  allData: ApiDataStateType;
  refetchHandler: () => void;
};

export const SecondaryMenu: FC<Props> = ({ allData, type }): JSX.Element => {
  const { isLoading, error, data } = allData;

  return (
    <div className="w-full h-full">
      <SecondaryMenuHeader type={type} />
      <div className="w-full h-[calc(100%-50px)] overflow-y-auto">
        {isLoading && <h4 className="text-center mt-5">Loading...</h4>}
        {!isLoading && error && (
          <h4 className="text-center mt-5 text-red-400">Error</h4>
        )}
        {!isLoading && !error && !data && (
          <h4 className="text-center mt-5">No Data Found</h4>
        )}
        {!isLoading && !error && data && <SecondaryMenuBody data={data} />}
      </div>
    </div>
  );
};
