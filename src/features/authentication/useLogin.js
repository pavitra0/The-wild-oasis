import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      navigate("/dashboard", { replace: true });
      queryClient.setQueryData(["user"], user.user);
      toast.success("Successfully logged in.");
    },
    onError: (err) => {
      const errorMessage = err.response?.data?.message || "An error occurred";
      console.log("errOr", errorMessage);
      toast.error("Provided email or password is invalid");
    },
  });

  return { login, isLoading };
}
