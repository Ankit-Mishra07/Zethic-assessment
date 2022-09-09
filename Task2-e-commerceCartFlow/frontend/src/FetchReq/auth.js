import { toast } from "react-toastify";
import { setCookie } from "../utils/cookies";
import { baseURL } from "./baseURL";

export const handleAuthLogin = async (payload) => {
  await fetch(`${baseURL}/auth/login`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        toast("Logged in successfully");
        setCookie("token", res.data.token);
        setCookie("username", res.data.username);
        setCookie("userId", res.data._id);
      } else {
        toast.error(res.message);
      }
    })
    .catch((error) => {
      console.log(error.message);
      toast.error("Something went wrong");
    });
};

export const handleAuthRegister = async (payload) => {
  await fetch(`${baseURL}/auth/register`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        toast.success("Registered successfully");
      } else {
        toast.error(res.message);
      }
    })
    .catch((error) => {
      console.log(error.message);
      toast.error("Something went wrong");
    });
};
