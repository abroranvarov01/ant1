import request from "../../config/request";
import { useQueryClient, useMutation } from "@tanstack/react-query";

export const useCreateDebt = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => request.post("/debt", data).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries("debts");
    },
  });
};
