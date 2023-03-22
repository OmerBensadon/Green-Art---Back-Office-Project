const apiURL = "https://localhost:????/api";

export async function postData(endpoint, bodyData) {
  try {
    const response = await fetch(`${apiURL}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error posting data to ${endpoint}: ${error}`);
  }
}
