const initialState = {
  posts: [],
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter(post => post && post.id !== action.id),
      }
    case "ADD_POST":
      return {
        ...state,
        posts: [...state.posts, action.post],
      }

    default:
      return state;
  }

  return { ...state }
}

export default postReducer;