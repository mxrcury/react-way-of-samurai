import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { profileReducer } from "./Reducers/profileReducer";
import { messageReducer } from "./Reducers/messageReducer";
import { sidebarReducer } from "./Reducers/sidebarReducer";
import { usersReducer } from "./Reducers/usersReducer";

// const combinedReducers = combineReducers({
//     reducer: {
//       profilePage: profileReducer,
//       messagesPage: messageReducer,
//     },
//   })

const store = configureStore({
  reducer: {
    profilePage: profileReducer,
    messagesPage: messageReducer,
    sidebar: sidebarReducer,
    usersPage:usersReducer
  },
});

export { store };
