import { allNamespaceByManager } from "../../namespaces/namespacesByManager";

export const useNamespaceByManager = () => {
  return {
    ...allNamespaceByManager,
  };
};
