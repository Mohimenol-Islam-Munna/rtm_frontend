import { adminSocket } from "./adminNamespace";
import { adminRoomOneSocket } from "./adminNamespace/rooms/roomOne";
import { adminRoomThreeSocket } from "./adminNamespace/rooms/roomThree";
import { adminRoomTwoSocket } from "./adminNamespace/rooms/roomTwo";

import { mainSocket } from "./mainNamespace";
import { roomOneSocket } from "./mainNamespace/rooms/roomOne";
import { roomThreeSocket } from "./mainNamespace/rooms/roomThree";
import { roomTwoSocket } from "./mainNamespace/rooms/roomTwo";

export const allNamespaceByManager = {
  mainNamespace: {
    mainSocket: mainSocket,
    rooms: {
      roomOneSocket: roomOneSocket,
      roomTwoSocket: roomTwoSocket,
      roomThreeSocket: roomThreeSocket,
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
