const ADD_POST = "ADD-POST";
const DEL_POST = "DEL-POST";
const CHANGE_POST = "CHANGE-POST";
const SHOW_PROFILE = "SHOW_PROFILE";
const SET_PROFILE_ID = "SET_PROFILE_ID";

const initialState = {
  postsData: [],
  newPostTitle: "",
  newPostText: "",
  currentUser: {
    aboutMe: `Hello World! I'm Front End Beginner from Ukraine`,
    contacts: {
      facebook: null,
      website: null,
      vk: null,
      twitter: null,
      instagram: null,
      youtube: null,
      github: null,
    },
    fullName: "mercury",
    lookingForAJob: true,
    lookingForAJobDescription: 'ReactJS+ReduxToolkit,HTML,CSS/SCSS,JS',
    photos: { small: 'https://i.pinimg.com/564x/50/7b/e8/507be8d90e6f21a46dec921c649be21d.jpg', large: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp2751038.jpg&f=1&nofb=1' },
    userId: 1,
  },
  currentId: 1,
};

const profileReducer = (state = initialState, action) => {
  let copiedState = { ...state };
  copiedState.postsData = [...state.postsData];
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
      copiedState.newPostTitle = "";
      copiedState.newPostText = "";
      return copiedState;
    case DEL_POST:
      copiedState.postsData.shift();
      return copiedState;
    case CHANGE_POST:
      return {
        ...state,
        newPostTitle: action.newTitle,
        newPostText: action.newText,
      };
    case SHOW_PROFILE:
      return {
        ...state,
        currentUser: { ...state.currentUser, ...action.user },
      };
    case SET_PROFILE_ID:
      return { ...state, currentId: action.userId };
    default:
      return state;
  }
};

export { profileReducer };

export const addPostCreator = () => ({ type: ADD_POST });
export const delPostCreator = () => ({ type: DEL_POST });
export const changePostCreator = (newTitle, newText) => ({
  type: CHANGE_POST,
  newTitle: newTitle,
  newText: newText,
});
export const showProfile = (user) => ({ type: SHOW_PROFILE, user });
export const setProfileId = (userId) => ({ type: SET_PROFILE_ID, userId });
