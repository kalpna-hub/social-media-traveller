import axios from 'axios';

export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'FETCH_POSTS_FAILURE', error: error.message });
    }
  };
};