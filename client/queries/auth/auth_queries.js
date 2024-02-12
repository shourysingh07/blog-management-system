import { publicRequest } from "@/requestMethods";

export const registerUser = async (data) => {
  try {
    const res = await publicRequest.post(`/auth/register`,data);
    console.log("resss",res);
    return res;
  } catch (error) {
    console.error("Error registering user:", error);
    return { error: "Failed to register user. Please try again later." };
  }
};

export const loginUser = async (data) => {
    try {
      const res = await publicRequest.post(`/auth/login`,data);
      console.log("resss",res.data);
      return res.data;
    } catch (error) {
      console.error("Error login user:", error);
      return { error: "Failed to login user. Please try again later." };
    }
};

