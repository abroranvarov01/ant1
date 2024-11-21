import { useQuery } from "@tanstack/react-query";
import request from "../../config/request";

export const useGetClient = () => {
  return useQuery(["debts"], () =>
    request.get("/debt").then((res) => res.data)
  );
};
