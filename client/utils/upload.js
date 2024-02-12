import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../Firebase";

const uploadFileAndGetDownloadURL = async (file) => {
  try {
    // Generate a unique file name using the current timestamp
    const fileName = new Date().getTime() + file.name;

    // Get the storage reference
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);

    // Upload the file
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Monitor the upload progress
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        console.error("Error uploading file:", error);
        throw error;
      }
    );

    // Get the download URL after the upload is complete
    await uploadTask;
    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

    return downloadURL;
  } catch (error) {
    console.error("Error uploading or getting download URL:", error);
    throw error;
  }
};

export default uploadFileAndGetDownloadURL;
