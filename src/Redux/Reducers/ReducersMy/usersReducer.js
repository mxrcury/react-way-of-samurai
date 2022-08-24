const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'

const initialState = {
  usersData: [],
  pageUsersSize: 10,
  totalUsersCount: 10,
  currentPage: 1,
  isFetching:false,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        usersData: [
          ...state.usersData.map((user) => {
            if (user.id === action.userId) {
              return { ...user, followed: true };
            } else {
              return user;
            }
          }),
        ],
      };
    case UNFOLLOW:
      return {
        ...state,
        usersData: [
          ...state.usersData.map((user) => {
            if (user.id === action.userId) {
              return { ...user, followed: false };
            } else {
              return user;
            }
          }),
        ],
      };
    case SET_USERS:
      return { ...state, usersData: action.users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_COUNT:
      return { ...state, totalUsersCount: action.totalCount };
    case TOGGLE_FETCHING:
      return {...state,isFetching:action.isFetching}
    default:
      return state;
  }
};

export const follow = (userId) => ({ type: FOLLOW, userId: userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId: userId });
export const setUsers = (users) => ({ type: SET_USERS, users: users });
export const setTotalCount = (totalCount) => ({
  type: SET_TOTAL_COUNT,
  totalCount: totalCount,
});
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage: currentPage,
});
export const toggleFetching = (isFetching)=>({type:TOGGLE_FETCHING,isFetching})
