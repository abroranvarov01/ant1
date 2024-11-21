import { useMutation } from "@tanstack/react-query";
import request from "../../config/request";
import { saveState } from "../../config/storge";

export const useLogin = () => {
  return useMutation({
    mutationFn: (data) => request.post("/login", data).then((res) => res.data),
    onSuccess: (data) => {
      saveState("user", data);
    },
    onError: () => {},
  });
};
