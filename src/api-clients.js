// const formData = {
//     "email": "1@gmail.com",
//     "password": "123456",
//     "firstName": "vitto",
//     "lastName": "gugu"
// }

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export const register = async (testData) => {
  const response = await fetch(`${API_BASE_URL}/api/users/register`, {
    method: "POST",
    // credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(testData),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }
};
