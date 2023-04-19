export const fetchEmployees = async () => {
  try {
    const response = await fetch(
      "http://cgroup96@194.90.158.74/cgroup96/prod/api/employee/get"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching employees data: ${error}`);
  }
};
