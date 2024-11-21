import { useMutation } from "@tanstack/react-query";
import request from "../../config/request";
import { useQueryClient } from "@tanstack/react-query";
export const useEditDebt = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (updatedDebt) => request.put(`/debt/${updatedDebt.id}`, updatedDebt),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("debts");
      },
    }
  );
};
