
const postReducer = (state = [], action) => {

    switch (action.type) {
        case 'FETCH_POSTS':
            return (
                action.posts
            )
        case 'TOGGLE_LIKE':
            return state.map(post => {
                if (post.id === action.id) {
                    return {
                        ...post,
                        isLiked: !post.isLiked,
                        likes: post.isLiked ? post.likes - 1 : post.likes + 1
                    }
                }
                return post;
            })

        case 'ADD_COMMENT':
            return state.map(post => {
                if (post.id === action.id) {
                    let newComment = {
                        "comment": action.comment[0],
                        'created_at': action.comment[1]
                    }
                    return {
                        ...post,
                        comments: [...post.comments, newComment]
                    }
                }
                return post;
            })

        default:
            return state;
    }
}

export default postReducer