import { adminSocket } from "./adminNamespaceByIo";

import {
  adminRoomOneSocket,
  adminRoomTwoSocket,
  adminRoomThreeSocket,
} from "./adminNamespaceByIo/rooms";

import { mainSocket } from "./mainNamespaceByIo";

import {
  mainRoomOneSocket,
  mainRoomTwoSocket,
  mainRoomThreeSocket,
} from "./mainNamespaceByIo/rooms";

export const allNamespaceByIo = {
  mainNamespace: {
    mainSocket: mainSocket,
    rooms: {
      mainRoomOneSocket: mainRoomOneSocket,
      mainRoomTwoSocket: mainRoomTwoSocket,
      mainRoomThreeSocket: mainRoomThreeSocket,
    },
  },

  adminNamespace: {
    adminSocket: adminSocket,
    rooms: {
      adminRoomOneSocket: adminRoomOneSocket,
      adminRoomTwoSocket: adminRoomTwoSocket,
      adminRoomThreeSocket: adminRoomThreeSocket,
    },
  },
};
