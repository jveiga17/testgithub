import newRequest from './newRequest';

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "fiverr");

  try {
    const res = await newRequest.post('/path/to/your/upload/endpoint', data); // Update the endpoint path
    const { url } = res.data;
    return url;
  } catch (err) {
    console.error(err);
  }
};

export default upload;
