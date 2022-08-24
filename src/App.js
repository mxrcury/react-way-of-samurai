import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Profile from "./Components/Profile/ProfileContainer";
import Header from "./Components/Header/Header";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import FriendsPage from "./Components/Friends/FriendsPage";
import NavigationContainer from "./Components/Navigation/NavigationContainer";
import Messages from './Components/Messages/Messages'
import {UsersContainer} from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";

const App = (props) => {
  return (
    <div className="wrapper">
      <Header />
      <NavigationContainer />
      <div className="wrapper-content">
        <Routes>
          <Route path="/profile/:id" element={<ProfileContainer/>}/>
          <Route path="/profile" element={<ProfileContainer/>}/>
          <Route path="/messages/*" element={<Messages/>}/>
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/users" element={<UsersContainer/>}/>
          <Route path="/friends" element={<FriendsPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
