import request from "../../config/request";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteDebt = () => {
  const queryClient = useQueryClient();

  return useMutation((id) => request.delete(`/debt/${id}`), {
    onSuccess: () => {
      queryClient.invalidateQueries("debts");
    },
  });
};
