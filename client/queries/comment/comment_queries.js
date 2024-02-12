import { publicRequest,userRequest } from "@/requestMethods";

export const addComment = async (data) => {
    try {
        const res = await userRequest.post("/comments", data);
        return res.data;
    } catch (error) {
        console.error("Error adding comment:", error);
        return { error: "Failed to add comment. Please try again later." };
    }
};

export const getComments = async (data) => {
    try {
        const res = await publicRequest.get(`/comments/${data.blogId}`);
        return res.data;
    } catch (error) {
        console.error("Error fetching comments:", error);
        return { error: "Failed to fetch comments. Please try again later." };
    }
};

export const deleteComment = async (data) => {
    try {
        const res = await userRequest.delete(`/comments/${data.commentId}`);
        return res.data;
    } catch (error) {
        console.error("Error deleting comment:", error);
        return { error: "Failed to delete comment. Please try again later." };
    }
}

export const updateComment = async (data) => {
    try {
        const res = await userRequest.put(`/comments/${data.commentId}`, data);
        return res.data;
    } catch (error) {
        console.error("Error updating comment:", error);
        return { error: "Failed to update comment. Please try again later." };
    }
}

export const getComment = async (data) => {
    try {
        const res = await publicRequest.get(`/comments/comment/${data.commentId}`);
        return res.data;
    } catch (error) {
        console.error("Error fetching comment:", error);
        return { error: "Failed to fetch comment. Please try again later." };
    }
}

// get all comments for a blog
export const getAllComments = async (data) => {
    try {
        const res = await publicRequest.get(`/comments/${data.blogId}`);
        return res.data;
    } catch (error) {
        console.error("Error fetching comments:", error);
        return { error: "Failed to fetch comments. Please try again later." };
    }
}