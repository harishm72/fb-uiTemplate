export const addComment = (comment, id) => ({
    type : 'ADD_COMMENT',
    id,
    comment
})
export const toggleLike = id => ({
    type: 'TOGGLE_LIKE',
    id,
  })
export const toggleOption = (currentState, option) =>({
    type: 'TOGGLE_OPTION',
    currentState,
    option : option
})

export const fetchPosts = () => dispatch => {
    fetch('../data/NewsFeedData.json')
      .then(res => res.json())
      .then(posts =>
        dispatch({
          type: 'FETCH_POSTS',
          posts
        })
      );
  };