import axios from "axios";

export async function Request(datasend) {
  return await axios
    .post(process.env.REACT_APP_SERVER_DOMAIN, datasend)
    .then((res) => res.data);
}

export async function Remove(_id) {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_DOMAIN}/deleteclient`,
      {
        _id,
      }
    );
    return response.data;
  } catch (error) {
    // Handle any errors that occur during the API call
    console.error("Error in Remove function:", error);
    throw error; // Re-throw the error to be caught by the caller if needed
  }
}
