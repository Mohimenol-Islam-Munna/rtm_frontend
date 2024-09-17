import { FC } from "react";

type Props = {};

export const NoUserViewPage: FC<Props> = (): JSX.Element => {
  return (
    <div className="w-full min-h-full p-4 flex items-center justify-center dark:bg-black dark:bg-dot-white/[1] bg-dot-black/[1] relative">
      <h2>This is no open user information.</h2>
    </div>
  );
};
