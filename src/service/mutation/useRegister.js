import { useMutation } from "@tanstack/react-query";
import request from "../../config/request";

export const useRegister = () => {
  return useMutation({
    mutationFn: (data) => {
      return request
        .post("/register", data)
        .then((res) => res.data)
        .catch((error) => {
          console.error("Error:", error.response?.data || error.message);
          throw error;
        });
    },
  });
};
