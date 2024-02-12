import { publicRequest } from "@/requestMethods";

export const getUser = async (data) => {
    // console.log("dataxx",data.userId);
  try {
    const res = await publicRequest.get(`/users/${data.userId}`);
    console.log("resss",res.data);
    return res.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    return { error: "Failed to fetch user. Please try again later." };
  }
};
