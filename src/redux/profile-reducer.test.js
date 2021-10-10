import profileReducer, {
  addPostActionCreator,
  deletePost,
} from "./profile-reducer";
let state = {
  posts: [
    { id: 1, message: "Hi, how are you? ", likesCount: 15 },
    { id: 2, message: "It's my first post ", likesCount: 10 },
    { id: 3, message: "Kak tebe takoe Elon Sobaks? ", likesCount: 7 },
    { id: 6, message: "Kot poel kaktus ", likesCount: 1 },
  ],
};

test("Length of posts should be incremented", () => {
  //1. test data
  let action = addPostActionCreator("test text");

  //2.action
  let newState = profileReducer(state, action);

  //3. expectation ожидаем, что длина постов будет равна пяти
  expect(newState.posts.length).toBe(5);
});

test("Message of the new post will be correct", () => {
  //1. test data
  let action = addPostActionCreator("test text");

  //2.action
  let newState = profileReducer(state, action);

  //3. expectation ожидаем, что длина постов будет равна пяти
  expect(newState.posts[4].message).toBe("test text");
});

test("After deleting messages from post will be arr decrement", () => {
  //1. test data
  let action = deletePost(1);

  //2.action
  let newState = profileReducer(state, action);

  //3. expectation ожидаем, что длина постов будет равна 3
  expect(newState.posts[4].message).toBe(3);
});

test("After deleting length shoudn't decrement if id is incorrect", () => {
  //1. test data
  let action = deletePost(1000);

  //2.action
  let newState = profileReducer(state, action);

  //3. expectation ожидаем, что длина постов будет равна 3
  expect(newState.posts.length).toBe(4);
});
