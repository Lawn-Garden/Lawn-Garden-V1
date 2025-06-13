import axios from './axios';

// 전체 게시글 조회
export const getPosts = async ({ page = 0, size = 5 }) => {
  return await axios.get('/api/v1/posts', {
    params: { page, size },
  });
};

// 단일 게시글 조회
export const getPostById = async (postId) => {
  return await axios.get(`/api/v1/posts/${postId}`);
};

// 글 작성하기
// export const createPost = async ({ link, contents, base64Image }) => {
//   return await axios.post('/api/v1/posts', {
//     link,
//     contents,
//     base64Image,
//   });
// };
export const createPost = async (formData) => {
  return await axios.post('/api/v1/posts', formData);
};