const initialState = {
    posts: [],
    loading: false,
    error: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_POSTS_SUCCESS':
        return { ...state, posts: action.payload, loading: false, error: null };
      case 'FETCH_POSTS_FAILURE':
        return { ...state, posts: [], loading: false, error: action.error };
      default:
        return state;
    }
  };
  
  export default rootReducer;