import users from "../db/users";

export const loginAPI = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({
      token: users[1].token,
      user: users[1]
    }), 500);
  });
} 