export const addComment = (comment, id) => ({
    type : 'ADD_COMMENT',
    id,
    comment
})
export const toggleLike = id => ({
    type: 'TOGGLE_LIKE',
    id,
  })
// export const fetchPosts = () => dispatch => {
//     fetch('../data/NewsFeedData.json')
//       .then(res => res.json())
//       .then(posts =>
//         dispatch({
//           type: 'FETCH_POSTS',
//           posts
//         })
//       );
//   };
export const fetchPosts = () =>({
  type:"FETCH_POSTS",
  posts : [
    {
    "id" : 1,
    "isLiked" : true,
    "item_description": "Declare variables not wars!!",
    "image": "",
    "likes": 10,
    "comments": [{
        "comment": "Well said, i agree.",
        "created_at": "Fri May 11 2018 19:17:43 GMT+0530 (IST)"
      },
      {
        "comment": "Good one!",
        "created_at": "Fri May 10 2018 15:23:36 GMT+0530 (IST)"
      }
    ]
  },
  {
    "id": 2,
    "isLiked" : true,
    "item_description": "This is an item with an image",
    "image": "./images/post1.jpg",
    "likes": 20,
    "comments": [{
        "comment": "Spectacular view",
        "created_at": "Fri May 11 2018 19:17:43 GMT+0530 (IST)"
      },
      {
        "comment": "Vacation...?",
        "created_at": "Fri May 10 2018 15:23:36 GMT+0530 (IST)"
      }
    ]
  }
]
})