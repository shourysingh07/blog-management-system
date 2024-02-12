import { publicRequest,userRequest } from "@/requestMethods";

export const getAllBlogs = async () => {
  try {
    const res = await publicRequest.get('/blogs');
    return res.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return { error: "Failed to fetch blogs. Please try again later." };
  }
};

export const getBlogDetails=async(data)=>{
  try{
    const res=await publicRequest.get(`/blogs/${data.blogId}`);
    return res.data;
  }catch (error) {
    console.error("Error fetching blog detail:", error);
    return { error: "Failed to fetch blog detail. Please try again later." };
  }
}

export const addNewBlog=async(data)=>{
  try{
    const res=await userRequest.post('/blogs/add',data);
    return res.data;
  }catch (error) {
    console.error("Error adding new blog:", error);
    return { error: "Failed to add new blog. Please try again later." };
  }
}

export const updateBlog=async(data)=>{
  try{
    const res=await userRequest.put(`/blogs/${data.blogId}`,data);
    return res.data;
  }catch (error) {
    console.error("Error updating blog:", error);
    return { error: "Failed to update blog. Please try again later." };
  }
}

export const getUserBlogs=async(data)=>{
  try{
    const res=await userRequest.get(`/users/user/${data.userId}`);
    return res.data;
  }catch (error) {
    console.error("Error fetching user blogs:", error);
    return { error: "Failed to fetch user blogs. Please try again later." };
  }
}