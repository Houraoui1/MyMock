import axios from "axios";

export async function Request(datasend) {
  return await axios
    .post(`http://localhost:8000/`, datasend)
    .then((res) => res.data);
}

export async function Remove(_id) {
  try {
    const response = await axios.post("http://localhost:8000/deleteclient", {
      _id,
    });
    return response.data;
  } catch (error) {
    // Handle any errors that occur during the API call
    console.error("Error in Remove function:", error);
    throw error; // Re-throw the error to be caught by the caller if needed
  }
}
