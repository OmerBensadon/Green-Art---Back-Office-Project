const apiURL = "http://cgroup96@194.90.158.74/cgroup96/prod/api/employee/get";

export async function Get(endPoint) {
  try {
    let response = await fetch(`${apiURL}/${endPoint}`);
    let data = await response.json();
    return data;
  } catch (error) {
    console.error(error + "error getting this get info");
  }
}
