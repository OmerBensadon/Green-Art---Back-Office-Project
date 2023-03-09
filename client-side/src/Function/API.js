const apiURL = "https://localhost:????/api";

export async function Get(endPoint) {
  try {
    let response = await fetch(`${apiURL}/${endPoint}`);
    let data = await response.json();
    return data;
  } catch (error) {
    console.error(error + "error getting this get info");
  }
}
