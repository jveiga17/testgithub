
import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "fiverr");

  try {
    console.log('API Key:', process.env.REACT_APP_CLOUDINARY_API_KEY);


    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/joaoveiga/image/upload",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "X-Requested-With": "XMLHttpRequest",
          "X-Api-Key": process.env.REACT_APP_CLOUDINARY_API_KEY, // Access API key from .env
        },
      }
    );

    const { url } = res.data;
    return url;
  } catch (err) {
    console.log("Problem in the upload:", err);
    throw err; // Rethrow the error to handle it elsewhere if needed
  }
};

export default upload;
