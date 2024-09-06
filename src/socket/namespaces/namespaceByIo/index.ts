import { adminSocket } from "./adminNamespaceIo";
import { adminRoomOneSocket } from "./adminNamespaceIo/rooms/roomOne";
import { adminRoomThreeSocket } from "./adminNamespaceIo/rooms/roomThree";
import { adminRoomTwoSocket } from "./adminNamespaceIo/rooms/roomTwo";
import { mainSocket } from "./mainNamespaceIo";
import {
  mainRoomOneSocket,
  mainRoomTwoSocket,
  mainRoomThreeSocket,
} from "./mainNamespaceIo/rooms";

export const allNamespaceByIo = {
  mainNamespace: {
    mainSocket: mainSocket,
    rooms: {
      roomOneSocket: mainRoomOneSocket,
      roomTwoSocket: mainRoomTwoSocket,
      roomThreeSocket: mainRoomThreeSocket,
    },
  },

  adminNamespace: {
    adminSocket: adminSocket,
    rooms: {
      roomOneSocket: adminRoomOneSocket,
      roomTwoSocket: adminRoomTwoSocket,
      roomThreeSocket: adminRoomThreeSocket,
    },
  },
};
