import { Manager } from "socket.io-client";
import { socketConfig, URL } from "../config";

export const manager = new Manager(URL, socketConfig);
