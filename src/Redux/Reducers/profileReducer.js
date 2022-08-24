const ADD_POST = "ADD-POST";
const DEL_POST = "DEL-POST";
const CHANGE_POST = "CHANGE-POST";
const SET_USER_PROFILE ='SET_USER_PROFILE'

const initialState = {
  postsData: [],
  newPostTitle: "",
  newPostText: "",
  profile:{}
};

const profileReducer = (state = initialState, action) => {
  let copiedState = {...state}
  copiedState.postsData = [...state.postsData]
  switch (action.type) {
    case ADD_POST:
      copiedState.newPostTitle === "" || copiedState.newPostText === ""
        ? alert("Заповніть всі поля")
        : copiedState.postsData.unshift({
            id: 5,
            completed: false,
            postTitle: state.newPostTitle,
            textContent: state.newPostText,
            likesQty: 0,
          });
      copiedState.newPostTitle = '';
      copiedState.newPostText = '';
      return copiedState;
    case DEL_POST:
      copiedState.postsData.shift();
      return copiedState;
    case CHANGE_POST:
      return{...state,newPostTitle:action.newTitle, newPostText:action.newText}
    case SET_USER_PROFILE:
      return {...state,profile:action.profile}
    default:
      return state;
  }
};

export {profileReducer};

export const addPost = () => ({ type: ADD_POST });
export const delPost = () => ({ type: DEL_POST });
export const changePostText = (newTitle, newText) => ({
  type: CHANGE_POST,
  newTitle: newTitle,
  newText: newText,
});
export const setUserProfile = (profile) => ({type:SET_USER_PROFILE,profile})