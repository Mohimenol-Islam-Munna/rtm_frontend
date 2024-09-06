import { manager } from "../../../manager";

// connected to admin namespace
export const adminSocket = manager.socket("/admin");
