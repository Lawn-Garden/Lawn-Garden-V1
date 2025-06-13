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
