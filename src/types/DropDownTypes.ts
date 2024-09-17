import { IconType } from "react-icons";

export type DataItemType = {
  id: number;
  name: string;
  Icon: IconType;
  path?: string;
  clickHandler?: () => any;
};
