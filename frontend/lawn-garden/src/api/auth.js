import axios from "./axios";

export const signUp = async ({ email, githubId, password }) => {
    return await axios.post('/api/v1/users/register', {
        username: githubId, // 서버랑 맞게 하려고 요렇게 수정함
        password,
        email,
    });
};

export const login = async ({ username, password }) => {
  return await axios.post('/api/v1/auth/login', {
    username,
    password,
  });
};
